"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var dotenv = __importStar(require("dotenv"));
var config_1 = require("hardhat/config");
require("@nomiclabs/hardhat-etherscan");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("solidity-coverage");
require("hardhat-docgen");
require("hardhat-tracer");
require("hardhat-spdx-license-identifier");
require("@tenderly/hardhat-tenderly");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("hardhat-storage-layout");
require("hardhat-finder");
dotenv.config();
function getWallet() {
    return process.env.DEPLOYER_WALLET_PRIVATE_KEY !== undefined
        ? [process.env.DEPLOYER_WALLET_PRIVATE_KEY]
        : [];
}
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
config_1.task('accounts', 'Prints the list of accounts', function (taskArgs, hre) { return __awaiter(void 0, void 0, void 0, function () {
    var accounts, _i, accounts_1, account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, hre.ethers.getSigners()];
            case 1:
                accounts = _a.sent();
                for (_i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
                    account = accounts_1[_i];
                    console.log(account.address);
                }
                return [2 /*return*/];
        }
    });
}); });
config_1.task('storage-layout', 'Prints the storage layout', function (_, hre) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, hre.storageLayout["export"]()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var LOW_OPTIMIZER_COMPILER_SETTINGS = {
    version: '0.8.15',
    settings: {
        optimizer: {
            enabled: true,
            runs: 2000
        },
        metadata: {
            bytecodeHash: 'none'
        }
    }
};
var LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
    version: '0.8.15',
    settings: {
        viaIR: true,
        optimizer: {
            enabled: true,
            runs: 1000
        },
        metadata: {
            bytecodeHash: 'none'
        }
    }
};
var DEFAULT_COMPILER_SETTINGS = {
    version: '0.8.15',
    settings: {
        optimizer: {
            enabled: true,
            runs: 1000000
        },
        metadata: {
            bytecodeHash: 'none'
        }
    }
};
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
var config = {
    solidity: {
        compilers: [DEFAULT_COMPILER_SETTINGS],
        overrides: {
            'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
            'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
            'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
            'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
            'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
            'contracts/libraries/NFTSVG.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS
        }
    },
    docgen: {
        path: './docs',
        clear: true,
        runOnCompile: false
    },
    contractSizer: {
        runOnCompile: false,
        strict: true
    },
    spdxLicenseIdentifier: {
        runOnCompile: false
    },
    gasReporter: {
        enabled: (process.env.REPORT_GAS &&
            'true' === process.env.REPORT_GAS.toLowerCase()) ||
            false,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY || '',
        gasPriceApi: process.env.GAS_PRICE_API ||
            'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
        token: 'ETH',
        currency: 'USD'
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: (process.env.ALLOW_UNLIMITED_CONTRACT_SIZE &&
                'true' === process.env.ALLOW_UNLIMITED_CONTRACT_SIZE.toLowerCase()) ||
                false
        },
        custom: {
            url: process.env.CUSTOM_NETWORK_URL || '',
            accounts: {
                count: (process.env.CUSTOM_NETWORK_ACCOUNTS_COUNT &&
                    Boolean(parseInt(process.env.CUSTOM_NETWORK_ACCOUNTS_COUNT)) &&
                    parseInt(process.env.CUSTOM_NETWORK_ACCOUNTS_COUNT)) ||
                    0,
                mnemonic: process.env.CUSTOM_NETWORK_ACCOUNTS_MNEMONIC || '',
                path: process.env.CUSTOM_NETWORK_ACCOUNTS_PATH || ''
            }
        },
        arbitrumTestnet: {
            url: process.env.ARBITRUM_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        auroraTestnet: {
            url: process.env.AURORA_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        avalancheFujiTestnet: {
            url: process.env.AVALANCHE_FUJI_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        bscTestnet: {
            url: process.env.BSC_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        ftmTestnet: {
            url: process.env.FTM_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        goerli: {
            url: process.env.GOERLI_RPC_URL || '',
            accounts: getWallet()
        },
        harmonyTest: {
            url: process.env.HARMONY_TEST_RPC_URL || '',
            accounts: getWallet()
        },
        hecoTestnet: {
            url: process.env.HECO_TESTNET_RPC_URL || '',
            accounts: getWallet()
        },
        kovan: {
            url: process.env.KOVAN_RPC_URL || '',
            accounts: getWallet()
        },
        moonbaseAlpha: {
            url: process.env.MOONBASE_ALPHA_RPC_URL || '',
            accounts: getWallet()
        },
        polygonMumbai: {
            url: process.env.POLYGON_MUMBAI_RPC_URL || '',
            accounts: getWallet()
        },
        polygon: {
            url: "https://polygon-mainnet.g.alchemy.com/v2/nPBTC9lNonD1KsZGmuXSRGfVh6O63x2_",
            accounts: getWallet()
        },
        rinkeby: {
            url: process.env.RINKEBY_RPC_URL || '',
            accounts: getWallet()
        },
        ropsten: {
            url: process.env.ROPSTEN_RPC_URL || '',
            accounts: getWallet()
        },
        sokol: {
            url: process.env.SOKOL_RPC_URL || '',
            accounts: getWallet()
        }
    },
    etherscan: {
        apiKey: {
            arbitrumTestnet: process.env.ARBISCAN_API_KEY || '',
            auroraTestnet: process.env.AURORA_API_KEY || '',
            avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY || '',
            bscTestnet: process.env.BSCSCAN_API_KEY || '',
            ftmTestnet: process.env.FTMSCAN_API_KEY || '',
            harmonyTest: process.env.HARMONY_POPS_API_KEY || '',
            hecoTestnet: process.env.HECOINFO_API_KEY || '',
            goerli: process.env.ETHERSCAN_API_KEY || '',
            kovan: process.env.ETHERSCAN_API_KEY || '',
            moonbaseAlpha: process.env.MOONSCAN_API_KEY || '',
            polygonMumbai: process.env.POLYGONSCAN_API_KEY || '',
            rinkeby: process.env.ETHERSCAN_API_KEY || '',
            ropsten: process.env.ETHERSCAN_API_KEY || '',
            sokol: process.env.BLOCKSCOUT_API_KEY || '',
            custom: process.env.CUSTOM_EXPLORER_API_KEY || ''
        },
        customChains: [
            {
                network: 'custom',
                chainId: (process.env.CUSTOM_NETWORK_CHAIN_ID &&
                    Boolean(parseInt(process.env.CUSTOM_NETWORK_CHAIN_ID)) &&
                    parseInt(process.env.CUSTOM_NETWORK_CHAIN_ID)) ||
                    0,
                urls: {
                    apiURL: process.env.CUSTOM_NETWORK_API_URL || '',
                    browserURL: process.env.CUSTOM_NETWORK_BROWSER_URL || ''
                }
            },
        ]
    }
};
exports["default"] = config;
