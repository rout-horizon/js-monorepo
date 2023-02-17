import { ethers } from 'ethers';
import React from 'react';
import { EthereumIcon, OptimismIcon, FailedIcon } from '@snx-v3/icons';

export type Network = {
  id: number;
  name: string;
  displayName: string;
  Icon: React.FC;
  isSupported: boolean;
};

export type Account = {
  address?: string;
};

export const NETWORKS = {
  unsupported: {
    id: 0,
    name: 'unsupported',
    displayName: 'Unsupported',
    Icon: () => <FailedIcon width="24px" height="24px" />,
    isSupported: false,
  },
  mainnet: {
    id: 1,
    name: 'mainnet',
    displayName: 'Ethereum',
    Icon: () => <EthereumIcon />,
    isSupported: false,
  },
  goerli: {
    id: 5,
    name: 'goerli',
    displayName: 'Goerli Testnet',
    Icon: () => <EthereumIcon />,
    isSupported: true,
  },
  optimism: {
    id: 10,
    name: 'optimism',
    displayName: 'Optimism',
    Icon: () => <OptimismIcon />,
    isSupported: false,
  },
  'optimism-goerli': {
    id: 420,
    name: 'optimism-goerli',
    displayName: 'Optimistic Goerli',
    Icon: () => <OptimismIcon />,
    isSupported: true,
  },
};

export const DEFAULT_NETWORK = NETWORKS.goerli;
export const DEFAULT_PROVIDER = new ethers.providers.InfuraProvider(
  NETWORKS.goerli.name,
  process.env.INFURA_KEY
);
export const DEFAULT_SIGNER = undefined;
export const DEFAULT_ACCOUNT = { address: undefined };

export function getNetworkByName(name?: string): Network {
  if (!name) {
    return DEFAULT_NETWORK;
  }
  if (!(name in NETWORKS)) {
    return NETWORKS.unsupported;
  }
  // @ts-ignore
  return NETWORKS[name];
}

export const BlockchainContext = React.createContext<{
  provider: ethers.providers.JsonRpcProvider;
  network: Network;
  account?: Account;
  signer?: ethers.providers.JsonRpcSigner;
}>({
  provider: DEFAULT_PROVIDER,
  signer: DEFAULT_SIGNER,
  network: DEFAULT_NETWORK,
  account: DEFAULT_ACCOUNT,
});

export const BlockchainProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // TODO: take from wallet
  const [provider, _setProvider] = React.useState(DEFAULT_PROVIDER);
  const [signer, _setSigner] = React.useState(DEFAULT_SIGNER);
  const [network, _setNetwork] = React.useState(DEFAULT_NETWORK);
  const [account, _setAccount] = React.useState(DEFAULT_ACCOUNT);
  return (
    <BlockchainContext.Provider value={{ provider, signer, network, account }}>
      {children}
    </BlockchainContext.Provider>
  );
};

export function useProvider() {
  const { signer, provider } = React.useContext(BlockchainContext);
  return signer ? signer : provider;
}

export function useSigner() {
  const { signer } = React.useContext(BlockchainContext);
  return signer;
}

export function useNetwork() {
  const { network } = React.useContext(BlockchainContext);
  return network;
}

export function useAccount() {
  const { account } = React.useContext(BlockchainContext);
  return account;
}

export function useIsConnected(): boolean {
  const { account } = React.useContext(BlockchainContext);
  return Boolean(account?.address);
}
