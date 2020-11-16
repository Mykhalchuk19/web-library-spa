import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';

import userReducer, { userSaga } from './user';
import categoriesReducer, { categoriesSaga } from './categories';
import authReducer, { authSaga } from './auth';
import uiReducer from './ui';
// import postsReducer, { postsSaga } from './posts';

interface IHistory {
  history?: any,
}

const rootReducer = (history: IHistory): any => combineReducers({
  router: connectRouter(history as any),
  user: userReducer,
  ui: uiReducer,
  categories: categoriesReducer,
  auth: authReducer,
});

export const rootSaga = function* () {
  yield all([
    authSaga(),
    userSaga(),
    categoriesSaga(),
    // postsSaga(),
  ]);
};

export default rootReducer;
