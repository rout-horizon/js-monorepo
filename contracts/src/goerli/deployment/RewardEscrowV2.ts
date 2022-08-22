export const name = 'RewardEscrowV2';
export const address = '0xDA99793491559d22e2C8c216Bec3Ea1ACb4F90B3';
export const source = 'RewardEscrowV2';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AccountMerged(address indexed accountToMerge, address destinationAddress, uint256 escrowAmountMerged, uint256[] entryIDs, uint256 time)',
  'event AccountMergingDurationUpdated(uint256 newDuration)',
  'event AccountMergingStarted(uint256 time, uint256 endTime)',
  'event BurnedForMigrationToL2(address indexed account, uint256[] entryIDs, uint256 escrowedAmountMigrated, uint256 time)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event ImportedVestingEntry(address indexed account, uint256 entryID, uint256 escrowAmount, uint256 endTime)',
  'event ImportedVestingSchedule(address indexed account, uint256 time, uint256 escrowAmount)',
  'event MaxAccountMergingDurationUpdated(uint256 newDuration)',
  'event MaxEscrowDurationUpdated(uint256 newDuration)',
  'event MigrateEntriesThresholdAmountUpdated(uint256 newAmount)',
  'event MigratedAccountEscrow(address indexed account, uint256 escrowedAmount, uint256 vestedAmount, uint256 time)',
  'event NominateAccountToMerge(address indexed account, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event Vested(address indexed beneficiary, uint256 time, uint256 value)',
  'event VestingEntryCreated(address indexed beneficiary, uint256 time, uint256 value, uint256 duration, uint256 entryID)',
  'function acceptOwnership()',
  'function accountMergingDuration() view returns (uint256)',
  'function accountMergingIsOpen() view returns (bool)',
  'function accountMergingStartTime() view returns (uint256)',
  'function accountVestingEntryIDs(address, uint256) view returns (uint256)',
  'function appendVestingEntry(address account, uint256 quantity, uint256 duration)',
  'function balanceOf(address account) view returns (uint256)',
  'function burnForMigration(address account, uint256[] entryIDs) returns (uint256 escrowedAccountBalance, tuple(uint64 endTime, uint256 escrowAmount)[] vestingEntries)',
  'function createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)',
  'function getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])',
  'function getVestingEntry(address account, uint256 entryID) view returns (uint64 endTime, uint256 escrowAmount)',
  'function getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)',
  'function getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256 total)',
  'function getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (tuple(uint64 endTime, uint256 escrowAmount, uint256 entryID)[])',
  'function importVestingEntries(address, uint256, tuple(uint64 endTime, uint256 escrowAmount)[])',
  'function importVestingSchedule(address[] accounts, uint256[] escrowAmounts)',
  'function isResolverCached() view returns (bool)',
  'function maxAccountMergingDuration() view returns (uint256)',
  'function max_duration() view returns (uint256)',
  'function mergeAccount(address accountToMerge, uint256[] entryIDs)',
  'function migrateAccountEscrowBalances(address[] accounts, uint256[] escrowBalances, uint256[] vestedBalances)',
  'function migrateEntriesThresholdAmount() view returns (uint256)',
  'function migrateVestingSchedule(address addressToMigrate)',
  'function nextEntryId() view returns (uint256)',
  'function nominateAccountToMerge(address account)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function nominatedReceiver(address) view returns (address)',
  'function numVestingEntries(address account) view returns (uint256)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setAccountMergingDuration(uint256 duration)',
  'function setMaxAccountMergingWindow(uint256 duration)',
  'function setMaxEscrowDuration(uint256 duration)',
  'function setMigrateEntriesThresholdAmount(uint256 amount)',
  'function setupExpiryTime() view returns (uint256)',
  'function startMergingWindow()',
  'function totalBalancePendingMigration(address) view returns (uint256)',
  'function totalEscrowedAccountBalance(address) view returns (uint256)',
  'function totalEscrowedBalance() view returns (uint256)',
  'function totalVestedAccountBalance(address) view returns (uint256)',
  'function vest(uint256[] entryIDs)',
  'function vestingSchedules(address, uint256) view returns (uint64 endTime, uint256 escrowAmount)',
];
