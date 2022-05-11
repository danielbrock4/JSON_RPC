/*
Create Project Structure
In your terminal, in the folder of your choice, run mkdir chainshot-json-activity && cd chainshot-json-activity
-Run npm init -y
-Run npm install axios
-Run touch index.js
 */

const axios = require('axios')
require('dotenv').config()

// if you set up the .env file correctly, your private key and alchemy endpoint will be accessed automatically using `process.env`
const ALCHEMY_RINKEBY_URL = process.env.ALCHEMY_RINKEBY_URL

// eth_getBlockByNumber --------------------------------------------------------------------
axios
	.post(ALCHEMY_RINKEBY_URL, {
		jsonrpc: '2.0',
		id: 1,
		method: 'eth_getBlockByNumber',
		params: [
			'0xb443', // block 46147
			true, // retrieve the full transaction object in transactions array
		],
	})
	.then((response) => {
		console.log(response.data.result)
	})

// eth_blockNumber --------------------------------------------------------------------
axios
	.post(ALCHEMY_RINKEBY_URL, {
		jsonrpc: '2.0',
		id: 83,
		method: 'eth_blockNumber',
		params: [],
	})
	.then((response) => {
		console.log(response.data.result)
	})
