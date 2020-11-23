import {
  CombinedState, combineReducers, Reducer,
} from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter, LocationChangeAction } from 'connected-react-router';
import { History } from 'history';

import userReducer, { userSaga } from './user';
import categoriesReducer, { categoriesSaga } from './categories';
import authReducer, { authSaga } from './auth';
import uiReducer from './ui';
import booksReducer, { booksSaga } from './books';
import { TStore } from './storeInterfaces';

const rootReducer = (
  history: History,
): Reducer<CombinedState<TStore>, LocationChangeAction> => combineReducers({
  router: connectRouter(history as History),
  user: userReducer,
  ui: uiReducer,
  categories: categoriesReducer,
  auth: authReducer,
  books: booksReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,func-names
export const rootSaga = function* () {
  yield all([
    authSaga(),
    userSaga(),
    categoriesSaga(),
    booksSaga(),
  ]);
};

export default rootReducer;
