// Test Script before adding argument parameter
// let paramHex = "0x13"

// (1) Get parameter from script terminal entry
let paramHex = process.argv[2]

function hexToNum(strHex) {
	let hexString = strHex.slice(-2) // remove 0x that Ethereum adds to their hexadecimal representation
	let hex = parseInt(hexString, 16) // Convert to integer hex
	return hex
}

const result = hexToNum(paramHex)
console.log(`Number: ${paramHex} = ${result}`)
