// Test Script before adding argument parameter
// const paramNum = 19

// (1) Get parameter from script terminal entry
const param = process.argv[2]

//(2) Terminal Entry is a string to convert it to number
const paramNum = parseInt(param)
// const paramNum = parseFloat(param)

//(3) Ethereum puts 0x in front of there data. Convert number to hexadecimal with .toString(16)
function numToHexString(num) {
	return '0x' + num.toString(16)
}

// (4) Call function
const result = numToHexString(paramNum)

// (5) Log Result
console.log(`Ethereum Hexadecimal: ${param} = ${result}`)
