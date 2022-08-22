export const name = 'SystemStatus';
export const address = '0x9D89fF8C6f3CC22F4BbB859D0F85FB3a4e1FA916';
export const source = 'SystemStatus';
export const abi = [
  'constructor(address _owner)',
  'event AccessControlUpdated(bytes32 indexed section, address indexed account, bool canSuspend, bool canResume)',
  'event ExchangeResumed(uint256 reason)',
  'event ExchangeSuspended(uint256 reason)',
  'event FuturesMarketResumed(bytes32 marketKey, uint256 reason)',
  'event FuturesMarketSuspended(bytes32 marketKey, uint256 reason)',
  'event FuturesResumed(uint256 reason)',
  'event FuturesSuspended(uint256 reason)',
  'event IssuanceResumed(uint256 reason)',
  'event IssuanceSuspended(uint256 reason)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event SynthExchangeResumed(bytes32 currencyKey, uint256 reason)',
  'event SynthExchangeSuspended(bytes32 currencyKey, uint256 reason)',
  'event SynthResumed(bytes32 currencyKey, uint256 reason)',
  'event SynthSuspended(bytes32 currencyKey, uint256 reason)',
  'event SystemResumed(uint256 reason)',
  'event SystemSuspended(uint256 reason)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function SECTION_EXCHANGE() view returns (bytes32)',
  'function SECTION_FUTURES() view returns (bytes32)',
  'function SECTION_ISSUANCE() view returns (bytes32)',
  'function SECTION_SYNTH() view returns (bytes32)',
  'function SECTION_SYNTH_EXCHANGE() view returns (bytes32)',
  'function SECTION_SYSTEM() view returns (bytes32)',
  'function SUSPENSION_REASON_UPGRADE() view returns (uint248)',
  'function acceptOwnership()',
  'function accessControl(bytes32, address) view returns (bool canSuspend, bool canResume)',
  'function exchangeSuspension() view returns (bool suspended, uint248 reason)',
  'function futuresMarketSuspension(bytes32) view returns (bool suspended, uint248 reason)',
  'function futuresSuspension() view returns (bool suspended, uint248 reason)',
  'function getFuturesMarketSuspensions(bytes32[] marketKeys) view returns (bool[] suspensions, uint256[] reasons)',
  'function getSynthExchangeSuspensions(bytes32[] synths) view returns (bool[] exchangeSuspensions, uint256[] reasons)',
  'function getSynthSuspensions(bytes32[] synths) view returns (bool[] suspensions, uint256[] reasons)',
  'function isSystemUpgrading() view returns (bool)',
  'function issuanceSuspension() view returns (bool suspended, uint248 reason)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function requireExchangeActive() view',
  'function requireExchangeBetweenSynthsAllowed(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view',
  'function requireFuturesActive() view',
  'function requireFuturesMarketActive(bytes32 marketKey) view',
  'function requireIssuanceActive() view',
  'function requireSynthActive(bytes32 currencyKey) view',
  'function requireSynthExchangeActive(bytes32 currencyKey) view',
  'function requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view',
  'function requireSystemActive() view',
  'function resumeExchange()',
  'function resumeFutures()',
  'function resumeFuturesMarket(bytes32 marketKey)',
  'function resumeFuturesMarkets(bytes32[] marketKeys)',
  'function resumeIssuance()',
  'function resumeSynth(bytes32 currencyKey)',
  'function resumeSynthExchange(bytes32 currencyKey)',
  'function resumeSynths(bytes32[] currencyKeys)',
  'function resumeSynthsExchange(bytes32[] currencyKeys)',
  'function resumeSystem()',
  'function suspendExchange(uint256 reason)',
  'function suspendFutures(uint256 reason)',
  'function suspendFuturesMarket(bytes32 marketKey, uint256 reason)',
  'function suspendFuturesMarkets(bytes32[] marketKeys, uint256 reason)',
  'function suspendIssuance(uint256 reason)',
  'function suspendSynth(bytes32 currencyKey, uint256 reason)',
  'function suspendSynthExchange(bytes32 currencyKey, uint256 reason)',
  'function suspendSynths(bytes32[] currencyKeys, uint256 reason)',
  'function suspendSynthsExchange(bytes32[] currencyKeys, uint256 reason)',
  'function suspendSystem(uint256 reason)',
  'function synthExchangeSuspension(bytes32) view returns (bool suspended, uint248 reason)',
  'function synthSuspended(bytes32 currencyKey) view returns (bool)',
  'function synthSuspension(bytes32) view returns (bool suspended, uint248 reason)',
  'function systemSuspended() view returns (bool)',
  'function systemSuspension() view returns (bool suspended, uint248 reason)',
  'function updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)',
  'function updateAccessControls(bytes32[] sections, address[] accounts, bool[] canSuspends, bool[] canResumes)',
];
