import {
  createStore, applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer, { rootSaga } from './state';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history as any));

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store as any);

export {
  store,
  persistor,
  history,
};
