export const name = 'FeePool';
export const address = '0x4FC6f7C8Ff4f0D535315F1E6e84897c89367b47E';
export const source = 'FeePool';
export const abi = [
  'constructor(address _proxy, address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event FeePeriodClosed(uint256 feePeriodId)',
  'event FeesClaimed(address account, uint256 sUSDAmount, uint256 snxRewards)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event ProxyUpdated(address proxyAddress)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function FEE_ADDRESS() view returns (address)',
  'function FEE_PERIOD_LENGTH() view returns (uint8)',
  'function acceptOwnership()',
  'function allNetworksDebtSharesSupply() view returns (uint256 sharesSupply, uint256 updatedAt)',
  'function allNetworksSnxBackedDebt() view returns (uint256 debt, uint256 updatedAt)',
  'function claimFees() returns (bool)',
  'function claimOnBehalf(address claimingForAddress) returns (bool)',
  'function closeCurrentFeePeriod()',
  'function closeSecondary(uint256 allNetworksSnxBackedDebt, uint256 allNetworksDebtSharesSupply)',
  'function effectiveDebtRatioForPeriod(address account, uint256 period) view returns (uint256)',
  'function feePeriodDuration() view returns (uint256)',
  'function feesAvailable(address account) view returns (uint256, uint256)',
  'function feesByPeriod(address account) view returns (uint256[2][2] results)',
  'function getLastFeeWithdrawal(address _claimingAddress) view returns (uint256)',
  'function getPenaltyThresholdRatio() view returns (uint256)',
  'function importFeePeriod(uint256 feePeriodIndex, uint256 feePeriodId, uint256 startTime, uint256 feesToDistribute, uint256 feesClaimed, uint256 rewardsToDistribute, uint256 rewardsClaimed)',
  'function isFeesClaimable(address account) view returns (bool feesClaimable)',
  'function isResolverCached() view returns (bool)',
  'function issuanceRatio() view returns (uint256)',
  'function messageSender() view returns (address)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function proxy() view returns (address)',
  'function rebuildCache()',
  'function recentFeePeriods(uint256 index) view returns (uint64 feePeriodId, uint64 unused, uint64 startTime, uint256 feesToDistribute, uint256 feesClaimed, uint256 rewardsToDistribute, uint256 rewardsClaimed)',
  'function recordFeePaid(uint256 amount)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setMessageSender(address sender)',
  'function setProxy(address _proxy)',
  'function setRewardsToDistribute(uint256 amount)',
  'function setupExpiryTime() view returns (uint256)',
  'function targetThreshold() view returns (uint256)',
  'function totalFeesAvailable() view returns (uint256)',
  'function totalRewardsAvailable() view returns (uint256)',
];
