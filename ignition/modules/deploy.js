const { ethers } = require("hardhat");

async function main() {

    // Step 1: Deploy ComputeToken
    console.log("Deploying ComputeToken...");
    const ComputeToken = await ethers.getContractFactory("ComputeToken");
    const computeToken = await ComputeToken.deploy();
    console.log("ComputeToken deployed to:", computeToken.target);

    // Step 2: Deploy Reputation
    console.log("Deploying Reputation...");
    const Reputation = await ethers.getContractFactory("Reputation");
    const reputation = await Reputation.deploy();
    console.log("Reputation deployed to:", reputation.target);

    // Step 3: Deploy HybridEncryption
    console.log("Deploying HybridEncryption...");
    const HybridEncryption = await ethers.getContractFactory("HybridEncryption");
    const encryption = await HybridEncryption.deploy();
    console.log("HybridEncryption deployed to:", encryption.target);

    // Step 4: Deploy GPUMarketplace with dependencies
    console.log("Deploying GPUMarketplace...");
    const GPUMarketplace = await ethers.getContractFactory("GPUMarketplace");
    const gpuMarketplace = await GPUMarketplace.deploy(
        computeToken.address, // Pass ComputeToken address to GPUMarketplace
        reputation.address,    // Pass Reputation address to GPUMarketplace
        encryption.address     // Pass HybridEncryption address to GPUMarketplace
    );
    console.log("GPUMarketplace deployed to:", gpuMarketplace.target);
}

// Running the script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
