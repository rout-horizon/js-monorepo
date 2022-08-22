export const name = 'FuturesMarketDOGE';
export const address = '0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf';
export const source = 'FuturesMarket';
export const abi = [
  'constructor(address _resolver, bytes32 _baseAsset, bytes32 _marketKey)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event FundingRecomputed(int256 funding, uint256 index, uint256 timestamp)',
  'event FuturesTracking(bytes32 indexed trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)',
  'event MarginTransferred(address indexed account, int256 marginDelta)',
  'event NextPriceOrderRemoved(address indexed account, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)',
  'event NextPriceOrderSubmitted(address indexed account, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)',
  'event PositionLiquidated(uint256 indexed id, address indexed account, address indexed liquidator, int256 size, uint256 price, uint256 fee)',
  'event PositionModified(uint256 indexed id, address indexed account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)',
  'function accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)',
  'function accruedFunding(address account) view returns (int256 funding, bool invalid)',
  'function assetPrice() view returns (uint256 price, bool invalid)',
  'function baseAsset() view returns (bytes32)',
  'function canLiquidate(address account) view returns (bool)',
  'function cancelNextPriceOrder(address account)',
  'function closePosition()',
  'function closePositionWithTracking(bytes32 trackingCode)',
  'function currentFundingRate() view returns (int256)',
  'function executeNextPriceOrder(address account)',
  'function fundingLastRecomputed() view returns (uint32)',
  'function fundingSequence(uint256) view returns (int128)',
  'function fundingSequenceLength() view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function liquidatePosition(address account)',
  'function liquidationFee(address account) view returns (uint256)',
  'function liquidationPrice(address account) view returns (uint256 price, bool invalid)',
  'function marketDebt() view returns (uint256 debt, bool invalid)',
  'function marketKey() view returns (bytes32)',
  'function marketSize() view returns (uint128)',
  'function marketSizes() view returns (uint256 long, uint256 short)',
  'function marketSkew() view returns (int128)',
  'function modifyPosition(int256 sizeDelta)',
  'function modifyPositionWithTracking(int256 sizeDelta, bytes32 trackingCode)',
  'function nextPriceOrders(address) view returns (int128 sizeDelta, uint128 targetRoundId, uint128 commitDeposit, uint128 keeperDeposit, bytes32 trackingCode)',
  'function notionalValue(address account) view returns (int256 value, bool invalid)',
  'function orderFee(int256 sizeDelta) view returns (uint256 fee, bool invalid)',
  'function positions(address) view returns (uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size)',
  'function postTradeDetails(int256 sizeDelta, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, uint8 status)',
  'function profitLoss(address account) view returns (int256 pnl, bool invalid)',
  'function rebuildCache()',
  'function recomputeFunding() returns (uint256 lastIndex)',
  'function remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function submitNextPriceOrder(int256 sizeDelta)',
  'function submitNextPriceOrderWithTracking(int256 sizeDelta, bytes32 trackingCode)',
  'function transferMargin(int256 marginDelta)',
  'function unrecordedFunding() view returns (int256 funding, bool invalid)',
  'function withdrawAllMargin()',
];
