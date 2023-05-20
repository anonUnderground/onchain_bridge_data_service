# onchain_bridge_data_service

A framework to deploy smart contracts and subscribe to events for automated response from 3rd party systems.

## Step-By-Step guide to deploy smart contract on EVM blockchain and configure automation node

## 1. Create wallet (this tutorial uses [Metamask](https://www.youtube.com/watch?v=Af_lQ1zUnoM&ab_channel=MoneyZG)):

   - Be sure to note your wallet Address (it is needed for this tutorial) and keep your private keys safe.
   - This tutorial uses the [Metamask Chrome Extension](https://metamask.io/download/) for simplicity.


## 2. Create an [Alchemy](https://www.alchemy.com/) account and create an app:



![1- Setting Up Alchemy App](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/cdd0e813-085a-4646-bf10-69c33ef481e9)
 
## 3. Connect your metamask wallet to the Sepolia ETH testnet by clicking "Add To Wallet":



![2- Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/66499a65-2891-4310-81a7-e374cc76f28e)

![8 - Add Testnet to wallet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/c2ae97c8-a019-4ba5-a150-87c49ad409f3)


## 4. Dashboards help monitor RPC activity and perofmance of your decentralized applications:



![3 - Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/eabb7de8-73cf-4f4b-9063-c560e08e2aec)

## 5 . Load some testnet etherum to your wallet using a [faucet]((https://sepoliafaucet.com/)) (this tutorial uses the Sepolia) ETH Testnet):

   - Other testnets have their own faucets


![10 - Testnet faucet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/629230ed-7eef-4b4e-8282-2e75100bc81a)

## 6. Install [node.js](https://nodejs.org/en/download/)

## 7. Install Truffle: 

   - Truffle is a development framework, based in JavaScript, for Ethereum.
   - To install, run the following in the terminal:

npm install -g truffle

   - You also need to install HDWallet Provider by running the following in ther teminal:
   - You will need ti have [Git](Visit the official Git website: https://git-scm.com/downloads) installed on your system.

npm install @truffle/hdwallet-provider

## 8. Configure Truffle

   - Update the .env file with your secret phrase and RPC endpoint
   - You may need to enable scripts in your directory, you can do this for a local user by running the following in the terminal:

   1) Set-ExecutionPolicy -Scope CurrentUser
   2) ExecutionPolicy: RemoteSigned

   - Run the following in the terminal: truffle init
   - This will create truffle-config.js and contracts, migrations, and test folders
   - If you wish to work with this repository there is no need to overwrite the files



