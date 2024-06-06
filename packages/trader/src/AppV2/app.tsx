import React from 'react';
import type { TWebSocket } from 'Types';
import initStore from 'App/init-store';
import type { TCoreStores } from '@deriv/stores/types';
import ModulesProvider from 'Stores/Providers/modules-providers';
import TraderProviders from '../trader-providers';
import BottomNav from './Components/BottomNav';
import Trade from './Containers/Trade';
import Markets from './Containers/Markets';
import Positions from './Containers/Positions';
import Menu from './Containers/Menu';
import { ReportsStoreProvider } from '../../../reports/src/Stores/useReportsStores';
import { NotificationsProvider } from '@deriv-com/quill-ui';
import 'Sass/app.scss';
import ContractDetails from './Containers/ContractDetails';
import '@deriv-com/quill-tokens/dist/quill.css';
import { useLocation } from 'react-router';
import Notifications from './Containers/Notifications';

type Apptypes = {
    passthrough: {
        root_store: TCoreStores;
        WS: TWebSocket;
    };
};

const App = ({ passthrough }: Apptypes) => {
    const root_store = initStore(passthrough.root_store, passthrough.WS);
    const [currentPageIdx, setCurrentPageIdx] = React.useState(0);

    React.useEffect(() => {
        return () => root_store.ui.setPromptHandler(false);
    }, [root_store]);
    const location = useLocation();
    return (
        <TraderProviders store={root_store}>
            <ReportsStoreProvider>
                <ModulesProvider store={root_store}>
                    <NotificationsProvider>
                        <Notifications />
                        {location.pathname.includes('/contract/') ? (
                            <ContractDetails />
                        ) : (
                            <BottomNav selectedItemIdx={currentPageIdx} setSelectedItemIdx={setCurrentPageIdx}>
                                <Trade />
                                <Markets />
                                <Positions />
                                <Menu />
                            </BottomNav>
                        )}
                    </NotificationsProvider>
                </ModulesProvider>
            </ReportsStoreProvider>
        </TraderProviders>
    );
};

export default App;
