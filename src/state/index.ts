import {
  CombinedState, combineReducers, Reducer,
} from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter, LocationChangeAction } from 'connected-react-router';
import { History } from 'history';

import usersReducer, { usersSaga } from './users';
import categoriesReducer, { categoriesSaga } from './categories';
import authReducer, { authSaga } from './auth';
import uiReducer from './ui';
import booksReducer, { booksSaga } from './books';
import authorsReducer, { authorsSaga } from './authors';
import { TStore } from './storeInterfaces';

const rootReducer = (
  history: History,
): Reducer<CombinedState<TStore>, LocationChangeAction> => combineReducers({
  router: connectRouter(history as History),
  users: usersReducer,
  ui: uiReducer,
  categories: categoriesReducer,
  auth: authReducer,
  books: booksReducer,
  authors: authorsReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,func-names
export const rootSaga = function* () {
  yield all([
    authSaga(),
    usersSaga(),
    categoriesSaga(),
    booksSaga(),
    authorsSaga(),
  ]);
};

export default rootReducer;
