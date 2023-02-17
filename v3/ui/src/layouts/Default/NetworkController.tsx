// import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { ChevronDown, ChevronUp, EthereumIcon, OptimismIcon, WalletIcon } from '@snx-v3/icons';
// import { getNetworkByName, useAccount } from '@snx-v3/useBlockchain';

export function NetworkController() {
  // const connectedAccount = useAccount();
  // const switchNetwork = (...args) => {
  //   console.log(...args);
  // };

  return null;

  // return (
  //   <ConnectButton.Custom>
  //     {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
  //       const network = getNetworkByName(chain?.name);
  //       return (
  //         <Flex
  //           {...(!mounted && {
  //             'aria-hidden': true,
  //             style: {
  //               opacity: 0,
  //               pointerEvents: 'none',
  //               userSelect: 'none',
  //             },
  //           })}
  //         >
  //           <Menu>
  //             {({ isOpen }) => (
  //               <>
  //                 <MenuButton
  //                   as={Button}
  //                   variant="outline"
  //                   colorScheme="gray"
  //                   sx={{ '> span': { display: 'flex', alignItems: 'center' } }}
  //                   mr={1}
  //                 >
  //                   <network.Icon />
  //
  //                   <Text
  //                     variant="nav"
  //                     fontSize="sm"
  //                     fontWeight={700}
  //                     ml={1.5}
  //                     mr={2}
  //                     display={{ base: 'none', md: 'initial' }}
  //                   >
  //                     {network.displayName}
  //                   </Text>
  //                   <Flex display={{ base: 'none', md: 'initial' }}>
  //                     {isOpen ? <ChevronUp color="cyan" /> : <ChevronDown color="cyan.500" />}
  //                   </Flex>
  //                 </MenuButton>
  //                 <MenuList>
  //                   <MenuItem
  //                     onClick={() => {
  //                       if (connectedAccount?.address && switchNetwork) {
  //                         switchNetwork(1);
  //                       } else {
  //                         openConnectModal();
  //                       }
  //                     }}
  //                   >
  //                     <EthereumIcon />
  //                     <Text variant="nav" ml={2}>
  //                       Ethereum Mainnet
  //                     </Text>
  //                   </MenuItem>
  //                   <MenuItem
  //                     onClick={() => {
  //                       if (connectedAccount?.address && switchNetwork) {
  //                         switchNetwork(10);
  //                       } else {
  //                         openConnectModal();
  //                       }
  //                     }}
  //                   >
  //                     <OptimismIcon />
  //                     <Text variant="nav" ml={2}>
  //                       Optimism
  //                     </Text>
  //                   </MenuItem>
  //                 </MenuList>
  //               </>
  //             )}
  //           </Menu>
  //           {connectedAccount?.address && account && mounted ? (
  //             <Button
  //               variant="outline"
  //               colorScheme="gray"
  //               ml={2}
  //               height={10}
  //               py="6px"
  //               px="9.5px"
  //               onClick={() => {
  //                 if (chain?.unsupported) {
  //                   openChainModal();
  //                 } else {
  //                   openAccountModal();
  //                 }
  //               }}
  //             >
  //               <WalletIcon />
  //               <Text
  //                 ml={1}
  //                 color="whiteAlpha.800"
  //                 fontWeight={700}
  //                 fontSize="xs"
  //                 userSelect="none"
  //               >
  //                 {account?.ensName || account.displayName}
  //               </Text>
  //             </Button>
  //           ) : (
  //             <Button
  //               onClick={openConnectModal}
  //               type="button"
  //               size="sm"
  //               ml={2}
  //               py={5}
  //               data-testid="connect-wallet-button"
  //             >
  //               Connect Wallet
  //             </Button>
  //           )}
  //         </Flex>
  //       );
  //     }}
  //   </ConnectButton.Custom>
  // );
}
