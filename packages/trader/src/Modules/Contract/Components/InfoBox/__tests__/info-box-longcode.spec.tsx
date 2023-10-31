import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockStore, StoreProvider } from '@deriv/stores';
import InfoBoxLongcode, { TInfoBoxLongcode } from '../info-box-longcode';

const test_longcode_short = 'test longcode';
const test_longcode_long =
    'test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode';
const test_longcode_mobile =
    'test longcode test longcode test longcode test longcode test longcode test longcode test longcode test longcode';
const mocked_props = {
    contract_info: { longcode: test_longcode_short, contract_type: 'test' },
};
jest.mock('@deriv/components', () => ({
    ...jest.requireActual('@deriv/components'),
    Icon: jest.fn(() => 'MockedIcon'),
}));

describe('InfoBoxLongcode', () => {
    const MockInfoBoxLongcode = (mocked_props: TInfoBoxLongcode) => {
        const mocked_store = mockStore({
            ui: {
                is_mobile: false,
            },
        });
        return (
            <StoreProvider store={mocked_store}>
                <InfoBoxLongcode {...mocked_props} />
            </StoreProvider>
        );
    };
    it('should render InfoBoxLongcode component', () => {
        render(<MockInfoBoxLongcode {...mocked_props} />);

        expect(screen.getByText('MockedIcon')).toBeInTheDocument();
        expect(screen.getByText(test_longcode_short)).toBeInTheDocument();
    });
    it('should not render specific text if longcode is less then 150 symbols', () => {
        render(<MockInfoBoxLongcode {...mocked_props} />);

        expect(screen.queryByText(/View more/i)).not.toBeInTheDocument();
    });
    it('should render specific text "View more" if longcode is more then 150 symbols', () => {
        mocked_props.contract_info.longcode = test_longcode_long;
        render(<MockInfoBoxLongcode {...mocked_props} />);

        expect(screen.getByText(/View more/i)).toBeInTheDocument();
    });
    it('should render specific text "View less" if longcode is more then 150 symbols and user click on expand button', () => {
        render(<MockInfoBoxLongcode {...mocked_props} />);
        userEvent.click(screen.getByText(/View more/i));

        expect(screen.queryByText(/View more/i)).not.toBeInTheDocument();
        expect(screen.getByText(/View less/i)).toBeInTheDocument();
    });
    it('should render specific text "View more" if longcode is more then 47 symbols for mobile', () => {
        const mocked_store = mockStore({
            ui: {
                is_mobile: true,
            },
        });
        mocked_props.contract_info.longcode = test_longcode_mobile;
        render(
            <StoreProvider store={mocked_store}>
                <InfoBoxLongcode {...mocked_props} />
            </StoreProvider>
        );

        expect(screen.getByText(/View more/i)).toBeInTheDocument();
    });
    it('should render modal if longcode is more then 47 symbols for mobile and user clicks on "View more" button', () => {
        const mocked_store = mockStore({
            ui: {
                is_mobile: true,
            },
        });
        const modal_root_el = document.createElement('div');
        modal_root_el.setAttribute('id', 'modal_root');
        document.body.appendChild(modal_root_el);
        mocked_props.contract_info.longcode = test_longcode_mobile;
        render(
            <StoreProvider store={mocked_store}>
                <InfoBoxLongcode {...mocked_props} />
            </StoreProvider>
        );
        userEvent.click(screen.getByText(/View more/i));

        expect(screen.getByText(/View more/i)).toBeInTheDocument();
        expect(screen.getByText(/Trade info/i)).toBeInTheDocument();
        expect(screen.getByText(/Ok/i)).toBeInTheDocument();

        document.body.removeChild(modal_root_el);
    });
});
