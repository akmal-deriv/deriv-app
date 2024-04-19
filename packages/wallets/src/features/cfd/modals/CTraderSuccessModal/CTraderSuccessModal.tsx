import React from 'react';
import { useCtraderAccountsList } from '@deriv/api-v2';
import { ModalStepWrapper, ModalWrapper } from '../../../../components';
import { useModal } from '../../../../components/ModalProvider';
import useDevice from '../../../../hooks/useDevice';
import { THooks } from '../../../../types';
import { PlatformDetails } from '../../constants';
import { CFDSuccess } from '../../screens';
import { CTraderSuccessModalButtons } from './components';

type TCTraderSuccessModal = {
    displayBalance?: string;
    isDemo: boolean;
    walletCurrencyType: THooks.WalletAccountsList['wallet_currency_type'];
};

const CTraderSuccessModal = ({ displayBalance, isDemo, walletCurrencyType }: TCTraderSuccessModal) => {
    const { data: cTraderAccounts } = useCtraderAccountsList();
    const { isMobile } = useDevice();
    const { hide } = useModal();

    const description = isDemo
        ? `Let's practise trading with ${displayBalance} virtual funds.`
        : `Transfer funds from your ${walletCurrencyType} Wallet to your ${PlatformDetails.ctrader.title} account to start trading.`;

    if (isMobile) {
        return (
            <ModalStepWrapper
                renderFooter={() => <CTraderSuccessModalButtons hide={hide} isDemo={isDemo} />}
                title={' '}
            >
                <CFDSuccess
                    description={description}
                    displayBalance={cTraderAccounts?.find(account => account.login)?.formatted_balance}
                    marketType='all'
                    platform='ctrader'
                    renderButton={() => <CTraderSuccessModalButtons hide={hide} isDemo={isDemo} />}
                    title={`Your ${PlatformDetails.ctrader.title} ${isDemo ? 'demo' : ''} account is ready`}
                />
                ;
            </ModalStepWrapper>
        );
    }
    return (
        <ModalWrapper>
            <CFDSuccess
                description={description}
                displayBalance={cTraderAccounts?.find(account => account.login)?.formatted_balance}
                marketType='all'
                platform={PlatformDetails.ctrader.platform}
                renderButton={() => <CTraderSuccessModalButtons hide={hide} isDemo={isDemo} />}
                title={`Your ${PlatformDetails.ctrader.title} ${isDemo ? 'demo' : ''} account is ready`}
            />
        </ModalWrapper>
    );
};

export default CTraderSuccessModal;
