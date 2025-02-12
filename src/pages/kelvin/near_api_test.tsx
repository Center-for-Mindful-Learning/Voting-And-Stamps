var Contract = require('web3-eth-contract');

import { useEffect } from "react";

const NearTest = (props) => {



    useEffect( () => {
        Contract.setProvider('wss://testnet.aurora.dev');
        const jsonInterface = [
         {
             "inputs": [],
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "owner",
                     "type": "address"
                 },
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "spender",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "value",
                     "type": "uint256"
                 }
             ],
             "name": "Approval",
             "type": "event"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": false,
                     "internalType": "string",
                     "name": "logString",
                     "type": "string"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "value",
                     "type": "uint256"
                 }
             ],
             "name": "LogBondingCurve",
             "type": "event"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "amountMinted",
                     "type": "uint256"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "totalCost",
                     "type": "uint256"
                 }
             ],
             "name": "LogMint",
             "type": "event"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "amountWithdrawn",
                     "type": "uint256"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "reward",
                     "type": "uint256"
                 }
             ],
             "name": "LogWithdraw",
             "type": "event"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "from",
                     "type": "address"
                 },
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "to",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "value",
                     "type": "uint256"
                 }
             ],
             "name": "Transfer",
             "type": "event"
         },
         {
             "stateMutability": "payable",
             "type": "fallback"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "_owner",
                     "type": "address"
                 },
                 {
                     "internalType": "address",
                     "name": "_spender",
                     "type": "address"
                 }
             ],
             "name": "allowance",
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
                     "internalType": "address",
                     "name": "_spender",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_value",
                     "type": "uint256"
                 }
             ],
             "name": "approve",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "_owner",
                     "type": "address"
                 }
             ],
             "name": "balanceOf",
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
             "inputs": [],
             "name": "bondingCurveDecimals",
             "outputs": [
                 {
                     "internalType": "uint8",
                     "name": "",
                     "type": "uint8"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "tokensToMint",
                     "type": "uint256"
                 }
             ],
             "name": "buyTokens",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "payable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "decimals",
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
                     "internalType": "address",
                     "name": "_spender",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_subtractedValue",
                     "type": "uint256"
                 }
             ],
             "name": "decreaseApproval",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "price",
                     "type": "uint256"
                 }
             ],
             "name": "estimateTokenAmountForPrice",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "tokenAmount",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address[]",
                     "name": "users",
                     "type": "address[]"
                 },
                 {
                     "internalType": "uint256[]",
                     "name": "stampCounts",
                     "type": "uint256[]"
                 }
             ],
             "name": "fullOverride",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "tokenAmount",
                     "type": "uint256"
                 }
             ],
             "name": "getBuyPrice",
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
                     "internalType": "uint256",
                     "name": "tokenAmount",
                     "type": "uint256"
                 }
             ],
             "name": "getSellReward",
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
                     "internalType": "address",
                     "name": "_spender",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_addedValue",
                     "type": "uint256"
                 }
             ],
             "name": "increaseApproval",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "multiple",
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
             "inputs": [],
             "name": "poolBalance",
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
                     "internalType": "uint256",
                     "name": "_amountToWithdraw",
                     "type": "uint256"
                 }
             ],
             "name": "sellTokens",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "totalSupply",
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
                     "internalType": "address",
                     "name": "_to",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_value",
                     "type": "uint256"
                 }
             ],
             "name": "transfer",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "_from",
                     "type": "address"
                 },
                 {
                     "internalType": "address",
                     "name": "_to",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_value",
                     "type": "uint256"
                 }
             ],
             "name": "transferFrom",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "_from",
                     "type": "address"
                 },
                 {
                     "internalType": "address",
                     "name": "_to",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_value",
                     "type": "uint256"
                 }
             ],
             "name": "transferFromWithFee",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         }
     ]; 

     let address = "0x32eD5c890e0Cb37694fA9f06784b6371D7B8314d";
     let contract = new Contract(jsonInterface, address);
     console.log("E!");
    });
    
    return <div>Test</div>;
}

export default NearTest;