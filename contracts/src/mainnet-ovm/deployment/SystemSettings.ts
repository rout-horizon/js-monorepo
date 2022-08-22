// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'SystemSettings';
export const address = '0x05E1b1Dff853B1D67828Aa5E8CB37cC25aA050eE';
export const source = 'SystemSettings';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AggregatorWarningFlagsUpdated(address flags)',
  'event AtomicEquivalentForDexPricingUpdated(bytes32 synthKey, address equivalent)',
  'event AtomicExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)',
  'event AtomicMaxVolumePerBlockUpdated(uint256 newMaxVolume)',
  'event AtomicTwapWindowUpdated(uint256 newWindow)',
  'event AtomicVolatilityConsiderationWindowUpdated(bytes32 synthKey, uint256 newVolatilityConsiderationWindow)',
  'event AtomicVolatilityUpdateThresholdUpdated(bytes32 synthKey, uint256 newVolatilityUpdateThreshold)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event CollapseFeeRateUpdated(uint256 collapseFeeRate)',
  'event CrossChainSynthTransferEnabledUpdated(bytes32 synthKey, uint256 value)',
  'event CrossDomainMessageGasLimitChanged(uint8 gasLimitType, uint256 newLimit)',
  'event DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)',
  'event EtherWrapperBurnFeeRateUpdated(uint256 rate)',
  'event EtherWrapperMaxETHUpdated(uint256 maxETH)',
  'event EtherWrapperMintFeeRateUpdated(uint256 rate)',
  'event ExchangeDynamicFeeRoundsUpdated(uint256 dynamicFeeRounds)',
  'event ExchangeDynamicFeeThresholdUpdated(uint256 dynamicFeeThreshold)',
  'event ExchangeDynamicFeeWeightDecayUpdated(uint256 dynamicFeeWeightDecay)',
  'event ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)',
  'event ExchangeMaxDynamicFeeUpdated(uint256 maxDynamicFee)',
  'event FeePeriodDurationUpdated(uint256 newFeePeriodDuration)',
  'event FlagRewardUpdated(uint256 newReward)',
  'event InteractionDelayUpdated(uint256 interactionDelay)',
  'event IssuanceRatioUpdated(uint256 newRatio)',
  'event LiquidateRewardUpdated(uint256 newReward)',
  'event LiquidationDelayUpdated(uint256 newDelay)',
  'event LiquidationEscrowDurationUpdated(uint256 newDuration)',
  'event LiquidationPenaltyUpdated(uint256 newPenalty)',
  'event LiquidationRatioUpdated(uint256 newRatio)',
  'event MinimumStakeTimeUpdated(uint256 minimumStakeTime)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event PriceDeviationThresholdUpdated(uint256 threshold)',
  'event PureChainlinkPriceForAtomicSwapsEnabledUpdated(bytes32 synthKey, bool enabled)',
  'event RateStalePeriodUpdated(uint256 rateStalePeriod)',
  'event SelfLiquidationPenaltyUpdated(uint256 newPenalty)',
  'event SnxLiquidationPenaltyUpdated(uint256 newPenalty)',
  'event TargetThresholdUpdated(uint256 newTargetThreshold)',
  'event TradingRewardsEnabled(bool enabled)',
  'event WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)',
  'event WrapperBurnFeeRateUpdated(address wrapper, int256 rate)',
  'event WrapperMaxTokenAmountUpdated(address wrapper, uint256 maxTokenAmount)',
  'event WrapperMintFeeRateUpdated(address wrapper, int256 rate)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function aggregatorWarningFlags() view returns (address)',
  'function atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)',
  'function atomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)',
  'function atomicMaxVolumePerBlock() view returns (uint256)',
  'function atomicTwapWindow() view returns (uint256)',
  'function atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)',
  'function atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)',
  'function collapseFeeRate(address collateral) view returns (uint256)',
  'function crossChainSynthTransferEnabled(bytes32 currencyKey) view returns (uint256)',
  'function crossDomainMessageGasLimit(uint8 gasLimitType) view returns (uint256)',
  'function debtSnapshotStaleTime() view returns (uint256)',
  'function etherWrapperBurnFeeRate() view returns (uint256)',
  'function etherWrapperMaxETH() view returns (uint256)',
  'function etherWrapperMintFeeRate() view returns (uint256)',
  'function exchangeDynamicFeeRounds() view returns (uint256)',
  'function exchangeDynamicFeeThreshold() view returns (uint256)',
  'function exchangeDynamicFeeWeightDecay() view returns (uint256)',
  'function exchangeFeeRate(bytes32 currencyKey) view returns (uint256)',
  'function exchangeMaxDynamicFee() view returns (uint256)',
  'function feePeriodDuration() view returns (uint256)',
  'function flagReward() view returns (uint256)',
  'function interactionDelay(address collateral) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function issuanceRatio() view returns (uint256)',
  'function liquidateReward() view returns (uint256)',
  'function liquidationDelay() view returns (uint256)',
  'function liquidationEscrowDuration() view returns (uint256)',
  'function liquidationPenalty() view returns (uint256)',
  'function liquidationRatio() view returns (uint256)',
  'function minimumStakeTime() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function priceDeviationThresholdFactor() view returns (uint256)',
  'function pureChainlinkPriceForAtomicSwapsEnabled(bytes32 currencyKey) view returns (bool)',
  'function rateStalePeriod() view returns (uint256)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function selfLiquidationPenalty() view returns (uint256)',
  'function setAggregatorWarningFlags(address _flags)',
  'function setAtomicEquivalentForDexPricing(bytes32 _currencyKey, address _equivalent)',
  'function setAtomicExchangeFeeRate(bytes32 _currencyKey, uint256 _exchangeFeeRate)',
  'function setAtomicMaxVolumePerBlock(uint256 _maxVolume)',
  'function setAtomicTwapWindow(uint256 _window)',
  'function setAtomicVolatilityConsiderationWindow(bytes32 _currencyKey, uint256 _window)',
  'function setAtomicVolatilityUpdateThreshold(bytes32 _currencyKey, uint256 _threshold)',
  'function setCollapseFeeRate(address _collateral, uint256 _collapseFeeRate)',
  'function setCrossChainSynthTransferEnabled(bytes32 _currencyKey, uint256 _value)',
  'function setCrossDomainMessageGasLimit(uint8 _gasLimitType, uint256 _crossDomainMessageGasLimit)',
  'function setDebtSnapshotStaleTime(uint256 _seconds)',
  'function setEtherWrapperBurnFeeRate(uint256 _rate)',
  'function setEtherWrapperMaxETH(uint256 _maxETH)',
  'function setEtherWrapperMintFeeRate(uint256 _rate)',
  'function setExchangeDynamicFeeRounds(uint256 rounds)',
  'function setExchangeDynamicFeeThreshold(uint256 threshold)',
  'function setExchangeDynamicFeeWeightDecay(uint256 weightDecay)',
  'function setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)',
  'function setExchangeMaxDynamicFee(uint256 maxFee)',
  'function setFeePeriodDuration(uint256 _feePeriodDuration)',
  'function setFlagReward(uint256 reward)',
  'function setInteractionDelay(address _collateral, uint256 _interactionDelay)',
  'function setIssuanceRatio(uint256 ratio)',
  'function setLiquidateReward(uint256 reward)',
  'function setLiquidationDelay(uint256 time)',
  'function setLiquidationEscrowDuration(uint256 duration)',
  'function setLiquidationPenalty(uint256 penalty)',
  'function setLiquidationRatio(uint256 _liquidationRatio)',
  'function setMinimumStakeTime(uint256 _seconds)',
  'function setPriceDeviationThresholdFactor(uint256 _priceDeviationThresholdFactor)',
  'function setPureChainlinkPriceForAtomicSwapsEnabled(bytes32 _currencyKey, bool _enabled)',
  'function setRateStalePeriod(uint256 period)',
  'function setSelfLiquidationPenalty(uint256 penalty)',
  'function setSnxLiquidationPenalty(uint256 penalty)',
  'function setTargetThreshold(uint256 percent)',
  'function setTradingRewardsEnabled(bool _tradingRewardsEnabled)',
  'function setWaitingPeriodSecs(uint256 _waitingPeriodSecs)',
  'function setWrapperBurnFeeRate(address _wrapper, int256 _rate)',
  'function setWrapperMaxTokenAmount(address _wrapper, uint256 _maxTokenAmount)',
  'function setWrapperMintFeeRate(address _wrapper, int256 _rate)',
  'function snxLiquidationPenalty() view returns (uint256)',
  'function targetThreshold() view returns (uint256)',
  'function tradingRewardsEnabled() view returns (bool)',
  'function waitingPeriodSecs() view returns (uint256)',
  'function wrapperBurnFeeRate(address wrapper) view returns (int256)',
  'function wrapperMaxTokenAmount(address wrapper) view returns (uint256)',
  'function wrapperMintFeeRate(address wrapper) view returns (int256)',
];
