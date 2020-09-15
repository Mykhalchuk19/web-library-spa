import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './configureStore';
import { Routing } from './components';
import './utils/styles/style.sass';

const App: React.FC = (props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedRouter history={history}>
        <Routing />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
