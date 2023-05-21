// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract ResponseContract {
    event ResponseRequested(string input);
    
    string public response;
    
    address public owner;
    uint256 public cost;

    constructor(uint256 _initialCost) {
        owner = msg.sender;
        cost = _initialCost;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function inputString(string memory _input) public payable {
        require(msg.value == cost, "Please provide the exact amount of Ether.");

        emit ResponseRequested(_input);
    }

    function registerResponse(string memory _response) public onlyOwner {
        response = _response;
    }
    
    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }
}
