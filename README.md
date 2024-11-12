# DeGPUhub - Hybrid Encryption Contract

# Overview

This repository contains the HybridEncryption smart contract, designed to demonstrate the use of hybrid encryption methods (RSA & AES) for securing sensitive data in a decentralized GPU rental platform, DeGPUhub. The contract is part of a project designed for the Mind Network Ideathon, where we explore privacy-preserving methods with decentralized AI and infrastructure.

The HybridEncryption contract uses elliptic curve digital signature algorithms (ECDSA) for simple verification and hybrid encryption techniques, combining public-key encryption (RSA) for data confidentiality and symmetric-key encryption (AES) for data privacy. The contract is deployed on the Ethereum-compatible chain, Arbitrum, but can be adapted to other blockchains.

# Project Addressed:
1. Privacy & Security: Implementing hybrid encryption for sensitive user data, including reputation scores and rental contracts.
2. Real-world Applications: Hybrid encryption enhances security in decentralized computing and AI, solving privacy concerns in decentralized infrastructures.
3. Mind Network Features: Utilizing blockchain to store encrypted data and ensuring interoperability with Mind Network’s decentralized AI solutions.

# Table of Contents
1. Introduction
2. Project Addressed
3. Smart Contract Structure
4. Installation & Setup
5. Deployment
6. Test the Contract
7. How to Participate
8. Future Enhancements
9. Conclusion
10. Licence

# 1. Introduction
DeGPUhub aims to provide decentralized GPU rentals for high-performance computing tasks. It combines Hybrid Encryption for secure data storage with a Reputation System for users and Governance features for decentralized decision-making. The contract showcases how blockchain can provide trustless encryption and ensure privacy in sensitive data exchanges, especially for AI model training, scientific computation, and decentralized applications.

# 2. Project Addressed

**Problem:**
- Data Privacy & Security: Many decentralized networks lack privacy and security features that prevent sensitive user data from being exposed.
- Scalable Decentralized Infrastructure: Efficient, low-cost GPU rental markets require secure data transactions and real-time computations without compromising privacy.

**Solution:**
- Hybrid Encryption for Secure Data: Using RSA for public key encryption and AES for symmetric encryption to ensure that user data, including reputation and rental agreements, remain secure.
- Decentralized Governance: Token-based voting for platform upgrades ensures community-driven decisions, governed by Compute Tokens.
- Integration with Mind Network: This project aims to leverage the Mind Network infrastructure for decentralized AI computing while ensuring data privacy through encryption.

**Features:**
- Hybrid Encryption: Protects sensitive data with RSA (public key) for encryption and AES (symmetric key) for data privacy.
- Governance & Tokenization: Platform governance via the Compute Token, allowing users to propose and vote on platform improvements.
- Reputation System: Tracks user trustworthiness based on their behavior in the rental system.
- Secure Rental Transactions: Transparent and secure payments handled by Compute Tokens.

# 3. Smart Contract Structure
This project involves five primary smart contracts:

- HybridEncryption.sol: Manages the encryption and storage of sensitive data.
- ComputeToken.sol: ERC20 token used for governance and payments on the platform.
- GPUMarketplace.sol: Handles the GPU rental market, including listing and renting GPUs.
- Reputation.sol: Manages user reputation based on platform behavior.

# 4. Installation & Setup
- Prerequisites:
Node.js (>=14.x) - For managing dependencies.
Hardhat - Ethereum development environment.
Metamask - Wallet to interact with the blockchain.
Alchemy - For connecting to the Ethereum network.

- Steps:
Clone the Repository:

git clone https://github.com/Hackathonzx/DeGPUhub-repo.git
cd DeGPUhub-repo.git

- Install Dependencies:

npm install
Configure Hardhat Network: Modify hardhat.config.js to include your Alchemy endpoint and private key for deployment.

# 5. Deployment

npx hardhat run ignition/modules/deploy.js --network arbitrumSepolia

ComputeToken deployed to: 0xd52D2CA7975Cfbc3342863A1B76d21104a5C8266

Reputation deployed to: 0x41b5Cc57269f5E2AC278B860373a812f527daE7a

HybridEncryption deployed to: 0x4B916e434E358060eb75ee0Add19Da15E93748f4

GPUMarketplace deployed to: 0xaC41d927189A00f92133EF6c56f447058FD4ed58

# 6. Test the Contract

Run the Tests:

- npx hardhat test


# 7. Future Enhancements
- FHE Integration: For future scalability, explore the integration of Fully Homomorphic Encryption (FHE) to enable computations on encrypted data, ensuring that even sensitive computations (e.g., AI model training) can be processed securely.
2. Cross-chain Deployments: Expand the platform’s reach by deploying the contract on multiple blockchains, ensuring greater user accessibility and lowering gas fees.
3. Governance Upgrades: Add more governance features for voting on platform features and rental policies.

# 8. Conclusion
The DeGPUhub Hybrid Encryption project leverages hybrid encryption methods to ensure that data on the platform remains private and secure. By integrating this with a reputation system and decentralized governance, this contract addresses security and privacy challenges in decentralized GPU rental markets. It serves as a foundation for future innovations using privacy-preserving technologies, including Fully Homomorphic Encryption (FHE), in a Mind Network environment.

# 9. Licence
This project is licensed under the MIT License. 