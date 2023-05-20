# onchain_bridge_data_service
A framework to deploy smart contracts and subscribe to events for automated response from 3rd party systems.

**Directory Guide:**

onchain_bridge_data_service/

├── .gitignore # Git ignore file

├── package.json # Node.js manifest file

├── package-lock.json # Describes exact dependency tree generated in node_modules

├── truffle-config.js # Truffle configuration file

├── config.js # index.js configuration file

├── .env # File to keep secrets

├── index.js # JavaScript file to interact with the smart contract and listen to events

├── contracts/ # Directory for contract

│ ├── ResponseContract.sol # Your smart contract

├── migrations/ # Directory for migration scripts

│ ├── 1_initial_migration.js

│ ├── 2_deploy_contracts.js # Script to deploy your smart contract

├── node_modules/ # Directory for installed Node.js packages (created when you run npm install)

├── test/ # Directory for test scripts (empty for now)
