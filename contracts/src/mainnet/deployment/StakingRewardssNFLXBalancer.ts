export const name = 'StakingRewardssNFLXBalancer';
export const address = '0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2';
export const source = 'StakingRewards';
export const abi = [
  'constructor(address _owner, address _rewardsDistribution, address _rewardsToken, address _stakingToken)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event PauseChanged(bool isPaused)',
  'event Recovered(address token, uint256 amount)',
  'event RewardAdded(uint256 reward)',
  'event RewardPaid(address indexed user, uint256 reward)',
  'event RewardsDurationUpdated(uint256 newDuration)',
  'event Staked(address indexed user, uint256 amount)',
  'event Withdrawn(address indexed user, uint256 amount)',
  'function acceptOwnership()',
  'function balanceOf(address account) view returns (uint256)',
  'function earned(address account) view returns (uint256)',
  'function exit()',
  'function getReward()',
  'function getRewardForDuration() view returns (uint256)',
  'function lastPauseTime() view returns (uint256)',
  'function lastTimeRewardApplicable() view returns (uint256)',
  'function lastUpdateTime() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function notifyRewardAmount(uint256 reward)',
  'function owner() view returns (address)',
  'function paused() view returns (bool)',
  'function periodFinish() view returns (uint256)',
  'function recoverERC20(address tokenAddress, uint256 tokenAmount)',
  'function rewardPerToken() view returns (uint256)',
  'function rewardPerTokenStored() view returns (uint256)',
  'function rewardRate() view returns (uint256)',
  'function rewards(address) view returns (uint256)',
  'function rewardsDistribution() view returns (address)',
  'function rewardsDuration() view returns (uint256)',
  'function rewardsToken() view returns (address)',
  'function setPaused(bool _paused)',
  'function setRewardsDistribution(address _rewardsDistribution)',
  'function setRewardsDuration(uint256 _rewardsDuration)',
  'function stake(uint256 amount)',
  'function stakingToken() view returns (address)',
  'function totalSupply() view returns (uint256)',
  'function updatePeriodFinish(uint256 timestamp)',
  'function userRewardPerTokenPaid(address) view returns (uint256)',
  'function withdraw(uint256 amount)',
];
