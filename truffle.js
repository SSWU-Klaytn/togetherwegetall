const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = `https://api.baobab.klaytn.net:8651`
const PRIVATE_KEY = '0x087a17a582455f8a713066c101a9b39d78d821b1cd7ee02ffadfc20bead32d2a'

/*
module.exports = {
  networks: {  
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    }
  },
}
*/

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // 모든 네트워크 ID에 대해
    },
    testnet: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, "https://api.baobab.klaytn.net:8651"),
      network_id: '1001', // Klaytn baobab 테스트넷의 네트워크 ID
      gas: '8500000',
      gasPrice: null
    },
  }
};