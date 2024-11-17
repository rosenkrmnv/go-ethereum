require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // URL for the local devnet
      chainId: 1337,               // Common chain ID for local Ethereum networks
      accounts: [
        "0x59c6995e998f97a5a0044966f094538e01e3f0c8f211bc7e2185ea6c8b7b25d6", // Private key for testing
      ],
    },
  },
};

