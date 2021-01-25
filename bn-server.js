import BlocknativeSdk from 'bnc-sdk'
import WebSocket from 'ws' // only neccessary in server environments

// create options object
const options = {
  dappId: 'Your dappId here',
  networkId: 1,
  transactionHandlers: [event => console.log(event.transaction)],
  ws: WebSocket
}

// initialize and connect to the api
const blocknative = new BlocknativeSdk(options)