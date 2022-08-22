export const name = 'CollateralManager';
export const address = '0x15E7D4972a3E477878A5867A47617122BE2d1fF0';
export const source = 'CollateralManager';
export const abi = [
  'constructor(address _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _maxSkewRate, uint256 _baseBorrowRate, uint256 _baseShortRate)',
  'event BaseBorrowRateUpdated(uint256 baseBorrowRate)',
  'event BaseShortRateUpdated(uint256 baseShortRate)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event CollateralAdded(address collateral)',
  'event CollateralRemoved(address collateral)',
  'event LiquidationPenaltyUpdated(uint256 liquidationPenalty)',
  'event MaxDebtUpdated(uint256 maxDebt)',
  'event MaxSkewRateUpdated(uint256 maxSkewRate)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event PauseChanged(bool isPaused)',
  'event ShortableSynthAdded(bytes32 synth)',
  'event ShortableSynthRemoved(bytes32 synth)',
  'event SynthAdded(bytes32 synth)',
  'event SynthRemoved(bytes32 synth)',
  'event UtilisationMultiplierUpdated(uint256 utilisationMultiplier)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function accrueInterest(uint256 interestIndex, bytes32 currency, bool isShort) returns (uint256 difference, uint256 index)',
  'function addCollaterals(address[] collaterals)',
  'function addShortableSynths(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys)',
  'function addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)',
  'function areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)',
  'function areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)',
  'function baseBorrowRate() view returns (uint256)',
  'function baseShortRate() view returns (uint256)',
  'function decrementLongs(bytes32 synth, uint256 amount)',
  'function decrementShorts(bytes32 synth, uint256 amount)',
  'function exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)',
  'function getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)',
  'function getNewLoanId() returns (uint256 id)',
  'function getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)',
  'function getShortRate(bytes32 synthKey) view returns (uint256 shortRate, bool rateIsInvalid)',
  'function getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)',
  'function hasAllCollaterals(address[] collaterals) view returns (bool)',
  'function hasCollateral(address collateral) view returns (bool)',
  'function incrementLongs(bytes32 synth, uint256 amount)',
  'function incrementShorts(bytes32 synth, uint256 amount)',
  'function isResolverCached() view returns (bool)',
  'function isSynthManaged(bytes32 currencyKey) view returns (bool)',
  'function lastPauseTime() view returns (uint256)',
  'function long(bytes32 synth) view returns (uint256 amount)',
  'function maxDebt() view returns (uint256)',
  'function maxSkewRate() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function paused() view returns (bool)',
  'function rebuildCache()',
  'function removeCollaterals(address[] collaterals)',
  'function removeShortableSynths(bytes32[] synths)',
  'function removeSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setBaseBorrowRate(uint256 _baseBorrowRate)',
  'function setBaseShortRate(uint256 _baseShortRate)',
  'function setMaxDebt(uint256 _maxDebt)',
  'function setMaxSkewRate(uint256 _maxSkewRate)',
  'function setPaused(bool _paused)',
  'function setUtilisationMultiplier(uint256 _utilisationMultiplier)',
  'function short(bytes32 synth) view returns (uint256 amount)',
  'function shortableSynthsByKey(bytes32) view returns (bytes32)',
  'function state() view returns (address)',
  'function synthsByKey(bytes32) view returns (bytes32)',
  'function totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)',
  'function totalLongAndShort() view returns (uint256 susdValue, bool anyRateIsInvalid)',
  'function totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)',
  'function updateBorrowRatesCollateral(uint256 rate)',
  'function updateShortRatesCollateral(bytes32 currency, uint256 rate)',
  'function utilisationMultiplier() view returns (uint256)',
];
