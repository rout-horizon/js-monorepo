import { Contract } from 'ethers';
import { abi as erc20ABI } from 'contracts/erc20';
import { abi as dHedgePoolLogicABI } from 'contracts/dHedgePoolLogic';

export const dHedgeAPIUrl = 'https://api-v2.dhedge.org/graphql';
export const dSNXContractMainnet = new Contract(
	'0x5f7F94a1dd7b15594d17543BEB8B30b111DD464c',
	erc20ABI
);

const dSNXExitSUSDAddressOptimism = '0x6Da9139009C7A77B16a6acBe4EbAB257b6798570';
export const dSNXPoolAddressMainnet = '0x65bb99e80a863e0e27ee6d09c794ed8c0be47186';
export const dSNXPoolAddressOptimism = '0x59babc14dd73761e38e5bda171b2298dc14da92d';
export const dSNXPoolContractOptimism = new Contract(dSNXPoolAddressOptimism, dHedgePoolLogicABI);
export const dSNXExitSUSDContractOptimism = new Contract(dSNXExitSUSDAddressOptimism, [
	'function withdrawSUSD(address pool, uint256 fundTokenAmount,address intermediateAsset,uint256 expectedAmountSUSD) external',
]);
