"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Detailed = {
    "contractName": "ERC20Detailed",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "who",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "name": "decimals",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"symbol\",\"type\":\"string\"},{\"name\":\"decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"The decimals are only for visualization purposes. All the operations are done using the smallest and indivisible token unit, just as on Ethereum all the operations are done in wei.\",\"methods\":{\"decimals()\":{\"return\":\"the number of decimals of the token.\"},\"name()\":{\"return\":\"the name of the token.\"},\"symbol()\":{\"return\":\"the symbol of the token.\"}},\"title\":\"ERC20Detailed token\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":\"ERC20Detailed\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":{\"keccak256\":\"0xa60f7f7ce98ca2d75c8e02da982d3fe91176269fdab2589bbbb7cc65f2d7c9d3\",\"urls\":[\"bzzr://5edd2c9be304a1e8ed055e243daba5345f242008164f9a0565c33197b860323b\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x59e7df16169a498cb8837963b2f5461d88e63bd1eb6c7d58b814d76b84ccbe61\",\"urls\":[\"bzzr://e572c9c4e02e37349702451bf3b5dcbbc86a19da5a51695b5b3e1bfe1e7825dc\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity ^0.5.2;\n\nimport \"./IERC20.sol\";\n\n/**\n * @title ERC20Detailed token\n * @dev The decimals are only for visualization purposes.\n * All the operations are done using the smallest and indivisible token unit,\n * just as on Ethereum all the operations are done in wei.\n */\ncontract ERC20Detailed is IERC20 {\n    string private _name;\n    string private _symbol;\n    uint8 private _decimals;\n\n    constructor (string memory name, string memory symbol, uint8 decimals) public {\n        _name = name;\n        _symbol = symbol;\n        _decimals = decimals;\n    }\n\n    /**\n     * @return the name of the token.\n     */\n    function name() public view returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @return the symbol of the token.\n     */\n    function symbol() public view returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @return the number of decimals of the token.\n     */\n    function decimals() public view returns (uint8) {\n        return _decimals;\n    }\n}\n",
    "sourcePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
    "ast": {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "exportedSymbols": {
            "ERC20Detailed": [
                1543
            ]
        },
        "id": 1544,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1487,
                "literals": [
                    "solidity",
                    "^",
                    "0.5",
                    ".2"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:9"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
                "file": "./IERC20.sol",
                "id": 1488,
                "nodeType": "ImportDirective",
                "scope": 1544,
                "sourceUnit": 1613,
                "src": "25:22:9",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1489,
                            "name": "IERC20",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 1612,
                            "src": "308:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$1612",
                                "typeString": "contract IERC20"
                            }
                        },
                        "id": 1490,
                        "nodeType": "InheritanceSpecifier",
                        "src": "308:6:9"
                    }
                ],
                "contractDependencies": [
                    1612
                ],
                "contractKind": "contract",
                "documentation": "@title ERC20Detailed token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
                "fullyImplemented": false,
                "id": 1543,
                "linearizedBaseContracts": [
                    1543,
                    1612
                ],
                "name": "ERC20Detailed",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 1492,
                        "name": "_name",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "321:20:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 1491,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "321:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "constant": false,
                        "id": 1494,
                        "name": "_symbol",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "347:22:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 1493,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "347:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "constant": false,
                        "id": 1496,
                        "name": "_decimals",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "375:23:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                        },
                        "typeName": {
                            "id": 1495,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "375:5:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "body": {
                            "id": 1517,
                            "nodeType": "Block",
                            "src": "483:85:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1505,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1492,
                                            "src": "493:5:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1506,
                                            "name": "name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1498,
                                            "src": "501:4:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "493:12:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 1508,
                                    "nodeType": "ExpressionStatement",
                                    "src": "493:12:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1511,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1509,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1494,
                                            "src": "515:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1510,
                                            "name": "symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1500,
                                            "src": "525:6:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "515:16:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 1512,
                                    "nodeType": "ExpressionStatement",
                                    "src": "515:16:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1515,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1513,
                                            "name": "_decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1496,
                                            "src": "541:9:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1514,
                                            "name": "decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1502,
                                            "src": "553:8:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "src": "541:20:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "id": 1516,
                                    "nodeType": "ExpressionStatement",
                                    "src": "541:20:9"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 1518,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1503,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1498,
                                    "name": "name",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "418:18:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1497,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "418:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1500,
                                    "name": "symbol",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "438:20:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1499,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "438:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1502,
                                    "name": "decimals",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "460:14:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1501,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "460:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "417:58:9"
                        },
                        "returnParameters": {
                            "id": 1504,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "483:0:9"
                        },
                        "scope": 1543,
                        "src": "405:163:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1525,
                            "nodeType": "Block",
                            "src": "680:29:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1523,
                                        "name": "_name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1492,
                                        "src": "697:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1522,
                                    "id": 1524,
                                    "nodeType": "Return",
                                    "src": "690:12:9"
                                }
                            ]
                        },
                        "documentation": "@return the name of the token.",
                        "id": 1526,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1519,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "641:2:9"
                        },
                        "returnParameters": {
                            "id": 1522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1521,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1526,
                                    "src": "665:13:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1520,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "664:15:9"
                        },
                        "scope": 1543,
                        "src": "628:81:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1533,
                            "nodeType": "Block",
                            "src": "825:31:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1531,
                                        "name": "_symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1494,
                                        "src": "842:7:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1530,
                                    "id": 1532,
                                    "nodeType": "Return",
                                    "src": "835:14:9"
                                }
                            ]
                        },
                        "documentation": "@return the symbol of the token.",
                        "id": 1534,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1527,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "786:2:9"
                        },
                        "returnParameters": {
                            "id": 1530,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1529,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1534,
                                    "src": "810:13:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1528,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "810:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "809:15:9"
                        },
                        "scope": 1543,
                        "src": "771:85:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1541,
                            "nodeType": "Block",
                            "src": "978:33:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1539,
                                        "name": "_decimals",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1496,
                                        "src": "995:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "functionReturnParameters": 1538,
                                    "id": 1540,
                                    "nodeType": "Return",
                                    "src": "988:16:9"
                                }
                            ]
                        },
                        "documentation": "@return the number of decimals of the token.",
                        "id": 1542,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1535,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "947:2:9"
                        },
                        "returnParameters": {
                            "id": 1538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1537,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1542,
                                    "src": "971:5:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1536,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "971:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "970:7:9"
                        },
                        "scope": 1543,
                        "src": "930:81:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 1544,
                "src": "282:731:9"
            }
        ],
        "src": "0:1014:9"
    },
    "legacyAST": {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "exportedSymbols": {
            "ERC20Detailed": [
                1543
            ]
        },
        "id": 1544,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1487,
                "literals": [
                    "solidity",
                    "^",
                    "0.5",
                    ".2"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:9"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
                "file": "./IERC20.sol",
                "id": 1488,
                "nodeType": "ImportDirective",
                "scope": 1544,
                "sourceUnit": 1613,
                "src": "25:22:9",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1489,
                            "name": "IERC20",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 1612,
                            "src": "308:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$1612",
                                "typeString": "contract IERC20"
                            }
                        },
                        "id": 1490,
                        "nodeType": "InheritanceSpecifier",
                        "src": "308:6:9"
                    }
                ],
                "contractDependencies": [
                    1612
                ],
                "contractKind": "contract",
                "documentation": "@title ERC20Detailed token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
                "fullyImplemented": false,
                "id": 1543,
                "linearizedBaseContracts": [
                    1543,
                    1612
                ],
                "name": "ERC20Detailed",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 1492,
                        "name": "_name",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "321:20:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 1491,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "321:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "constant": false,
                        "id": 1494,
                        "name": "_symbol",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "347:22:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 1493,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "347:6:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "constant": false,
                        "id": 1496,
                        "name": "_decimals",
                        "nodeType": "VariableDeclaration",
                        "scope": 1543,
                        "src": "375:23:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                        },
                        "typeName": {
                            "id": 1495,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "375:5:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "body": {
                            "id": 1517,
                            "nodeType": "Block",
                            "src": "483:85:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1505,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1492,
                                            "src": "493:5:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1506,
                                            "name": "name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1498,
                                            "src": "501:4:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "493:12:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 1508,
                                    "nodeType": "ExpressionStatement",
                                    "src": "493:12:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1511,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1509,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1494,
                                            "src": "515:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1510,
                                            "name": "symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1500,
                                            "src": "525:6:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "515:16:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 1512,
                                    "nodeType": "ExpressionStatement",
                                    "src": "515:16:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1515,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1513,
                                            "name": "_decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1496,
                                            "src": "541:9:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1514,
                                            "name": "decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1502,
                                            "src": "553:8:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "src": "541:20:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "id": 1516,
                                    "nodeType": "ExpressionStatement",
                                    "src": "541:20:9"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 1518,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1503,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1498,
                                    "name": "name",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "418:18:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1497,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "418:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1500,
                                    "name": "symbol",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "438:20:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1499,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "438:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1502,
                                    "name": "decimals",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1518,
                                    "src": "460:14:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1501,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "460:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "417:58:9"
                        },
                        "returnParameters": {
                            "id": 1504,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "483:0:9"
                        },
                        "scope": 1543,
                        "src": "405:163:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1525,
                            "nodeType": "Block",
                            "src": "680:29:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1523,
                                        "name": "_name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1492,
                                        "src": "697:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1522,
                                    "id": 1524,
                                    "nodeType": "Return",
                                    "src": "690:12:9"
                                }
                            ]
                        },
                        "documentation": "@return the name of the token.",
                        "id": 1526,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1519,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "641:2:9"
                        },
                        "returnParameters": {
                            "id": 1522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1521,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1526,
                                    "src": "665:13:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1520,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "664:15:9"
                        },
                        "scope": 1543,
                        "src": "628:81:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1533,
                            "nodeType": "Block",
                            "src": "825:31:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1531,
                                        "name": "_symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1494,
                                        "src": "842:7:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1530,
                                    "id": 1532,
                                    "nodeType": "Return",
                                    "src": "835:14:9"
                                }
                            ]
                        },
                        "documentation": "@return the symbol of the token.",
                        "id": 1534,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1527,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "786:2:9"
                        },
                        "returnParameters": {
                            "id": 1530,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1529,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1534,
                                    "src": "810:13:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1528,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "810:6:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "809:15:9"
                        },
                        "scope": 1543,
                        "src": "771:85:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1541,
                            "nodeType": "Block",
                            "src": "978:33:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1539,
                                        "name": "_decimals",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1496,
                                        "src": "995:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "functionReturnParameters": 1538,
                                    "id": 1540,
                                    "nodeType": "Return",
                                    "src": "988:16:9"
                                }
                            ]
                        },
                        "documentation": "@return the number of decimals of the token.",
                        "id": 1542,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1535,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "947:2:9"
                        },
                        "returnParameters": {
                            "id": 1538,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1537,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1542,
                                    "src": "971:5:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1536,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "971:5:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "970:7:9"
                        },
                        "scope": 1543,
                        "src": "930:81:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 1544,
                "src": "282:731:9"
            }
        ],
        "src": "0:1014:9"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.697Z",
    "devdoc": {
        "details": "The decimals are only for visualization purposes. All the operations are done using the smallest and indivisible token unit, just as on Ethereum all the operations are done in wei.",
        "methods": {
            "decimals()": {
                "return": "the number of decimals of the token."
            },
            "name()": {
                "return": "the name of the token."
            },
            "symbol()": {
                "return": "the symbol of the token."
            }
        },
        "title": "ERC20Detailed token"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ERC20Detailed.js.map