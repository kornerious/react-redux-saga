import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as StoreProvider } from 'react-redux';

import configureStore from 'app/configureStore';
import AppNavigation from './App.nav';

import './styles/global.scss';

const { store,  history } = configureStore();

const App = () => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
        <AppNavigation />
    </ConnectedRouter>
  </StoreProvider>
);

export { store};

export default App;
