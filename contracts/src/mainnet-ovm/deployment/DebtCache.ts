export const name = 'DebtCache';
export const address = '0x17628A557d1Fc88D1c35989dcBAC3f3e275E2d2B';
export const source = 'DebtCache';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DebtCacheSnapshotTaken(uint256 timestamp)',
  'event DebtCacheUpdated(uint256 cachedDebt)',
  'event DebtCacheValidityChanged(bool indexed isInvalid)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)',
  'function cacheInvalid() view returns (bool)',
  'function cacheStale() view returns (bool)',
  'function cacheTimestamp() view returns (uint256)',
  'function cachedDebt() view returns (uint256)',
  'function cachedSynthDebt(bytes32 currencyKey) view returns (uint256)',
  'function cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)',
  'function currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)',
  'function currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 futuresDebt, uint256 excludedDebt, bool anyRateIsInvalid)',
  'function debtSnapshotStaleTime() view returns (uint256)',
  'function excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[] excludedDebts)',
  'function importExcludedIssuedDebts(address prevDebtCache, address prevIssuer)',
  'function isInitialized() view returns (bool)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function purgeCachedSynthDebt(bytes32 currencyKey)',
  'function rebuildCache()',
  'function recordExcludedDebtChange(bytes32 currencyKey, int256 delta)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function takeDebtSnapshot()',
  'function totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)',
  'function updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)',
  'function updateCachedSynthDebts(bytes32[] currencyKeys)',
  'function updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)',
  'function updateCachedsUSDDebt(int256 amount)',
  'function updateDebtCacheValidity(bool currentlyInvalid)',
];
