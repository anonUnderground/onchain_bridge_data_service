const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_initialCost",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "input",
          "type": "string"
        }
      ],
      "name": "ResponseRequested",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "cost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_input",
          "type": "string"
        }
      ],
      "name": "inputString",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_response",
          "type": "string"
        }
      ],
      "name": "registerResponse",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "response",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newCost",
          "type": "uint256"
        }
      ],
      "name": "setCost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
                        
                        
const contractAddress = "0xC72968e4E4BE0F1175a645f63B57a7700e21D77f"; // your actual contract address

module.exports = {
    contractABI,
    contractAddress
}