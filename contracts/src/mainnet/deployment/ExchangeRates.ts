export const name = 'ExchangeRates';
export const address = '0x9F1C2f0071Bc3b31447AEda9fA3A68d651eB4632';
export const source = 'ExchangeRatesWithDexPricing';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AggregatorAdded(bytes32 currencyKey, address aggregator)',
  'event AggregatorRemoved(bytes32 currencyKey, address aggregator)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DexPriceAggregatorUpdated(address newDexPriceAggregator)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function addAggregator(bytes32 currencyKey, address aggregatorAddress)',
  'function aggregatorKeys(uint256) view returns (bytes32)',
  'function aggregatorWarningFlags() view returns (address)',
  'function aggregators(bytes32) view returns (address)',
  'function anyRateIsInvalid(bytes32[] currencyKeys) view returns (bool)',
  'function anyRateIsInvalidAtRound(bytes32[] currencyKeys, uint256[] roundIds) view returns (bool)',
  'function atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)',
  'function atomicTwapWindow() view returns (uint256)',
  'function atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)',
  'function atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)',
  'function currenciesUsingAggregator(address aggregator) view returns (bytes32[] currencies)',
  'function currencyKeyDecimals(bytes32) view returns (uint8)',
  'function dexPriceAggregator() view returns (address)',
  'function effectiveAtomicValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)',
  'function effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value)',
  'function effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)',
  'function effectiveValueAndRatesAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)',
  'function getCurrentRoundId(bytes32 currencyKey) view returns (uint256)',
  'function getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function lastRateUpdateTimes(bytes32 currencyKey) view returns (uint256)',
  'function lastRateUpdateTimesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rateAndInvalid(bytes32 currencyKey) view returns (uint256 rate, bool isInvalid)',
  'function rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)',
  'function rateAndUpdatedTime(bytes32 currencyKey) view returns (uint256 rate, uint256 time)',
  'function rateForCurrency(bytes32 currencyKey) view returns (uint256)',
  'function rateIsFlagged(bytes32 currencyKey) view returns (bool)',
  'function rateIsInvalid(bytes32 currencyKey) view returns (bool)',
  'function rateIsStale(bytes32 currencyKey) view returns (bool)',
  'function rateStalePeriod() view returns (uint256)',
  'function rateWithSafetyChecks(bytes32 currencyKey) returns (uint256 rate, bool broken, bool staleOrInvalid)',
  'function ratesAndInvalidForCurrencies(bytes32[] currencyKeys) view returns (uint256[] rates, bool anyRateInvalid)',
  'function ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds, uint256 roundId) view returns (uint256[] rates, uint256[] times)',
  'function ratesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])',
  'function rebuildCache()',
  'function removeAggregator(bytes32 currencyKey)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setDexPriceAggregator(address _dexPriceAggregator)',
  'function synthTooVolatileForAtomicExchange(bytes32 currencyKey) view returns (bool)',
];
