const { expect } = require("chai");

describe("HybridEncryption", function () {
  let HybridEncryption;
  let encryptionContract;
  let admin;
  let user;

  beforeEach(async function () {
    // Get the contract factory and signers
    HybridEncryption = await ethers.getContractFactory("HybridEncryption");
    [admin, user] = await ethers.getSigners();

    // Deploy contract
    encryptionContract = await HybridEncryption.deploy();
  });

  it("Should deploy the contract and set the correct admin", async function () {
    expect(await encryptionContract.admin()).to.equal(admin.address);
  });

  it("Should allow the admin to store encrypted data", async function () {
    const encryptedData = ethers.hexlify(ethers.toUtf8Bytes("Encrypted Data"));
    const publicKey = ethers.hexlify(ethers.toUtf8Bytes("Public Key"));

    await encryptionContract.storeEncryptedData(user.address, encryptedData, publicKey);

    const storedData = await encryptionContract.getEncryptedData(user.address);
    expect(storedData[0]).to.equal(encryptedData);
    expect(storedData[1]).to.equal(publicKey);
  });

  it("Should only allow admin to store encrypted data", async function () {
    const encryptedData = ethers.hexlify(ethers.toUtf8Bytes("Encrypted Data"));
    const publicKey = ethers.hexlify(ethers.toUtf8Bytes("Public Key"));

    // Admin stores data
    await encryptionContract.storeEncryptedData(user.address, encryptedData, publicKey);

    // Try to store data from a non-admin account
    await expect(
      encryptionContract.connect(user).storeEncryptedData(user.address, encryptedData, publicKey)
    ).to.be.revertedWith("Only admin can execute this");
  });

  it("Should allow the admin to decrypt data", async function () {
    const encryptedData = ethers.hexlify(ethers.toUtf8Bytes("Encrypted Data"));
    const publicKey = ethers.hexlify(ethers.toUtf8Bytes("Public Key"));

    await encryptionContract.storeEncryptedData(user.address, encryptedData, publicKey);

    const decryptedData = await encryptionContract.decryptData(user.address);
    expect(decryptedData).to.equal(encryptedData);
  });
});
