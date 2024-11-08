const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GPUMarketplace Contract Tests", function () {
  let computeToken, reputation, encryption, gpuMarketplace;
  let owner, user1, user2;

  beforeEach(async function () {
    // Get signers (accounts)
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy ComputeToken
    const ComputeToken = await ethers.getContractFactory("ComputeToken");
    computeToken = await ComputeToken.deploy();
    await computeToken.waitForDeployment();

    // Deploy Reputation
    const Reputation = await ethers.getContractFactory("Reputation");
    reputation = await Reputation.deploy();
    await reputation.waitForDeployment();

    // Deploy HybridEncryption
    const HybridEncryption = await ethers.getContractFactory("HybridEncryption");
    encryption = await HybridEncryption.deploy();
    await encryption.waitForDeployment();

    // Deploy GPUMarketplace
    const GPUMarketplace = await ethers.getContractFactory("GPUMarketplace");
    gpuMarketplace = await GPUMarketplace.deploy(computeToken.address, reputation.address, encryption.address);
    await gpuMarketplace.waitForDeployment();
  });

  it("Should deploy the contracts successfully", async function () {
    expect(computeToken.address).to.be.properAddress;
    expect(reputation.address).to.be.properAddress;
    expect(encryption.address).to.be.properAddress;
    expect(gpuMarketplace.address).to.be.properAddress;
  });

  it("Should mint tokens to the owner", async function () {
    const ownerBalance = await computeToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(1000000 * 10 ** 18); // 1 million tokens
  });

  it("Should allow the owner to mint new tokens", async function () {
    await computeToken.mint(user1.address, 1000 * 10 ** 18);
    const user1Balance = await computeToken.balanceOf(user1.address);
    expect(user1Balance).to.equal(1000 * 10 ** 18);
  });

  it("Should allow GPU provider to list a GPU", async function () {
    await gpuMarketplace.listGPU("GPU 1", 10); // Price per hour = 10 tokens
    const gpu = await gpuMarketplace.gpus(1);
    expect(gpu.description).to.equal("GPU 1");
    expect(gpu.pricePerHour).to.equal(10);
    expect(gpu.available).to.equal(true);
  });

  it("Should allow user to rent a GPU", async function () {
    await gpuMarketplace.listGPU("GPU 1", 10); // Price per hour = 10 tokens
    await computeToken.connect(user1).approve(gpuMarketplace.address, 100 * 10 ** 18);
    await gpuMarketplace.connect(user1).rentGPU(1, 10); // Renting for 10 hours
    const gpu = await gpuMarketplace.gpus(1);
    expect(gpu.available).to.equal(false); // GPU should no longer be available
  });

  it("Should allow providers and users to increase reputation", async function () {
    await gpuMarketplace.connect(owner).listGPU("GPU 1", 10); // Price per hour = 10 tokens
    await gpuMarketplace.connect(user1).rentGPU(1, 10); // Rent GPU for 10 hours

    // Increase reputation for both provider and user
    await reputation.increaseReputation(owner.address, true);
    await reputation.increaseReputation(user1.address, false);

    const providerReputation = await reputation.providerReputation(owner.address);
    const userReputation = await reputation.userReputation(user1.address);

    expect(providerReputation).to.equal(1);
    expect(userReputation).to.equal(1);
  });

  it("Should allow admin to store encrypted data", async function () {
    const encryptedData = "encrypted_data_example";
    const publicKey = "public_key_example";

    await encryption.storeEncryptedData(owner.address, encryptedData, publicKey);

    const [storedEncryptedData, storedPublicKey] = await encryption.getEncryptedData(owner.address);
    expect(storedEncryptedData).to.equal(encryptedData);
    expect(storedPublicKey).to.equal(publicKey);
  });

  it("Should allow admin to decrypt data", async function () {
    const encryptedData = "encrypted_data_example";
    const publicKey = "public_key_example";

    await encryption.storeEncryptedData(owner.address, encryptedData, publicKey);
    const decryptedData = await encryption.decryptData(owner.address);
    expect(decryptedData).to.equal(encryptedData);
  });

  it("Should prevent non-admin from decrypting data", async function () {
    const encryptedData = "encrypted_data_example";
    const publicKey = "public_key_example";

    await encryption.storeEncryptedData(owner.address, encryptedData, publicKey);

    // Try to decrypt data with a non-admin account
    await expect(
      encryption.connect(user1).decryptData(owner.address)
    ).to.be.revertedWith("Only admin can decrypt data");
  });
});
