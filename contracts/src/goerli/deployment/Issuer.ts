export const name = 'Issuer';
export const address = '0x43b5d4D0F6fe5024c806C1B783cE3FC59E69964B';
export const source = 'Issuer';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event SynthAdded(bytes32 currencyKey, address synth)',
  'event SynthRemoved(bytes32 currencyKey, address synth)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function addSynth(address synth)',
  'function addSynths(address[] synthsToAdd)',
  'function allNetworksDebtInfo() view returns (uint256 debt, uint256 sharesSupply, bool isStale)',
  'function anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)',
  'function availableCurrencyKeys() view returns (bytes32[])',
  'function availableSynthCount() view returns (uint256)',
  'function availableSynths(uint256) view returns (address)',
  'function burnForRedemption(address deprecatedSynthProxy, address account, uint256 balance)',
  'function burnSynths(address from, uint256 amount)',
  'function burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)',
  'function burnSynthsToTarget(address from)',
  'function burnSynthsToTargetOnBehalf(address burnForAddress, address from)',
  'function burnSynthsWithoutDebt(bytes32 currencyKey, address from, uint256 amount) returns (bool rateInvalid)',
  'function canBurnSynths(address account) view returns (bool)',
  'function collateral(address account) view returns (uint256)',
  'function collateralisationRatio(address _issuer) view returns (uint256 cratio)',
  'function collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)',
  'function debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)',
  'function getSynths(bytes32[] currencyKeys) view returns (address[])',
  'function isResolverCached() view returns (bool)',
  'function issuanceRatio() view returns (uint256)',
  'function issueMaxSynths(address from)',
  'function issueMaxSynthsOnBehalf(address issueForAddress, address from)',
  'function issueSynths(address from, uint256 amount)',
  'function issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)',
  'function issueSynthsWithoutDebt(bytes32 currencyKey, address to, uint256 amount) returns (bool rateInvalid)',
  'function lastIssueEvent(address account) view returns (uint256)',
  'function liquidateAccount(address account, bool isSelfLiquidation) returns (uint256 totalRedeemed, uint256 amountToLiquidate)',
  'function maxIssuableSynths(address _issuer) view returns (uint256)',
  'function minimumStakeTime() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)',
  'function removeSynth(bytes32 currencyKey)',
  'function removeSynths(bytes32[] currencyKeys)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setCurrentPeriodId(uint128 periodId)',
  'function synths(bytes32) view returns (address)',
  'function synthsByAddress(address) view returns (bytes32)',
  'function totalIssuedSynths(bytes32 currencyKey, bool excludeOtherCollateral) view returns (uint256 totalIssued)',
  'function transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)',
  'function upgradeCollateralShort(address short, uint256 amount)',
];
