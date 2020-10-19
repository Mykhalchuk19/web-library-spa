import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { I18nextProvider } from 'react-i18next';

import { store, persistor, history } from './configureStore';
import { Routing } from './components';
import './utils/styles/style.sass';
import i18n from './utils/i18next/config';

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ConnectedRouter history={history}>
          <Routing />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </I18nextProvider>
);

export default App;
