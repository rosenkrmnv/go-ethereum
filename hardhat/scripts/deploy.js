const { artifacts, network, web3 } = require("hardhat");

async function main() {
  console.log("Deploying contracts...");

  const accounts = await web3.eth.getAccounts();
  const deployer = accounts[0];

  console.log("Deploying contracts with the account:", deployer);

  // Get contract artifact and deploy
  const LockArtifact = artifacts.readArtifactSync("Lock");

  const unlockTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
  const Lock = new web3.eth.Contract(LockArtifact.abi);

  const deployment = await Lock.deploy({
    data: LockArtifact.bytecode,
    arguments: [unlockTime],
  }).send({ from: deployer, gas: 3000000 });

  console.log("Contract deployed to:", deployment.options.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
