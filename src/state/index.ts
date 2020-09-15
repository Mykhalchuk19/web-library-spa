import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';

import userReducer, { userSaga } from './user';
// import categoriesReducer, { categoriesSaga } from './categories';
// import postsReducer, { postsSaga } from './posts';

interface IHistory {
  history?: any,
}

const rootReducer = (history: IHistory) => combineReducers({
  router: connectRouter(history as any),
  user: userReducer,
});

export const rootSaga = function* () {
  yield all([
    userSaga(),
    // categoriesSaga(),
    // postsSaga(),
  ]);
};

export default rootReducer;
