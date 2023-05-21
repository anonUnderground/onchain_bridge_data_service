require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const { contractABI, contractAddress } = require("./config.js");

const provider = new HDWalletProvider(process.env.MNEMONIC, `https://eth-sepolia.g.alchemy.com/v2/${process.env.PROJECT_ID}`);
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(contractABI, contractAddress);

let lastProcessedBlock = 0; // To keep track of the last processed block

// Set an interval to poll for new events every 10 seconds (change as needed)
setInterval(async () => {
  try {
    const currentBlock = await web3.eth.getBlockNumber();
  
    // Only get events since the last block we processed
    contract.getPastEvents('ResponseRequested', {
      fromBlock: lastProcessedBlock,
      toBlock: currentBlock
    }, (error, events) => {
      if (error) {
        console.error("Error getting past events", error);
      } else {
        for (let event of events) {
          console.log(event);
          respondToEvent(event.returnValues.input);
        }
        // Update our last processed block if it's not the current block (i.e., we're not waiting for the next block to be mined)
        if (lastProcessedBlock !== currentBlock) {
          lastProcessedBlock = currentBlock + 1;
        }
      }
    });
  } catch(err) {
    console.error(err);
  }
}, 10000);

function respondToEvent(input) {
  const response = "Automated response to: " + input;

  web3.eth.accounts.signTransaction({
    to: contractAddress,
    data: contract.methods.registerResponse(response).encodeABI(),
    gas: 1000000
  }, process.env.PRIVATE_KEY)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
  .then(receipt => console.log("Transaction receipt: ", receipt))
  .catch(err => console.error(err));
}
