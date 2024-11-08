const { ethers } = require("hardhat");
require('dotenv').config();
async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy HybridEncryption contract
  const HybridEncryption = await ethers.getContractFactory("HybridEncryption");
  const encryptionContract = await HybridEncryption.deploy();
  
  console.log("HybridEncryption contract deployed to:", encryptionContract.target);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
