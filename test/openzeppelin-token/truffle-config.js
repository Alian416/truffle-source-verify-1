const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  compilers: {
    solc: {
      version: "0.6.11",
    },
  },
  plugins: ["truffle-source-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          `${process.env.MNEMONIC}`,
          `wss://ropsten.infura.io/ws/v3/${process.env.INFURA_ID}`
        );
      },
      gas: 0x7a1200,
      network_id: 3,
      skipDryRun: true,
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          `${process.env.MNEMONIC}`,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`
        );
      },
      gas: 0x7a1200,
      network_id: 4,
      skipDryRun: true,
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          `${process.env.MNEMONIC}`,
          `https://goerli.infura.io/v3/${process.env.INFURA_ID}`
        );
      },
      gas: 0x7a1200,
      network_id: 5,
      skipDryRun: true,
    },
    sokol: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://sokol.poa.network`
        );
      },
      gas: 0x7a1200,
      network_id: 77,
      skipDryRun: true,
    },
  },
};
