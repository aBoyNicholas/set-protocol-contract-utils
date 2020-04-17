/*
 Copyright 2018 Set Labs Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* This file is auto-generated using abi-gen. Don't edit directly.
* Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
*/
var utils_1 = require("@0xproject/utils");
var IERC20_1 = require("../../artifacts/ts/IERC20");
var set_protocol_utils_1 = require("set-protocol-utils");
var base_contract_1 = require("../base_contract");
var common_1 = require("../common");
var IERC20Contract = /** @class */ (function (_super) {
    __extends(IERC20Contract, _super);
    function IERC20Contract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.balanceOf = {
            callAsync: function (_owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.balanceOf(this.formatABIDataItem('address', [], _owner)).call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.allowance = {
            callAsync: function (_owner, _spender, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.allowance(this.formatABIDataItem('address', [], _owner), this.formatABIDataItem('address', [], _spender)).call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.transfer = {
            sendTransactionAsync: function (_to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transfer(this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transfer(this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.transfer(this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transfer(this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from, _to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _from), this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transferFrom(this.formatABIDataItem('address', [], _from), this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_from, _to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transferFrom(this.formatABIDataItem('address', [], _from), this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_from, _to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.transferFrom(this.formatABIDataItem('address', [], _from), this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_from, _to, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.transferFrom(this.formatABIDataItem('address', [], _from), this.formatABIDataItem('address', [], _to), this.formatABIDataItem('uint256', [], _quantity)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approve = {
            sendTransactionAsync: function (_spender, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _spender), this.formatABIDataItem('uint256', [], _quantity)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.approve(this.formatABIDataItem('address', [], _spender), this.formatABIDataItem('uint256', [], _quantity)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.approve(this.formatABIDataItem('address', [], _spender), this.formatABIDataItem('uint256', [], _quantity)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.approve(this.formatABIDataItem('address', [], _spender), this.formatABIDataItem('uint256', [], _quantity)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_spender, _quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.approve(this.formatABIDataItem('address', [], _spender), this.formatABIDataItem('uint256', [], _quantity)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalSupply = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.totalSupply.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.totalSupply().send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.totalSupply().estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.totalSupply().encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.totalSupply().call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        common_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    IERC20Contract.prototype.deploy = function (data, args) {
        return __awaiter(this, void 0, void 0, function () {
            var wrapper;
            return __generator(this, function (_a) {
                wrapper = this;
                wrapper.web3ContractInstance.deploy({
                    data: data,
                    arguments: args,
                })
                    .send(wrapper.defaults)
                    .then(function (newContractInstance) {
                    wrapper.web3ContractInstance = newContractInstance;
                    wrapper.address = newContractInstance.options.address;
                });
                return [2 /*return*/];
            });
        });
    };
    IERC20Contract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, currentNetwork, abi, networks, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _a.sent();
                        abi = IERC20_1.IERC20.abi, networks = IERC20_1.IERC20.networks;
                        web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);
                        return [2 /*return*/, new IERC20Contract(web3ContractInstance, defaults)];
                }
            });
        });
    };
    IERC20Contract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, web3Utils, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = IERC20_1.IERC20.abi;
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(address)];
                    case 1:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 2:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = new web3.eth.Contract(abi, address);
                            return [2 /*return*/, new IERC20Contract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('IERC20', currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return IERC20Contract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.IERC20Contract = IERC20Contract;
//# sourceMappingURL=ierc20.js.map