import {
  put, take, call, fork,
} from 'redux-saga/effects';

import bookTypes from './types';
import {
  bookCreateSuccess,
  bookRequestFailure,
  booksGetSuccess,
  bookDeleteSuccess,
  bookUpdateSuccess,
} from './actions';
import { normalizeRequestData } from '../../utils/requestHelpers/api';
import { booksRequestHelpers } from '../../utils/requestHelpers';
import { PushNotifications } from '../../utils/helpers';
import { SUCCESS_MESSAGES } from '../../constants';

function* addBook() {
  while (true) {
    try {
      const action = yield take(bookTypes.BOOK_CREATE_REQUEST);
      const res = normalizeRequestData(yield call(booksRequestHelpers.addBookRequest,
        action.payload));
      yield put(bookCreateSuccess({ ...res }));
      PushNotifications.success({ content: SUCCESS_MESSAGES.BOOK_SUCCESSFULLY_ADDED });
    } catch (e) {
      console.error(e);
      yield put(bookRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* getBooks() {
  while (true) {
    try {
      const action = yield take(bookTypes.BOOKS_GET_REQUEST);
      const res = normalizeRequestData(yield call(booksRequestHelpers.getBooksList,
        { ...action.payload }));
      yield put(booksGetSuccess({ ...res }));
    } catch (e) {
      console.log(e);
      yield put(bookRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* editBook() {
  while (true) {
    try {
      const action = yield take(bookTypes.BOOK_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(booksRequestHelpers.updateBookRequest,
        action.payload.formData, { id: action.payload.id }));
      yield put(bookUpdateSuccess({ ...res }));
      yield call(PushNotifications.success, { content: SUCCESS_MESSAGES.BOOK_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(bookRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* deleteBook() {
  while (true) {
    try {
      const action = yield take(bookTypes.BOOK_DELETE_REQUEST);
      const res = normalizeRequestData(yield call(booksRequestHelpers.deleteBookRequest,
        {}, { id: action.payload.id }));
      yield put(bookDeleteSuccess(({ ...res })));
      PushNotifications.success({ content: SUCCESS_MESSAGES.BOOK_SUCCESSFULLY_DELETED });
    } catch (e) {
      yield put(bookRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(addBook);
  yield fork(getBooks);
  yield fork(deleteBook);
  yield fork(editBook);
}
