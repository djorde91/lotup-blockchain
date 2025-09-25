// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title HelloWorld
 * @dev A simple smart contract that stores and retrieves a greeting message
 * @author Your Name
 */
contract HelloWorld {
    string private greeting;
    address public owner;
    
    event GreetingUpdated(string newGreeting, address updatedBy);
    
    /**
     * @dev Constructor sets the initial greeting and owner
     * @param _initialGreeting The initial greeting message
     */
    constructor(string memory _initialGreeting) {
        greeting = _initialGreeting;
        owner = msg.sender;
    }
    
    /**
     * @dev Returns the current greeting message
     * @return The current greeting string
     */
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
    
    /**
     * @dev Updates the greeting message
     * @param _newGreeting The new greeting message
     */
    function setGreeting(string memory _newGreeting) public {
        require(bytes(_newGreeting).length > 0, "Greeting cannot be empty");
        greeting = _newGreeting;
        emit GreetingUpdated(_newGreeting, msg.sender);
    }
    
    /**
     * @dev Returns the owner of the contract
     * @return The owner address
     */
    function getOwner() public view returns (address) {
        return owner;
    }
}
