// PRIVATE KEY TO "ADDRESS" AKA PUBLIC KEY
const secp256k1 = require('secp256k1') // easier to use than ec
const createKeccakHash = require('keccak')

// Add private key generated from running node script generatePrivateKey.js
const PRIVATE_KEY =
	'477dcee88973a95384e74626b513c64f38d64a0f691ce7451e38f04fb6b80bcd'

// convert our hex string to a buffer
const privateKeyBuffer = Buffer.from(PRIVATE_KEY, 'hex')
// console.log(privateKeyBuffer)

// use private key to generate public key on the secp256k1 elliptic curve
const pubKey = secp256k1.publicKeyCreate(privateKeyBuffer, false).slice(1)
// console.log(pubKey)

// then we';ll take the keccak256 hash of the public key
const hash = createKeccakHash('keccak256').update(Buffer.from(pubKey)).digest()
// console.log(hash)

// the address is the last 20 bytes of the hash
const address = hash.slice(-20)

// voila! we have ourselves a public address
console.log(address.toString('hex'))
// console.log(address.length)
// console.log(20 * 4)
