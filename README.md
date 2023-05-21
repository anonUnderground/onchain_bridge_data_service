# onchain_bridge_data_service

A framework to deploy smart contracts and subscribe to events for automated response from 3rd party systems.

## Step-By-Step guide to deploy smart contract on EVM blockchain and configure automation node

### 1. Create wallet (this tutorial uses [Metamask](https://www.youtube.com/watch?v=Af_lQ1zUnoM&ab_channel=MoneyZG)):
- Be sure to note your wallet Address (it is needed for this tutorial) and keep your private keys safe.
- This tutorial uses the [Metamask Chrome Extension](https://metamask.io/download/) for simplicity.

### 2. Create an [Alchemy](https://www.alchemy.com/) account and create an app:
![1- Setting Up Alchemy App](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/cdd0e813-085a-4646-bf10-69c33ef481e9)

### 3. Connect your metamask wallet to the Sepolia ETH testnet by clicking "Add To Wallet":
![2- Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/66499a65-2891-4310-81a7-e374cc76f28e)
![8 - Add Testnet to wallet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/c2ae97c8-a019-4ba5-a150-87c49ad409f3)

### 4. Dashboards help monitor RPC activity and perofmance of your decentralized applications:
![3 - Alchemy RPC Provider Dashboard](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/eabb7de8-73cf-4f4b-9063-c560e08e2aec)

### 5. Load some testnet etherum to your wallet using a [faucet](https://sepoliafaucet.com/) (this tutorial uses the Sepolia ETH Testnet):
- Other testnets have their own faucets
![10 - Testnet faucet](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/629230ed-7eef-4b4e-8282-2e75100bc81a)

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

   1) Set-ExecutionPolicy -Scope CurrentUser
   2) ExecutionPolicy: RemoteSigned

   - Run the following in the terminal: truffle init
   - This will create truffle-config.js and contracts, migrations, and test folders
   - If you wish to work with this repository there is no need to overwrite the files
   - Install dotenv by running "npm install dotenv" in the terminal

## 8. Compile Smart Contracts

   - Put your smart contract into the smart contracts folder with proper naming convention
   - Run "truffle compile" in the terminal
   - This will create the "build" folder with the contract JSON after compilation
   - Ensure namimg convetnion in 2_deploy_contracts.js file matches the solidity smart contract you are deploying
 



## 9. Deploy Smart Contract to blockchain

   - Run "truffle migrate --network sepolia" in the terminal

The logs of a succesful deploymnet look like this:

////////////////////////////////////////////////////////////////

> Compiled successfully using:
   - solc: 0.8.20+commit.a1b79de6.Emscripten.clang
⠏ Fetching solc version list from solc-bin. Attempt #1
⠹ Fetching solc version list from solc-bin. Attempt #1
Migrations dry-run (simulation)
===============================
> Network name:    'sepolia-fork'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


2_deploy_contracts.js
=====================
⠧ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'ResponseContract'
   ----------------------------
   > block number:        3531627 solc-bin. Attempt #1                                                                                                              
   > block timestamp:     1684690314
   > account:             0x9acded31Eb1A4E4CB2cF53403dcaFf3ABE6eB897
   > balance:             0.498302512495247035
   > gas used:            678995 (0xa5c53)
   > gas price:           2.500000007 gwei
   > value sent:          0 ETH
   > total cost:          0.001697487504752965 ETH

   -------------------------------------
   > Total cost:     0.001697487504752965 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.001697487504752965 ETH


⠴ Fetching solc version list from solc-bin. Attempt #1
⠹ Fetching solc version list from solc-bin. Attempt #1
Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


2_deploy_contracts.js
=====================
⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'ResponseContract'
   ----------------------------
   > transaction hash:    0x77ba12c188c13987df67d37878bf341b9985a39495e5aa7877c63088b2e92760
   > Blocks: 0            Seconds: 4lc-bin. Attempt #1
   > contract address:    0xC72968e4E4BE0F1175a645f63B57a7700e21D77f
   > block number:        3531631
   > block timestamp:     1684690320
   > account:             0x9acded31Eb1A4E4CB2cF53403dcaFf3ABE6eB897
   > balance:             0.49830251249456804
   > gas used:            678995 (0xa5c53)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.00169748750543196 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 3531632)Attempt #1
   > confirmation number: 2 (block: 3531633)Attempt #1
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00169748750543196 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00169748750543196 ETH

///////////////////////////////////////////////////////////////////////////////

   - Note the contract address as this is the Hash ID of the deployed contract
   - Logs are useful for gas optimization


## 10. Validate smart contract

   - Deployed contract address:0xC72968e4E4BE0F1175a645f63B57a7700e21D77f
   - Here the public link the deployment: https://sepolia.etherscan.io/address/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f#code
   - To make your deployed contract easier to use, please [verify the source code](https://www.youtube.com/watch?v=dvvaBq6d_dE&ab_channel=MoralisWeb3).
   - [Truffle can also be used to verify a smart contract](https://medium.com/quick-programming/verify-a-smart-contract-on-etherscan-using-truffle-cb2656fd9c41).

   - Using the Truffle validation plugin, run "truffle run verify ResponseContract --network sepolia" to validate our deployed smart contract

   - Succesful validation will return a log similar to this:

Verifying contracts on etherscan
   Verifying ResponseContract
   Pass - Verified: https://sepolia.etherscan.io/address/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f#code
   Successfully verified 1 contract(s).
Verifying contracts on sourcify
   Verifying ResponseContract
   Pass - Verified: https://sourcify.dev/#/lookup/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f
   Successfully verified 1 contract(s).
   
## 11. Configure Automation Node
   
   - Grab contract address and ABI from "contract" tab (https://sepolia.etherscan.io/address/0xC72968e4E4BE0F1175a645f63B57a7700e21D77f#code)
      
![11 - Source Code](https://github.com/anonUnderground/onchain_bridge_data_service/assets/134157241/11876898-e91b-4295-b677-bd3bf4c4896a)

   - Add configuration information to 'config.js' file (ABI and contract address)
