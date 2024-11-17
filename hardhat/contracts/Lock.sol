// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Lock {
    uint public unlockTime;
    address public owner;

    constructor(uint _unlockTime) {
        unlockTime = _unlockTime;
        owner = msg.sender;
    }

    function setUnlockTime(uint _unlockTime) public {
        require(msg.sender == owner, "Only the owner can set unlock time");
        unlockTime = _unlockTime;
    }
}
