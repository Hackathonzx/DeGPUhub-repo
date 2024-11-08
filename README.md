# DeGPUhub - Hybrid Encryption Contract

# Overview

This repository contains the HybridEncryption smart contract, designed to demonstrate the use of hybrid encryption methods (RSA & AES) for securing sensitive data in a decentralized GPU rental platform, DeGPUhub. The contract is part of a project designed for the Mind Network Ideathon, where we explore privacy-preserving methods with decentralized AI and infrastructure.

The HybridEncryption contract uses elliptic curve digital signature algorithms (ECDSA) for simple verification and hybrid encryption techniques, combining public-key encryption (RSA) for data confidentiality and symmetric-key encryption (AES) for data privacy. The contract is deployed on the Ethereum-compatible chain, Arbitrum, but can be adapted to other blockchains.

# Hackathon Requirements Addressed:
1. Privacy & Security: Implementing hybrid encryption for sensitive user data, including reputation scores and rental contracts.
2. Real-world Applications: Hybrid encryption enhances security in decentralized computing and AI, solving privacy concerns in decentralized infrastructures.
3. Mind Network Features: Utilizing blockchain to store encrypted data and ensuring interoperability with Mind Network’s decentralized AI solutions.

# Table of Contents
1. Introduction
2. Hackathon Requirements
3. Smart Contract Structure
4. Installation & Setup
5. Deployment
6. Test the Contract
7. How to Participate
8. Future Enhancements

# 1. Introduction
DeGPUhub aims to provide decentralized GPU rentals for high-performance computing tasks. It combines Hybrid Encryption for secure data storage with a Reputation System for users and Governance features for decentralized decision-making. The contract showcases how blockchain can provide trustless encryption and ensure privacy in sensitive data exchanges, especially for AI model training, scientific computation, and decentralized applications.

Hackathon Requirements
Problem:
Data Privacy & Security: Many decentralized networks lack privacy and security features that prevent sensitive user data from being exposed.
Scalable Decentralized Infrastructure: Efficient, low-cost GPU rental markets require secure data transactions and real-time computations without compromising privacy.
Solution:
Hybrid Encryption for Secure Data: Using RSA for public key encryption and AES for symmetric encryption to ensure that user data, including reputation and rental agreements, remain secure.
Decentralized Governance: Token-based voting for platform upgrades ensures community-driven decisions, governed by Compute Tokens.
Integration with Mind Network: This project aims to leverage the Mind Network infrastructure for decentralized AI computing while ensuring data privacy through encryption.
Features:
Hybrid Encryption: Protects sensitive data with RSA (public key) for encryption and AES (symmetric key) for data privacy.
Governance & Tokenization: Platform governance via the Compute Token, allowing users to propose and vote on platform improvements.
Reputation System: Tracks user trustworthiness based on their behavior in the rental system.
Secure Rental Transactions: Transparent and secure payments handled by Compute Tokens.
Smart Contract Structure
This project involves four primary smart contracts:

HybridEncryption.sol: Manages the encryption and storage of sensitive data.
ComputeToken.sol: ERC20 token used for governance and payments on the platform.
GPUMarketplace.sol: Handles the GPU rental market, including listing and renting GPUs.
Reputation.sol: Manages user reputation based on platform behavior.
Installation & Setup
Prerequisites:
Node.js (>=14.x) - For managing dependencies.
Hardhat - Ethereum development environment.
Metamask - Wallet to interact with the blockchain.
Infura or Alchemy - For connecting to the Ethereum or Polygon network.
Steps:
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/degpuhub-hybrid-encryption.git
cd degpuhub-hybrid-encryption
Install Dependencies:

bash
Copy code
npm install
Configure Hardhat Network: Modify hardhat.config.js to include your Infura or Alchemy endpoint and private key for deployment.

javascript
Copy code
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/YOUR_INFURA_KEY`,
      accounts: [`0x${YOUR_PRIVATE_KEY}`],
    },
  },
};
Deployment
Deploy to a Testnet (Rinkeby):

bash
Copy code
npx hardhat run scripts/deploy.js --network rinkeby
Deploy to Mainnet (Polygon/BSC/Other): Update the hardhat.config.js with the appropriate network details and use:

bash
Copy code
npx hardhat run scripts/deploy.js --network polygon
Test the Contract
1. Write the Test Cases:
Create test scripts inside the /test directory. Example for testing HybridEncryption contract:

javascript
Copy code
const { expect } = require("chai");

describe("HybridEncryption Contract", function () {
  it("Should store encrypted data correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const HybridEncryption = await ethers.getContractFactory("HybridEncryption");
    const hybridEncryption = await HybridEncryption.deploy();

    const encryptedData = "0x1234"; // Simulating encrypted data
    const publicKey = "0x5678"; // Simulating public key

    await hybridEncryption.storeEncryptedData(addr1.address, encryptedData, publicKey);
    const data = await hybridEncryption.getEncryptedData(addr1.address);

    expect(data[0]).to.equal(encryptedData);
    expect(data[1]).to.equal(publicKey);
  });
});
2. Run the Tests:
bash
Copy code
npx hardhat test
How to Participate
Submit Your Project: On the Mind Network platform, submit your project by filling out the project overview and other relevant details.

Overview: A brief description of how hybrid encryption will enhance privacy in DeGPUhub.
GitHub: Provide a link to this repository.
Experience: Mention if you have any prior ideathon experience or awards.
Describe FHE Integration: Although we use hybrid encryption here, you can mention how Fully Homomorphic Encryption (FHE) could be implemented for future scalability in DeGPUhub for tasks like encrypted AI computations on user data.

Real-world Example: Use AI-driven reputation scoring as an example where FHE could enable secure computations of reputation scores without revealing private data.

Future Enhancements
FHE Integration: For future scalability, explore the integration of Fully Homomorphic Encryption (FHE) to enable computations on encrypted data, ensuring that even sensitive computations (e.g., AI model training) can be processed securely.
Cross-chain Deployments: Expand the platform’s reach by deploying the contract on multiple blockchains, ensuring greater user accessibility and lowering gas fees.
Governance Upgrades: Add more governance features for voting on platform features and rental policies.
Conclusion
The DeGPUhub Hybrid Encryption project leverages hybrid encryption methods to ensure that data on the platform remains private and secure. By integrating this with a reputation system and decentralized governance, this contract addresses security and privacy challenges in decentralized GPU rental markets. It serves as a foundation for future innovations using privacy-preserving technologies, including Fully Homomorphic Encryption (FHE), in a Mind Network environment.

