export const name = 'SynthsAVAX';
export const address = '0xB2b42B231C68cbb0b4bF2FFEbf57782Fd97D3dA4';
export const source = 'MultiCollateralSynth';
export const abi = [
  'constructor(address _proxy, address _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
  'event Burned(address indexed account, uint256 value)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event Issued(address indexed account, uint256 value)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event ProxyUpdated(address proxyAddress)',
  'event TokenStateUpdated(address newTokenState)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function DECIMALS() view returns (uint8)',
  'function FEE_ADDRESS() view returns (address)',
  'function acceptOwnership()',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 value) returns (bool)',
  'function balanceOf(address account) view returns (uint256)',
  'function burn(address account, uint256 amount)',
  'function currencyKey() view returns (bytes32)',
  'function decimals() view returns (uint8)',
  'function isResolverCached() view returns (bool)',
  'function issue(address account, uint256 amount)',
  'function messageSender() view returns (address)',
  'function name() view returns (string)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function proxy() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setMessageSender(address sender)',
  'function setProxy(address _proxy)',
  'function setTokenState(address _tokenState)',
  'function setTotalSupply(uint256 amount)',
  'function symbol() view returns (string)',
  'function tokenState() view returns (address)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address to, uint256 value) returns (bool)',
  'function transferAndSettle(address to, uint256 value) returns (bool)',
  'function transferFrom(address from, address to, uint256 value) returns (bool)',
  'function transferFromAndSettle(address from, address to, uint256 value) returns (bool)',
  'function transferableSynths(address account) view returns (uint256)',
];
