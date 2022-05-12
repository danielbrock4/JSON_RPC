const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx')
const { default: Common, Chain, Hardfork } = require('@ethereumjs/common')
const axios = require('axios')
require('dotenv').config()

const common = new Common({ chain: Chain.Rinkeby, hardfork: Hardfork.London })

// if you set up the .env file correctly, your private key and alchemy endpoint will be accessed automatically using `process.env`
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PUBLIC_KEY_1 = process.env.PUBLIC_KEY_1
const ALCHEMY_RINKEBY_URL = process.env.ALCHEMY_RINKEBY_URL

const txParams = {
	nonce: 19, // you will need to change this! Check on Metamask or eth_getTransactionCount() json_rpc 0x0 if first time
	gasLimit: '0x5208',
	maxPriorityFeePerGas: '0x3b9aca00',
	maxFeePerGas: '0x3b9acaff',
	to: PUBLIC_KEY_1, // choose someone to send some ETH to!
	value: '0x5af3107a4000', // .0001 ether
	chainId: '0x04', // goerli = 0x05 and Rinkeby = 0x04'
	type: '0x02', // eip 1559
	// data: '',
}

const tx = FeeMarketEIP1559Transaction.fromTxData(txParams, { common })

const privateKey = Buffer.from(PRIVATE_KEY, 'hex')
// sign transaction with private key this uses elliptic curve math for a digital signature
const signedTx = tx.sign(privateKey)
// serialize this transaction ths involves some special padding and RLP encoding
const serializedTx = signedTx.serialize()

const rawTx = '0x' + serializedTx.toString('hex')

axios
	.post(ALCHEMY_RINKEBY_URL, {
		jsonrpc: '2.0',
		id: 1,
		method: 'eth_sendRawTransaction',
		params: [rawTx],
	})
	.then((response) => {
		if (response.data.error) {
			console.log(response.data.error)
		} else {
			console.log('Tx hash: ' + response.data.result)
		}
	})
