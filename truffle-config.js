/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    //polygon Infura mainnet
    polygon_infura_mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:
         "https://polygon-mainnet.infura.io/v3/" + infuraProjectId
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    //polygon Infura testnet
    polygon_infura_testnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://rpc-mumbai.matic.today"
      ),
      network_id: 80001,
      skipDryRun: true,
      confirmations: 2,
      timeoutBlocks: 200
    },
    //polygon testnet
    polygon_testnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:  `https://rpc-mumbai.matic.today`,
        chainId: 3
      }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    //polygon mainnet
    polygon_mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl:  `https://rpc-mainnet.maticvigil.com`,
        chainId: 137
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    }
  },

  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
