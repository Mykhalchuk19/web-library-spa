import {
  call, put, fork, take,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { act } from 'react-dom/test-utils';
import userTypes from './types';
import { PushNotifications } from '../../utils/helpers';
import {
  userSignUpSuccess,
  userSignUpError,
  userAuthenticationSuccess,
  userAuthenticationError,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  usersListSuccess,
  usersListFailure,
  userUpdateSuccess,
  userUpdateFailure,
  userDeleteSuccess,
  userDeleteFailure,
  getCurrentUserSuccess,
  getCurrentUserFailure,
  profileUpdateSuccess,
  profileUpdateFailure,
} from './actions';
import { resetUi } from '../ui/actions';
import { authenticationRequestHelpers, apiHelpers, userRequestHelpers } from '../../utils/requestHelpers';
import { SUCCESS_MESSAGES } from '../../constants';

const { normalizeRequestData } = apiHelpers;

function* singUp() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_SIGN_UP_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signUpRequest,
        { ...action.payload }));
      yield put(userSignUpSuccess());
      PushNotifications.success({ content: res.success });
      yield put(push('/signin'));
    } catch (e) {
      yield put(userSignUpError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* activateAccount() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_AUTHENTICATION_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.activateAccountRequest,
        { ...action.payload }));
      if (res.token) {
        yield put(userAuthenticationSuccess({ ...res }));
        yield localStorage.setItem('authToken', res.token);
        yield put(push('/profile'));
      } else {
        PushNotifications.error({ content: 'Something went wrong' });
      }
    } catch (e) {
      yield put(userAuthenticationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* singIn() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_SIGN_IN_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signInRequest,
        { ...action.payload }));
      yield put(userAuthenticationSuccess({ ...res }));
      yield localStorage.setItem('authToken', res.token);
      yield put(push('/profile'));
    } catch (e) {
      yield put(userAuthenticationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* forgotPassword() {
  while (true) {
    try {
      const action = yield take(userTypes.FORGOT_PASSWORD_REQUEST);
      const res = normalizeRequestData(yield call(
        authenticationRequestHelpers.forgotPasswordRequest,
        { ...action.payload },
      ));
      yield put(forgotPasswordSuccess());
      PushNotifications.success({ content: res.success });
      yield put(push('/signin'));
    } catch (e) {
      yield put(forgotPasswordFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* logOut() {
  while (true) {
    yield take(userTypes.USER_LOG_OUT);
    yield localStorage.removeItem('authToken');
    yield put(push('/auth/signin'));
    yield put(resetUi());
  }
}

function* getListUsers() {
  while (true) {
    try {
      const action = yield take(userTypes.USERS_LIST_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.getUsersListRequest,
        { ...action.payload }));
      yield put(usersListSuccess({ ...res }));
    } catch (e) {
      yield put(usersListFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* updateProfile() {
  while (true) {
    try {
      const action = yield take(userTypes.PROFILE_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.updateProfile,
        { ...action.payload }));
      yield put(profileUpdateSuccess({ ...res }));
      PushNotifications.success({ content: SUCCESS_MESSAGES.PROFILE_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(profileUpdateFailure());
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
      yield put(userUpdateFailure());
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
      yield put(userDeleteFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* getCurrentUser() {
  while (true) {
    try {
      yield take(userTypes.GET_CURRENT_USER_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.getCurrentUser));
      yield put((getCurrentUserSuccess({ ...res })));
    } catch (e) {
      yield put(getCurrentUserFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(singUp);
  yield fork(activateAccount);
  yield fork(singIn);
  yield fork(forgotPassword);
  yield fork(getListUsers);
  yield fork(updateUser);
  yield fork(deleteUser);
  yield fork(getCurrentUser);
  yield fork(updateProfile);
  yield fork(logOut);
}
