import {
  call, put, fork, take,
} from 'redux-saga/effects';
import userTypes from './types';
import { PushNotifications } from '../../utils/helpers';
import {
  usersListSuccess,
  userUpdateSuccess,
  userDeleteSuccess,
  userRequestFailure,
} from './actions';
import { apiHelpers, userRequestHelpers } from '../../utils/requestHelpers';
import { SUCCESS_MESSAGES } from '../../constants';

const { normalizeRequestData } = apiHelpers;

function* getListUsers() {
  while (true) {
    try {
      const action = yield take(userTypes.USERS_LIST_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.getUsersListRequest,
        { ...action.payload }));
      yield put(usersListSuccess({ ...res }));
    } catch (e) {
      yield put(userRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* updateUser() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.updateUserRequest,
        { ...action.payload }, { id: action.payload.id }));
      yield put(userUpdateSuccess({ ...res }));
      yield call(PushNotifications.success, { content: SUCCESS_MESSAGES.USER_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(userRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* deleteUser() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_DELETE_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.deleteUserRequest,
        {}, { id: action.payload.id }));
      yield put(userDeleteSuccess(({ ...res })));
      PushNotifications.success({ content: SUCCESS_MESSAGES.USER_SUCCESSFULLY_DELETED });
    } catch (e) {
      yield put(userRequestFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(getListUsers);
  yield fork(updateUser);
  yield fork(deleteUser);
}
