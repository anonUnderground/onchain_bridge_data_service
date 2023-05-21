# onchain_bridge_data_service

A framework to deploy smart contracts and subscribe to events for automated response from 3rd party systems.

## Step-By-Step guide to deploy smart contract on EVM blockchain and configure automation node

### 1. Create wallet (this tutorial uses [Metamask](https://www.youtube.com/watch?v=Af_lQ1zUnoM&ab_channel=MoneyZG)):
- Be sure to note your wallet Address (it is needed for this tutorial) and keep your private keys safe.
- This tutorial uses the [Metamask Chrome Extension](https://metamask.io/download/) for simplicity.

### 2. Create an [Alchemy](https://www.alchemy.com/) account and create an app:
![1- Setting Up Alchemy App](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/843a6001-ce66-4a19-89b7-e1510894fb8e)

### 3. Connect your metamask wallet to the Sepolia ETH testnet by clicking "Add To Wallet":
![2- Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/0407191c-6cdf-4f18-aa5a-c8adeb8d39f4)
![8 - Add Testnet to wallet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/087e2d8c-650e-4cc9-9b17-6eb1346c951a)

### 4. Dashboards help monitor RPC activity and perofmance of your decentralized applications:
![3 - Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/860d0989-4f35-46d7-afb8-c73e1dfbcf7d)

### 5. Load some testnet etherum to your wallet using a [faucet](https://sepoliafaucet.com/) (this tutorial uses the Sepolia ETH Testnet):
- Other testnets have their own faucets
![10 - Testnet faucet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/211b87cb-1701-4fcf-921e-df7e4feadced)

### 6. Install [node.js](https://nodejs.org/en/download/)

### 7. Install Truffle:
- Truffle is a development framework, based in JavaScript, for Ethereum.
- To install, run the following in the terminal:


```bash

npm install -g truffle

```

   - You also need to install HDWallet Provider by running the following in ther teminal:


```bash

npm install @truffle/hdwallet-provider

```
   - You will need to have [Git](https://git-scm.com/downloads) installed on your system.

## 8. Configure Truffle

   - Update the .env file with your secret phrase and RPC endpoint
   - You may need to enable scripts in your directory, you can do this for a local user by running the following in the terminal:

```bash

Set-ExecutionPolicy -Scope CurrentUser

```

```bash

ExecutionPolicy: RemoteSigned

```

   - Run the following in the terminal:

```bash

ExecutionPolicy: truffle init

```
   - This will create truffle-config.js and contracts, migrations, and test folders
   - If you wish to work with this repository there is no need to overwrite the files
   - Install dotenv:

```bash

npm install dotenv

```

## 8. Compile Smart Contracts

   - Put your smart contract into the smart contracts folder with proper naming convention.
   - Compile smart contract by running

```bash

truffle compile

```
   - This will create the "build" folder with the contract JSON after compilation
   - Ensure namimg convetnion in 2_deploy_contracts.js file matches the solidity smart contract you are deploying
 


## 9. Deploy Smart Contract to blockchain

   - Deploy Smart contract to Sepolia ETH Testnet by running:

```bash

truffle migrate --network sepolia

```

   - Note the contract address as this is the Hash ID of the deployed contract


## 10. Validate smart contract

   - Deployed contract address: 0xC72968e4E4BE0F1175a645f63B57a7700e21D77f
   - Here the public link the deployment: https://sepolia.etherscan.io/address/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f#code
   - To make your deployed contract easier to use, please [verify the source code](https://www.youtube.com/watch?v=dvvaBq6d_dE&ab_channel=MoralisWeb3).
   - Be sure to get your EtherScan API Key and update your .env file
   - [Truffle can also be used to verify a smart contract](https://medium.com/quick-programming/verify-a-smart-contract-on-etherscan-using-truffle-cb2656fd9c41).

   - If using the Truffle plugin from above, run the following in your terminal to validate the smart contact:

```bash

truffle run verify ResponseContract --network sepolia

```

   
## 11. Configure Automation Node
   
   - Grab contract address and ABI from "contract" tab (https://sepolia.etherscan.io/address/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f#code)


![11 - Source Code](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/5db99550-9efc-42e8-9ba9-fdca25d64c00)

   - Add configuration information to 'config.js' file (ABI and contract address)

   - Run the following code to listen for events

```bash

node index.js

```

Code currently returns events via a block polling method. Code is unstable and breaks due to missing error handling. Write-back automation also not implemented.

index.js is currently broken and will be resolved in the next fix
