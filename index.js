const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
} = require('@solana/web3.js')

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey

const getWalletBalance = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance: ${walletBalance}`)
    } catch (error) {
        console.error(`Error Occurred: ${error}`)
    }
}
const main = async() => {
    await getWalletBalance()
}
main()
// console.log(publicKey)
// console.log(secretKey)