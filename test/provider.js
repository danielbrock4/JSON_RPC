const ganache = require('ganache-core')
const promisfy = require('../promisfy')

;('C:UsersDaniel Brockdev\bootcampchainshot_reposJSON_RPC\node_modulespromisfyindex.js')
;('C:UsersDaniel Brockdev\bootcampchainshot_reposJSON_RPCpractice_problems\request')

const provider = ganache.provider()

provider.send = promisfy(provider.send)

module.exports = provider
