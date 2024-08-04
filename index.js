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
        console.error(`Error Occurred in getWalletBalance: ${error}`)
    }
}

const airDropSol = async() => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)
        await connection.confirmTransaction(fromAirDropSignature)
    } catch (error) {
        console.error(`Error Occurred in airDropSol: ${error}`)
    }
}


const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}
main()
// console.log(publicKey)
// console.log(secretKey)