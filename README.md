# Impulse Coin

Impulse Coin is a decentralized web application built on the Ethereum Network, designed to facilitate secure crowdfunding campaigns for R&D projects and startups. This platform aims to revolutionize the conventional crowdfunding landscape by leveraging the power of blockchain technology to ensure transparency, security, and efficiency.

## Table of Contents

1. [Abstract](#abstract)
2. [Project Description](#project-description)
   - [2.1 Proposed Work](#proposed-work)
     - [2.2 Creating a Project](#creating-a-project)
     - [2.3 Spending Request](#spending-request)
     - [2.4 Voting Mechanism](#voting-mechanism)
3. [Architectture](#architecture)
4. [Implementation](#implementation)
     - [4.1 Smart Contract Compilation for Generating Bytecode and ABI](#smart-contract-compilation-for-generating-bytecode-and-abi)
     - [4.2 Backend Development and Ethereum Integration](#backend-development-and-ethereum-integration)
     - [4.3 Bytecode Deployment Over Local Network and Testing](#bytecode-deployment-over-local-network-and-testing)
     - [4.4 Frontend Development and Contract Deployment Over Real Network](#frontend-development-and-contract-deployment-over-real-network)
     - [4.5 Finalizing Decentralized Application Over Sepolia ETH Network](#finalizing-decentralized-application-over-sepolia-eth-network)
     - [4.6 Community Engagement and Adaptation](#community-engagement-and-adaptation)
5. [Summary and Conclusion](#summary-and-conclusion)

## 1. Abstract

Impulse Coin explores the utilization of blockchain technology to construct a crowdfunding platform that ensures safe and transparent fundraising, money tracking, and incentive delivery. The platform aims to enhance global participation in fundraising campaigns by empowering contributors and campaign designers with greater control over project funding.

## 2. Project Description

### 2.1 Proposed Work

Impulse Coin's crowdfunding platform involves two contracts: one for storing all projects and another for managing payments. Key components include program managers, sponsors, suppliers, smart contracts, expenditure orders, and voting mechanisms.

#### 2.2 Creating a Project

Project managers initiate new projects by defining their details, and supporters can choose to contribute to these projects.

#### 2.3 Spending Request

Project managers initiate spending requests to utilize the funds, detailing the intended expenditure and supplier information. The system ensures modifications require consensus from over half of the network's nodes.

#### 2.4 Voting Mechanism

Only donors who contributed to a project can approve or reject expenditure requests. If the majority approves, funds are transferred to the vendor.

## 3. Architecture : 

![image](https://github.com/user-attachments/assets/5c132509-7da0-464c-b776-b5c18e1400ef)


## 4. Implementation

#### 4.1 Smart Contract Compilation for Generating Bytecode and ABI

Smart contracts are developed using the Solidity compiler, producing bytecode and an ABI for deployment on the Ethereum Blockchain.

#### 4.2 Backend Development and Ethereum Integration

Node.js is used for backend development, integrating Ethereum to create a decentralized platform.

#### 4.3 Bytecode Deployment Over Local Network and Testing

Ganache is used to deploy bytecode on a local test network, providing a secure environment for testing.

#### 4.4 Frontend Development and Contract Deployment Over Real Network

The frontend is developed using React.js, Web3.js, Next.js, and other tools to create a dynamic and interactive user interface.

#### 4.5 Finalizing Decentralized Application Over Sepolia ETH Network

Projects can be launched by providing the minimum required contribution, and transactions are managed securely.

#### 4.6 Community Engagement and Adaptation

Engaging with the community and adapting the platform based on feedback ensures its continuous improvement.

## 5. Summary and Conclusion

Impulse Coin has the potential to revolutionize crowdfunding by providing a safer and more transparent method for fundraising. The platform's decentralized approach ensures greater trust and security for all participants.

