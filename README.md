# Impulse Coin

Impulse Coin is a decentralized web application built on the Ethereum Network, designed to facilitate secure crowdfunding for R&D projects and startups. This platform aims to revolutionize the conventional crowdfunding landscape by leveraging the power of blockchain technology to ensure transparency, security, and efficiency.

## Table of Contents

1. [Abstract](#abstract)
2. [Project Description](#project-description)
   - [Proposed Work](#proposed-work)
     - [Creating a Project](#creating-a-project)
     - [Spending Request](#spending-request)
     - [Voting Mechanism](#voting-mechanism)
   - [Implementation](#implementation)
     - [Smart Contract Compilation for Generating Bytecode and ABI](#smart-contract-compilation-for-generating-bytecode-and-abi)
     - [Backend Development and Ethereum Integration](#backend-development-and-ethereum-integration)
     - [Bytecode Deployment Over Local Network and Testing](#bytecode-deployment-over-local-network-and-testing)
     - [Frontend Development and Contract Deployment Over Real Network](#frontend-development-and-contract-deployment-over-real-network)
     - [Finalizing Decentralized Application Over Sepolia ETH Network](#finalizing-decentralized-application-over-sepolia-eth-network)
     - [Community Engagement and Adaptation](#community-engagement-and-adaptation)
3. [Summary and Conclusion](#summary-and-conclusion)

## Abstract

Impulse Coin explores the utilization of blockchain technology to construct a crowdfunding platform that ensures safe and transparent fundraising, money tracking, and incentive delivery. The platform aims to enhance global participation in fundraising campaigns by empowering contributors and campaign designers with greater control over project funding.

## Project Description

### Proposed Work

Impulse Coin's crowdfunding platform involves two contracts: one for storing all projects and another for managing payments. Key components include program managers, sponsors, suppliers, smart contracts, expenditure orders, and voting mechanisms.

#### Creating a Project

Project managers initiate new projects by defining their details, and supporters can choose to contribute to these projects.

#### Spending Request

Project managers initiate spending requests to utilize the funds, detailing the intended expenditure and supplier information. The system ensures modifications require consensus from over half of the network's nodes.

#### Voting Mechanism

Only donors who contributed to a project can approve or reject expenditure requests. If the majority approves, funds are transferred to the vendor.

### Implementation

#### Smart Contract Compilation for Generating Bytecode and ABI

Smart contracts are developed using the Solidity compiler, producing bytecode and an ABI for deployment on the Ethereum Blockchain.

#### Backend Development and Ethereum Integration

Node.js is used for backend development, integrating Ethereum to create a decentralized platform.

#### Bytecode Deployment Over Local Network and Testing

Ganache is used to deploy bytecode on a local test network, providing a secure environment for testing.

#### Frontend Development and Contract Deployment Over Real Network

The frontend is developed using React.js, Web3.js, Next.js, and other tools to create a dynamic and interactive user interface.

#### Finalizing Decentralized Application Over Sepolia ETH Network

Projects can be launched by providing the minimum required contribution, and transactions are managed securely.

#### Community Engagement and Adaptation

Engaging with the community and adapting the platform based on feedback ensures its continuous improvement.

## Summary and Conclusion

Impulse Coin has the potential to revolutionize crowdfunding by providing a safer and more transparent method for fundraising. The platform's decentralized approach ensures greater trust and security for all participants.

