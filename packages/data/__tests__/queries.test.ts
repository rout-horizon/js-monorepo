import { NetworkId } from '@synthetixio/contracts-interface';

import {
	parseIssued,
	parseRates,
	parseSynthetix,
	parseSynthExchangesL1,
	parseSynthExchangesL2,
	parseBurned,
	parseFeesClaimed,
	parseSnxPrice,
	parseDebtSnapshot,
	parseSnxHolder,
	parseShort,
	parseExchangeEntrySettleds,
	parseDailyIssued,
	parseDailyBurned,
	parseBinaryOptionsMarkets,
	parseBinaryOptionTransactions,
	parseDailyTotalActiveStakers,
	parseExchangeTotals,
} from '../queries';
import synthetixData, { calculateTimestampForPeriod, PERIOD_IN_HOURS } from '../src';
import { SynthetixData } from '../src/types';
import {
	issuedMock,
	burnedMock,
	snxPriceMock,
	ratesMock,
	feesClaimedMock,
	synthetixMock,
	synthExchangesMockL1,
	synthExchangesMockL2,
	debtSnapshotMock,
	snxHolderMock,
	shortsMock,
	exchangeEntrySettledsMock,
	binaryOptionsMarketsMock,
	binaryOptionsTransactionsMock,
	exchangeTotalsMock,
	dailyTotalActiveStakersMock,
} from '../__mocks__';
import { dailyBurnedMock } from '../__mocks__/dailyBurned';
import { dailyIssuedMock } from '../__mocks__/dailyIssued';

