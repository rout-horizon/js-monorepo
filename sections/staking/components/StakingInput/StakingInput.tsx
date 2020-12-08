import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Img, { Svg } from 'react-optimized-image';
import { useTranslation } from 'react-i18next';

import sUSDIcon from '@synthetixio/assets/synths/sUSD.svg';
import NavigationBack from 'assets/svg/app/navigation-back.svg';

import GasSelector from 'components/GasSelector';
import {
	StyledCTA,
	InputBox,
	DataContainer,
	DataRow,
	RowTitle,
	RowValue,
	StyledInput,
} from 'sections/staking/components/common';

import { ActionInProgress, ActionCompleted } from 'sections/staking/components/TxSent';
import TxConfirmationModal from 'sections/shared/modals/TxConfirmationModal';

import {
	ModalContent,
	ModalItem,
	ModalItemTitle,
	ModalItemText,
	ErrorMessage,
} from 'styles/common';
import { InputContainer, InputLocked } from '../common';
import { Transaction } from 'constants/network';
import { formatCurrency } from 'utils/formatters/number';
import { getStakingAmount } from '../helper';
import { CRYPTO_CURRENCY_MAP, SYNTHS_MAP } from 'constants/currency';
import useStakingCalculations from 'sections/staking/hooks/useStakingCalculations';
import BigNumber from 'bignumber.js';

type StakingInputProps = {
	onSubmit: any;
	inputValue: BigNumber;
	isLocked: boolean;
	isMint: boolean;
	onBack: Function;
	error: string | null;
	txModalOpen: boolean;
	setTxModalOpen: Function;
	gasLimitEstimate: number | null;
	setGasPrice: Function;
	onInputChange: Function;
	txHash: string | null;
	transactionState: Transaction;
	setTransactionState: (tx: Transaction) => void;
};

const StakingInput: React.FC<StakingInputProps> = ({
	onSubmit,
	inputValue,
	isLocked,
	isMint,
	onBack,
	error,
	txModalOpen,
	setTxModalOpen,
	gasLimitEstimate,
	setGasPrice,
	onInputChange,
	txHash,
	transactionState,
	setTransactionState,
}) => {
	const { targetCRatio, SNXRate } = useStakingCalculations();
	const [stakingCurrencyKey] = useState<string>(CRYPTO_CURRENCY_MAP.SNX);
	const [synthCurrencyKey] = useState<string>(SYNTHS_MAP.sUSD);

	const { t } = useTranslation();

	/**
	 * Given the amount to mint, returns the equivalent collateral needed for stake.
	 * @param mintInput Amount to mint
	 */
	const stakeInfo = (mintInput: BigNumber) =>
		formatCurrency(
			stakingCurrencyKey,
			getStakingAmount(targetCRatio, mintInput.isNaN() ? 0 : mintInput, SNXRate),
			{
				currencyKey: stakingCurrencyKey,
			}
		);
	const formattedInput = formatCurrency(synthCurrencyKey, inputValue, {
		currencyKey: synthCurrencyKey,
	});

	const returnButtonStates = useMemo(() => {
		if (error) {
			return (
				<StyledCTA variant="primary" size="lg" disabled={true}>
					{isMint
						? t('staking.actions.mint.action.insufficient')
						: t('staking.actions.burn.action.insufficient')}
				</StyledCTA>
			);
		} else if (inputValue.toString().length === 0) {
			return (
				<StyledCTA variant="primary" size="lg" disabled={true}>
					{isMint ? t('staking.actions.mint.action.empty') : t('staking.actions.burn.action.empty')}
				</StyledCTA>
			);
		} else {
			return (
				<StyledCTA
					onClick={() => onSubmit()}
					variant="primary"
					size="lg"
					disabled={transactionState !== Transaction.PRESUBMIT}
				>
					{isMint ? t('staking.actions.mint.action.mint') : t('staking.actions.burn.action.burn')}
				</StyledCTA>
			);
		}
	}, [inputValue, error, transactionState]);

	if (transactionState === Transaction.WAITING) {
		return (
			<ActionInProgress
				isMint={isMint}
				from={stakeInfo(inputValue)}
				to={formattedInput}
				hash={txHash as string}
			/>
		);
	}

	if (transactionState === Transaction.SUCCESS) {
		return <ActionCompleted isMint={isMint} setTransactionState={setTransactionState} />;
	}

	return (
		<>
			<InputContainer>
				<IconContainer onClick={() => onBack(null)}>
					<Svg src={NavigationBack} />
				</IconContainer>
				<InputBox>
					<Img width={50} height={50} src={sUSDIcon} />
					{isLocked ? (
						<InputLocked>{formattedInput}</InputLocked>
					) : (
						<StyledInput placeholder="0" onChange={(e) => onInputChange(e.target.value)} />
					)}
				</InputBox>
				<DataContainer>
					<DataRow>
						<RowTitle>
							{isMint
								? t('staking.actions.mint.info.staking')
								: t('staking.actions.burn.info.unstaking')}
						</RowTitle>
						<RowValue>{stakeInfo(inputValue)}</RowValue>
					</DataRow>
					<DataRow>
						<GasSelector gasLimitEstimate={gasLimitEstimate} setGasPrice={setGasPrice} />
					</DataRow>
				</DataContainer>
			</InputContainer>
			{returnButtonStates}
			<ErrorMessage>{error}</ErrorMessage>
			{txModalOpen && (
				<TxConfirmationModal
					onDismiss={() => setTxModalOpen(false)}
					txError={error}
					attemptRetry={() => onSubmit()}
					content={
						<ModalContent>
							<ModalItem>
								<ModalItemTitle>
									{isMint
										? t('modals.confirm-transaction.minting.from')
										: t('modals.confirm-transaction.burning.from')}
								</ModalItemTitle>
								<ModalItemText>{stakeInfo(inputValue)}</ModalItemText>
							</ModalItem>
							<ModalItem>
								<ModalItemTitle>
									{isMint
										? t('modals.confirm-transaction.minting.to')
										: t('modals.confirm-transaction.burning.to')}
								</ModalItemTitle>
								<ModalItemText>{formattedInput}</ModalItemText>
							</ModalItem>
						</ModalContent>
					}
				/>
			)}
		</>
	);
};

const IconContainer = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	cursor: pointer;
`;

export default StakingInput;
