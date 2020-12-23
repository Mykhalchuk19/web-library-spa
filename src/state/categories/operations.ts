import {
  put, take, call, fork,
} from 'redux-saga/effects';
import categoriesTypes from './types';
import {
  categoryCreateSuccess,
  categoriesGetSuccess,
  categoryUpdateSuccess,
  categoryDeleteSuccess,
  categoryRequestFailure,
} from './actions';
import { PushNotifications } from '../../utils/helpers';
import { categoriesRequestHelpers } from '../../utils/requestHelpers';
import { SUCCESS_MESSAGES } from '../../constants';
import { normalizeRequestData } from '../../utils/requestHelpers/api';

function* createCategory() {
  while (true) {
    try {
      const action = yield take(categoriesTypes.CATEGORY_CREATE_REQUEST);
      const res = normalizeRequestData(yield call(categoriesRequestHelpers.createCategoryRequest,
        { ...action.payload }));
      yield put(categoryCreateSuccess({ ...res }));
      PushNotifications.success({ content: SUCCESS_MESSAGES.CATEGORY_SUCCESSFULLY_CREATED });
    } catch (e) {
      console.log(e);
      yield put(categoryRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* getCategoryList() {
  while (true) {
    try {
      const action = yield take(categoriesTypes.CATEGORIES_GET_REQUEST);
      const res = normalizeRequestData(yield call(categoriesRequestHelpers.getCategoriesList,
        { ...action.payload }));
      yield put(categoriesGetSuccess({ ...res }));
    } catch (e) {
      console.error(e);
      yield put(categoryRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* updateCategory() {
  while (true) {
    try {
      const action = yield take(categoriesTypes.CATEGORY_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(categoriesRequestHelpers.updateCategoryRequest,
        { ...action.payload }, { id: action.payload.id }));
      yield put(categoryUpdateSuccess({ ...res }));
      yield call(PushNotifications.success,
        { content: SUCCESS_MESSAGES.CATEGORY_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(categoryRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* deleteCategory() {
  while (true) {
    try {
      const action = yield take(categoriesTypes.CATEGORY_DELETE_REQUEST);
      const res = normalizeRequestData(yield call(categoriesRequestHelpers.deleteCategoryRequest,
        {}, { id: action.payload.id }));
      console.log(res);
      yield put(categoryDeleteSuccess(({ ...res })));
      PushNotifications.success({ content: SUCCESS_MESSAGES.CATEGORY_SUCCESSFULLY_DELETED });
    } catch (e) {
      console.log(e);
      yield put(categoryRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(createCategory);
  yield fork(getCategoryList);
  yield fork(updateCategory);
  yield fork(deleteCategory);
}
