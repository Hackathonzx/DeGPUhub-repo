# GuardLink: 

GuardLink is a decentralized social recovery and backup delegation service designed to help users secure their assets and identity in Web3. This project leverages MetaMask’s Delegation Toolkit to set up a delegate system where trusted individuals or entities can help recover access in the event of loss or compromise. The project includes gamified features like reputation scores and rewards for delegates to promote active participation and accountability.


# Project Overview
GuardLink is a smart contract-based application that utilizes the MetaMask Delegation Toolkit to facilitate secure backup delegation and social recovery services. With this system, users can set trusted individuals as delegates who can help recover access to their account in case of a loss. The project emphasizes security, usability, and community engagement through reward systems, gamification, and MetaMask integration.

# Key Features
1. Delegate Setup: Users can set trusted delegates who are authorized to help in account recovery processes.
2. Social Recovery Process: Trusted delegates can initiate and authorize the recovery process if the primary account is lost or compromised.
3. Security Layer: Includes configurable security measures like multi-signature authorizations for extra security.
4. Gamification and Incentives: Reputation scores and rewards for active delegates to encourage participation and accountability.
5. Real-Time MetaMask Integration: Integrates with MetaMask to provide seamless user interactions for delegate setup, backup, and recovery actions.

# Project Architecture

The project consists of three primary smart contracts:

1. DelegateSetup.sol: Manages the configuration of delegate roles and initiates the delegate setup.
2. RecoveryProcess.sol: Handles the recovery process and ensures security protocols are followed for account recovery.
3. SecurityLayer.sol: Implements additional security features like multi-signature authorizations for enhanced protection.

Each contract serves a specific role, ensuring the project is modular, secure, and easy to expand.

# MetaMask Delegation Toolkit Integration
DelegateGuard uses the MetaMask Delegation Toolkit to enable secure and seamless interactions for users. By integrating with MetaMask, the project leverages its Delegation Toolkit for the following functionalities:

1. Delegate Role Setup: Allows users to assign delegates and configure permissions directly through MetaMask.
2. Recovery Process: Delegates, once configured, can help users recover their assets in case of account compromise.
3. Enhanced Community Engagement: Uses MetaMask Delegation Toolkit for real-time notifications, smooth user experience, and integration with MetaMask’s wallet interface.
4. The Delegation Toolkit provides robust tools to handle delegate management and account recovery, meeting the hackathon's requirements of enhancing social interaction and community engagement.

# Requirements
1. MetaMask Wallet: Users must have the MetaMask wallet installed to interact with the application.
2. Node.js & NPM: Required for setting up the project’s frontend and backend environments.
3. Ethers.js / Web3.js: Libraries for interacting with Ethereum and MetaMask.
4. Network: Supports any EVM-compatible blockchain network (Ethereum Mainnet, Arbitrum, Rinkeby, Goerli, etc.).
Note: This project must be deployed on an EVM-compatible network supported by MetaMask to utilize the Delegation Toolkit.

# Setup Instructions
- Clone the Repository

git clone https://github.com/Hackathonzx/guardlink.git

cd guardlink

**Install Dependencies**

- npm install

**Compile the Contracts**

npx hardhat compile

# Set Up Environment Variables

Create a .env file in the project’s root directory and add your credentials:

PRIVATE_KEY=your_private_key

ARBITRUM_URL=your_arbitrum_key

ARBITRUM_CHAIN_ID=chain_id

# Deployment

npx hardhat run ignition/modules/deploy.js --network arbitrumSepolia

Run the Application

DelegateSetup contract deployed to: 0x2479eb1a719799D2956bB80551d9FA1aF46b0560

RecoveryProcess contract deployed to: 0x7EED6B6954bC123BE335b3b2539bCD81E044D526

SecurityLayer contract deployed to: 0xe9dE092AAfEEF452EA20f84816D96598cD5023c2

# Usage Guide
1. Connecting to MetaMask: Users connect their MetaMask wallet to the application and select delegates.
2. Setting Up Delegates: Users add trusted addresses as delegates via DelegateSetup.sol.
3. Recovery Process: In case of account compromise, delegates initiate a recovery process using RecoveryProcess.sol.
4. Security Checks: The SecurityLayer.sol enforces additional security protocols during the recovery process.

Note: Ensure MetaMask is connected to the same network as the deployed contracts.

# Future Improvements
1. Multi-Chain Compatibility: Expanding support for multiple EVM-compatible networks.
2. Enhanced Security Protocols: Adding zero-knowledge proof-based verification for additional security.
3. Advanced Delegate Analytics: Track and display delegate performance metrics to encourage active participation.
4. Real-Time Notifications: Integrate with MetaMask notifications for real-time updates on delegate actions.

# Contributing

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature-name
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature-name
5. Submit a pull request.

# License
This project is licensed under the MIT License.