import {
  put, take, call, fork,
} from 'redux-saga/effects';

import bookTypes from './types';
import {
  authorCreateSuccess,
  authorRequestFailure,
  authorsGetSuccess,
  authorDeleteSuccess,
  authorUpdateSuccess,
} from './actions';
import { normalizeRequestData } from '../../utils/requestHelpers/api';
import { authorsRequestHelpers } from '../../utils/requestHelpers';
import { PushNotifications } from '../../utils/helpers';
import { SUCCESS_MESSAGES } from '../../constants';

function* createAuthor() {
  while (true) {
    try {
      const action = yield take(bookTypes.AUTHOR_CREATE_REQUEST);
      const res = normalizeRequestData(yield call(authorsRequestHelpers.createAuthorRequest,
        action.payload));
      yield put(authorCreateSuccess({ ...res }));
      PushNotifications.success({ content: SUCCESS_MESSAGES.AUTHOR_SUCCESSFULLY_CREATED });
    } catch (e) {
      console.error(e);
      yield put(authorRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* getAuthors() {
  while (true) {
    try {
      const action = yield take(bookTypes.AUTHORS_GET_REQUEST);
      const res = normalizeRequestData(yield call(authorsRequestHelpers.getAuthorsList,
        { ...action.payload }));
      yield put(authorsGetSuccess({ ...res }));
    } catch (e) {
      console.log(e);
      yield put(authorRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* updateAuthor() {
  while (true) {
    try {
      const action = yield take(bookTypes.AUTHOR_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(authorsRequestHelpers.updateAuthorRequest,
        { ...action.payload }, { id: action.payload.id }));
      yield put(authorUpdateSuccess({ ...res }));
      yield call(PushNotifications.success, { content: SUCCESS_MESSAGES.AUTHOR_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(authorRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* deleteAuthor() {
  while (true) {
    try {
      const action = yield take(bookTypes.AUTHOR_DELETE_REQUEST);
      const res = normalizeRequestData(yield call(authorsRequestHelpers.deleteAuthorRequest,
        {}, { id: action.payload.id }));
      yield put(authorDeleteSuccess(({ ...res })));
      PushNotifications.success({ content: SUCCESS_MESSAGES.AUTHOR_SUCCESSFULLY_DELETED });
    } catch (e) {
      yield put(authorRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(createAuthor);
  yield fork(getAuthors);
  yield fork(deleteAuthor);
  yield fork(updateAuthor);
}
