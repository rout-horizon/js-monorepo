import { ethers } from 'ethers';
import { Network } from 'store/wallet';

export const ADDRESSES: Record<string, string> = {
	mainnet: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
	kovan: '0x9B2fE385cEDea62D839E4dE89B0A23EF4eacC717',
};
const DECIMALS = 8;

export function makeContract(
	network: string,
	signer: ethers.Signer | ethers.providers.Provider
): ethers.Contract | null {
	const address = ADDRESSES[network];

	return address ? new ethers.Contract(address, ABI, signer) : null;
}

export const getToken = (network?: Network | null) => {
	const name = network?.name || 'mainnet';
	const chainId = network?.id || 1;
	return {
		symbol: 'renBTC',
		address: ADDRESSES[name],
		decimals: DECIMALS,
		logoURI: '',
		name: 'renBTC',
		chainId,
		tags: [],
	};
};

export const ABI = [
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, internalType: 'uint256', name: '_rate', type: 'uint256' }],
		name: 'LogRateChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		constant: true,
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'PERMIT_TYPEHASH',
		outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: '_rateScale',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'spender', type: 'address' },
		],
		name: 'allowance',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'spender', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
		name: 'balanceOfUnderlying',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
		name: 'blacklistRecoverableToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: '_from', type: 'address' },
			{ internalType: 'uint256', name: '_amount', type: 'uint256' },
		],
		name: 'burn',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'claimOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'spender', type: 'address' },
			{ internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
		],
		name: 'decreaseAllowance',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'exchangeRateCurrent',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'uint256', name: '_amountUnderlying', type: 'uint256' }],
		name: 'fromUnderlying',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'spender', type: 'address' },
			{ internalType: 'uint256', name: 'addedValue', type: 'uint256' },
		],
		name: 'increaseAllowance',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'string', name: 'name', type: 'string' },
			{ internalType: 'string', name: 'symbol', type: 'string' },
			{ internalType: 'uint8', name: 'decimals', type: 'uint8' },
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'uint256', name: '_chainId', type: 'uint256' },
			{ internalType: 'address', name: '_nextOwner', type: 'address' },
			{ internalType: 'uint256', name: '_initialRate', type: 'uint256' },
			{ internalType: 'string', name: '_version', type: 'string' },
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'string', name: '_symbol', type: 'string' },
			{ internalType: 'uint8', name: '_decimals', type: 'uint8' },
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'uint256', name: '_chainId', type: 'uint256' },
			{ internalType: 'string', name: '_version', type: 'string' },
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'string', name: '_symbol', type: 'string' },
			{ internalType: 'uint8', name: '_decimals', type: 'uint8' },
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: '_nextOwner', type: 'address' }],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: '_nextOwner', type: 'address' },
			{ internalType: 'uint256', name: '_initialRate', type: 'uint256' },
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'isOwner',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: '_to', type: 'address' },
			{ internalType: 'uint256', name: '_amount', type: 'uint256' },
		],
		name: 'mint',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'nonces',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'pendingOwner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'holder', type: 'address' },
			{ internalType: 'address', name: 'spender', type: 'address' },
			{ internalType: 'uint256', name: 'nonce', type: 'uint256' },
			{ internalType: 'uint256', name: 'expiry', type: 'uint256' },
			{ internalType: 'bool', name: 'allowed', type: 'bool' },
			{ internalType: 'uint8', name: 'v', type: 'uint8' },
			{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
			{ internalType: 'bytes32', name: 's', type: 'bytes32' },
		],
		name: 'permit',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: '_token', type: 'address' }],
		name: 'recoverTokens',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'uint256', name: '_nextRate', type: 'uint256' }],
		name: 'setExchangeRate',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
		name: 'toUnderlying',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'recipient', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'address', name: 'sender', type: 'address' },
			{ internalType: 'address', name: 'recipient', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'version',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
];
