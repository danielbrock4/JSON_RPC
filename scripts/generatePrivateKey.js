// MANUAL EXAMPLE OF PRIVATE KEY GENERATION

// Import Node Modules
const crypto = require('crypto')

// DONT USE [For Learning Purposes onlY] - An example of how private key bits get generated. Math.random is not secure enough for actual use
let privateKey = ''
for (let i = 0; i < 256; i++) {
	privateKey += Math.round(Math.random())
}

// console.log(privateKey)

// 8 bits = 1 byte
// console.log(8 * 32)

// randomBytes[byte#] creates hexademical array
const buffer = crypto.randomBytes(32)
// console.log(buffer)

// Needs to be stringified
console.log(buffer.toString('hex'))
