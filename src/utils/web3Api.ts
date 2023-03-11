import Web3 from "web3";


const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export function sendTransaction(from: string, to: string) {
    // In Node.js use: const Web3 = require('web3');
    let sendState
    let sendHash: any
    let sendReceipt: any
    let sendConfirmation
    let sendPayload: any

    web3.eth.sendTransaction({ from, data: '0x432...', to })
        .once('sending', (payload) => { sendState = 'sending'; sendPayload = payload })
        .once('sent', (payload) => { sendState = 'sent'; sendPayload = payload })
        .once('transactionHash', (hash) => { sendHash = hash })
        .once('receipt', (receipt) => { sendReceipt = receipt })
        .on('confirmation', (confNumber, receipt, latestBlockHash) => { sendConfirmation = { 'confNumber': confNumber, 'receipt': receipt, 'hash': latestBlockHash } })
        .on('error', (error) => { console.log(error) })
        .then((receipt) => {
            // will be fired once the receipt is mined
            sendReceipt = receipt
        });
    return { 'state': sendState, 'hash': sendHash, 'receipt': sendReceipt, 'confirm': sendConfirmation, 'payload': sendPayload }
}

export function getEthAccounts() {
    return web3.eth.getAccounts()
}