describe('@synthetixio/data tests', () => {
	const randomLargeSNXStaker = '0x042ed37d32b88ab6b1c2e7b8a400dcdc728050bc';
	const randomL2Staker = '0x000ad8f56d3408abe29466189612d1b7b19e4420';
	const randomL2StakerWithBurns = '0x9f6af0948f09c5c0256fb499c8527c976c003d69';
	const randomShortAccount = '0x864b81c40d8314d5c4289a14eb92f03b9f43b6bc';
	let snxData: SynthetixData;
	let snxDataOvm: SynthetixData;
	let snxDataKovanOvm: SynthetixData;
	const oneDayTimestamp = calculateTimestampForPeriod(PERIOD_IN_HOURS['ONE_DAY']);
	const oneMonthTimestamp = calculateTimestampForPeriod(PERIOD_IN_HOURS['ONE_MONTH']);

	beforeAll(() => {
		snxData = synthetixData({ networkId: NetworkId.Mainnet });
		snxDataOvm = synthetixData({ networkId: NetworkId['Mainnet-Ovm'] });
		snxDataKovanOvm = synthetixData({ networkId: NetworkId['Kovan-Ovm'] });
	});

	describe('synthetix meta data query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseSynthetix(synthetixMock.response);
			expect(synthetixMock.formatted).toEqual(parsedOutput);
		});

		test('should return synthetix meta data from l1', async () => {
			const synthetixInfo = await snxData.synthetix();
			expect(synthetixInfo!.id).toEqual('1');
			expect(Number(synthetixInfo!.issuers)).toBeGreaterThan(0);
			expect(Number(synthetixInfo!.snxHolders)).toBeGreaterThan(0);
		});

		test.skip('should return synthetix meta data from l2', async () => {
			const synthetixInfoL2 = await snxDataOvm.synthetix();
			expect(synthetixInfoL2!.id).toEqual('1');
			expect(Number(synthetixInfoL2!.issuers)).toBeGreaterThan(0);
			expect(Number(synthetixInfoL2!.snxHolders)).toBeGreaterThan(0);
		});
	});

	describe('shorts query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseShort(shortsMock.response);
			expect(shortsMock.formatted).toEqual(parsedOutput);
		});

		test('should return shorts from l1', async () => {
			const shorts = await snxData.shorts({
				max: 5,
				account: randomShortAccount,
			});
			expect(shorts![0].account).toEqual(randomShortAccount);
			expect(shorts![0].collateralLocked).toEqual('sUSD');
		});
	});

	describe('exchanges query', () => {
		test('should parse the response correctly for L1 and L2', () => {
			const parsedOutputL1 = parseSynthExchangesL1(synthExchangesMockL1.response);
			expect(synthExchangesMockL1.formatted).toEqual(parsedOutputL1);

			const parsedOutputL2 = parseSynthExchangesL2(synthExchangesMockL2.response);
			expect(synthExchangesMockL2.formatted).toEqual(parsedOutputL2);
		});

		test('should return exchanges from l1', async () => {
			const exchanges = await snxData.synthExchanges({
				minTimestamp: oneDayTimestamp,
			});
			expect(Number(exchanges![0].fromAmount)).toBeGreaterThan(0);
		});

		test('should return over 1000 exchanges from l1 with no max input and a long timeframe', async () => {
			jest.setTimeout(30000);
			const exchanges = await snxData.synthExchanges({
				minTimestamp: oneMonthTimestamp,
			});
			expect(Number(exchanges![0].fromAmount)).toBeGreaterThan(0);
			expect(exchanges!.length).toBeGreaterThan(1000);
		});

		test('should return exchagnes from kovan l2', async () => {
			const exchanges = await snxDataKovanOvm.synthExchanges({
				minTimestamp: oneMonthTimestamp,
			});
			expect(Number(exchanges![0].fromAmount)).toBeGreaterThan(0);
		});
	});

	describe('issued query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseIssued(issuedMock.response);
			expect(issuedMock.formatted).toEqual(parsedOutput);
		});

		test('should return issueds data from l1', async () => {
			const issuedInfo = await snxData.issued({ max: 1, account: randomLargeSNXStaker });
			expect(issuedInfo![0].account).toEqual(randomLargeSNXStaker);
		});

		test.skip('should return issueds data from l2', async () => {
			const issuedInfo = await snxDataOvm.issued({ max: 1, account: randomL2Staker });
			expect(issuedInfo![0].account).toEqual(randomL2Staker);
		});
	});

	describe('burned query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseBurned(burnedMock.response);
			expect(burnedMock.formatted).toEqual(parsedOutput);
		});

		test('should return burneds data from l1', async () => {
			const burnedInfo = await snxData.burned({ max: 1, account: randomLargeSNXStaker });
			expect(burnedInfo![0].account).toEqual(randomLargeSNXStaker);
		});

		test('should return burneds data from l1 at a specific block', async () => {
			const burnedInfo = await snxData.burned({
				max: 1,
				account: randomLargeSNXStaker,
				blockNumber: 12147638,
			});
			expect(burnedInfo![0].account).toEqual(randomLargeSNXStaker);
			/**
			 * taken from prod values which can be queried here: https://thegraph.com/explorer/subgraph/synthetixio-team/synthetix
			 * using this query
			 * {
			 *   burneds(block:{ number:12147638 }, orderBy:timestamp, orderDirection:desc, where: {account:"0x042ed37d32b88ab6b1c2e7b8a400dcdc728050bc"}) {
			 *     value id source timestamp gasPrice block
			 *   }
			 * }
			 */
			expect(burnedInfo![0].block).toEqual(12140772);
		});

		test.skip('should return burneds data from l2', async () => {
			const burnedInfo = await snxDataOvm.burned({ max: 1, account: randomL2StakerWithBurns });
			expect(burnedInfo![0].account).toEqual(randomL2StakerWithBurns);
		});
	});

	describe('dailyIssued query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseDailyIssued(dailyIssuedMock.response);
			expect(dailyIssuedMock.formatted).toEqual(parsedOutput);
		});

		test('should return issueds data from l1', async () => {
			await snxData.dailyIssued({ max: 1 });
		});

		test.skip('should return issueds data from l2', async () => {
			await snxDataOvm.dailyIssued({ max: 1 });
		});
	});

	describe('dailyBurned query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseDailyBurned(dailyBurnedMock.response);
			expect(dailyBurnedMock.formatted).toEqual(parsedOutput);
		});

		test('should return issueds data from l1', async () => {
			await snxData.dailyBurned({ max: 1 });
		});

		test.skip('should return issueds data from l2', async () => {
			await snxDataOvm.dailyBurned({ max: 1 });
		});
	});

	describe('feesClaimed query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseFeesClaimed(feesClaimedMock.response);
			expect(feesClaimedMock.formatted).toEqual(parsedOutput);
		});

		test('should return feesClaimeds data from l1', async () => {
			const feesClaimedInfo = await snxData.feesClaimed({ max: 1, account: randomLargeSNXStaker });
			expect(feesClaimedInfo![0].account).toEqual(randomLargeSNXStaker);
		});

		test.skip('should return feesClaimeds data from l2', async () => {
			const feesClaimedInfo = await snxDataOvm.feesClaimed({ max: 1, account: randomL2Staker });
			expect(feesClaimedInfo![0].account).toEqual(randomL2Staker);
		});
	});

	describe('snxPrices query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseSnxPrice(snxPriceMock.response);
			expect(snxPriceMock.formatted).toEqual(parsedOutput);
		});

		test('should return snxPrices data from l1', async () => {
			const snxPricesInfo = await snxData.snxPrices({ max: 5, timeSeries: '1d' });
			expect(snxPricesInfo!.length).toEqual(5);
			expect(Number(snxPricesInfo![0].id)).toBeGreaterThan(0);
			expect(Number(snxPricesInfo![0].averagePrice)).toBeGreaterThan(0);
		});

		test.skip('should return snxPrices data from l2', async () => {
			const snxPricesInfo = await snxDataOvm.snxPrices({ max: 5, timeSeries: '1d' });
			expect(snxPricesInfo!.length).toEqual(5);
			expect(Number(snxPricesInfo![0].id)).toBeGreaterThan(0);
			expect(Number(snxPricesInfo![0].averagePrice)).toBeGreaterThan(0);
		});
	});

	describe('rate updates query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseRates(ratesMock.response);
			expect(ratesMock.formatted).toEqual(parsedOutput);
		});

		test('should return rateUpdates data from l1', async () => {
			const l1RateUpdatesInfo = await snxData.rateUpdates({
				max: 5,
				synth: 'SNX',
				minTimestamp: oneDayTimestamp,
			});
			expect(l1RateUpdatesInfo![0].synth).toEqual('SNX');
			expect(l1RateUpdatesInfo!.length).toBeGreaterThan(0);
		});

		test('should return over 1000 rateUpdates data from l1 with no max input and a long timeframe', async () => {
			jest.setTimeout(30000);
			const l1RateUpdatesAnnualInfo = await snxData.rateUpdates({
				synth: 'SNX',
				minTimestamp: oneMonthTimestamp,
			});
			expect(l1RateUpdatesAnnualInfo![0].synth).toEqual('SNX');
			expect(l1RateUpdatesAnnualInfo!.length).toBeGreaterThan(1000);
		});

		test('should return rateUpdates data from l2', async () => {
			const l2RateUpdatesInfo = await snxDataOvm.rateUpdates({
				max: 5,
				synth: 'SNX',
				minTimestamp: oneMonthTimestamp,
			});
			expect(l2RateUpdatesInfo![0].synth).toEqual('SNX');
			expect(l2RateUpdatesInfo!.length).toBeGreaterThan(0);
		});

		test('should return rateUpdates data from l2 kovan', async () => {
			const l2RateUpdatesInfo = await snxDataKovanOvm.rateUpdates({
				max: 5,
				synth: 'SNX',
				minTimestamp: oneMonthTimestamp,
			});
			expect(l2RateUpdatesInfo![0].synth).toEqual('SNX');
			expect(l2RateUpdatesInfo!.length).toBeGreaterThan(0);
		});
	});

	describe('debtSnapshots query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseDebtSnapshot(debtSnapshotMock.response);
			expect(debtSnapshotMock.formatted).toEqual(parsedOutput);
		});

		test('should return debtSnapshots data from l1', async () => {
			const debtSnapshotInfo = await snxData.debtSnapshots({
				max: 5,
				account: randomLargeSNXStaker,
			});
			expect(debtSnapshotInfo![0].account).toEqual(randomLargeSNXStaker);
			expect(Number(debtSnapshotInfo![0].collateral)).toBeGreaterThan(0);
			expect(debtSnapshotInfo!.length).toEqual(5);
		});

		test.skip('should return debtSnapshots data from l2', async () => {
			const debtSnapshotInfo = await snxDataOvm.debtSnapshots({
				max: 2,
				account: randomL2Staker,
			});
			expect(debtSnapshotInfo![0].account).toEqual(randomL2Staker);
			expect(Number(debtSnapshotInfo![0].collateral)).toBeGreaterThan(0);
			expect(debtSnapshotInfo!.length).toEqual(2);
		});
	});

	describe('snxHolders query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseSnxHolder(snxHolderMock.response);
			expect(snxHolderMock.formatted).toEqual(parsedOutput);
		});

		test('should return snxHolders data from l1', async () => {
			const snxHoldersInfo = await snxData.snxHolders({
				max: 5,
			});
			expect(Number(snxHoldersInfo![0].collateral)).toBeGreaterThan(0);
			expect(Number(snxHoldersInfo![0].balanceOf)).toBeGreaterThan(0);
			expect(snxHoldersInfo!.length).toEqual(5);
		});

		test.skip('should return snxHolders data from l2', async () => {
			const snxHoldersInfo = await snxDataOvm.snxHolders({
				max: 5,
			});
			expect(Number(snxHoldersInfo![0].collateral)).toBeGreaterThan(0);
			expect(Number(snxHoldersInfo![0].balanceOf)).toBeGreaterThan(0);
			expect(snxHoldersInfo!.length).toEqual(5);
		});
	});

	describe('exchangeEntrySettleds query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseExchangeEntrySettleds(exchangeEntrySettledsMock.response);
			expect(exchangeEntrySettledsMock.formatted).toEqual(parsedOutput);
		});

		test('should accept fiter options', async () => {
			const exchangeEntrySettleds = await snxData.exchangeEntrySettleds({
				from: '0xe51b3d74b9e8203b5e817e691a5d0d7f00898fbd',
				minExchangeTimestamp: 1617529672,
				maxExchangeTimestamp: 1617529672,
			});
			expect(exchangeEntrySettleds.length).toEqual(1);
			const exchangeEntrySettled = exchangeEntrySettleds[0]!;
			expect(exchangeEntrySettled.from).toEqual('0xe51b3d74b9e8203b5e817e691a5d0d7f00898fbd');
			expect(exchangeEntrySettled.reclaim).toEqual('150.57812586144');
			expect(exchangeEntrySettled.rebate).toEqual('0.0');
		});
	});

	describe('optionMarkets query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseBinaryOptionsMarkets(binaryOptionsMarketsMock.response);
			expect(binaryOptionsMarketsMock.formatted).toEqual(parsedOutput);
		});

		test('should accept fiter options', async () => {
			const optionMarkets = await snxData.binaryOptionsMarkets({
				creator: '0x13dc08f5ddbcbfdf6ebc04c909c3052a2aa7a111',
				isOpen: false,
				minTimestamp: 1593564557,
				maxTimestamp: 1593564559,
			});
			expect(optionMarkets.length).toEqual(1);
			const optionMarket = optionMarkets[0]!;
			expect(optionMarket.address).toEqual('0x05d629dfcbb91e93c7045b478660efc62baed009');
		});
	});

	describe('optionTransactions query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseBinaryOptionTransactions(binaryOptionsTransactionsMock.response);
			expect(binaryOptionsTransactionsMock.formatted).toEqual(parsedOutput);
		});

		test('should accept fiter options', async () => {
			const optionTransactions = await snxData.binaryOptionsTransactions({
				market: '0x4c7be4d2d4970cbbbf23bf86f7effe58327791b7',
				account: '0x37480ca37666bc8584f2ed92361bdc71b1f4aade',
			});
			expect(optionTransactions.length).toBeGreaterThanOrEqual(1);
			const optionTransaction = optionTransactions[0]!;
			expect(optionTransaction.account).toEqual('0x37480ca37666bc8584f2ed92361bdc71b1f4aade');
		});
	});

	describe('exchangeTotals query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseExchangeTotals(exchangeTotalsMock.response);
			expect(exchangeTotalsMock.formatted).toEqual(parsedOutput);
		});

		test('should accept fiter options', async () => {
			const totals = await snxData.exchangeTotals({
				timeSeries: '15m',
				max: 100,
			});
			expect(totals.length).toBeGreaterThanOrEqual(1);
			const total = totals[0]!;
			expect(total.id).toBeGreaterThanOrEqual(1);
		});
	});

	describe('dailyTotalActiveStakers query', () => {
		test('should parse the response correctly', () => {
			const parsedOutput = parseDailyTotalActiveStakers(dailyTotalActiveStakersMock.response);
			expect(dailyTotalActiveStakersMock.formatted).toEqual(parsedOutput);
		});

		test('should accept fiter options', async () => {
			const totals = await snxData.dailyTotalActiveStakers({ max: 100 });
			expect(totals.length).toBeGreaterThanOrEqual(1);
			const total = totals[0]!;
			expect(total.id).toBeGreaterThanOrEqual(1);
		});
	});
});
