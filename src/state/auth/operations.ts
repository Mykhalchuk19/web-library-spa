import {
  call, fork, put, take,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import authTypes from './types';
import {
  userAuthorizationError,
  userSignUpSuccess,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  userAuthenticationSuccess,
  profileUpdateSuccess,
  getCurrentUserSuccess,
} from './actions';
import { authenticationRequestHelpers, userRequestHelpers } from '../../utils/requestHelpers';
import { PushNotifications } from '../../utils/helpers';
import { resetUi } from '../ui/actions';
import { normalizeRequestData } from '../../utils/requestHelpers/api';
import { SUCCESS_MESSAGES } from '../../constants';

function* singUp() {
  while (true) {
    try {
      const action = yield take(authTypes.USER_SIGN_UP_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signUpRequest,
        { ...action.payload }));
      yield put(userSignUpSuccess());
      PushNotifications.success({ content: res.success });
      yield put(push('/signin'));
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* activateAccount() {
  while (true) {
    try {
      const action = yield take(authTypes.USER_AUTHENTICATION_REQUEST);
      const res = normalizeRequestData(yield call(
        authenticationRequestHelpers.activateAccountRequest,
        { ...action.payload },
      ));
      if (res.token) {
        yield put(userAuthenticationSuccess({ ...res }));
        yield localStorage.setItem('authToken', res.token);
        yield put(push('/profile'));
      } else {
        PushNotifications.error({ content: 'Something went wrong' });
      }
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* singIn() {
  while (true) {
    try {
      const action = yield take(authTypes.USER_SIGN_IN_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signInRequest,
        { ...action.payload }));
      yield put(userAuthenticationSuccess({ ...res }));
      yield localStorage.setItem('authToken', res.token);
      yield put(push('/profile'));
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* forgotPassword() {
  while (true) {
    try {
      const action = yield take(authTypes.FORGOT_PASSWORD_REQUEST);
      const res = normalizeRequestData(yield call(
        authenticationRequestHelpers.forgotPasswordRequest,
        { ...action.payload },
      ));
      yield put(forgotPasswordSuccess());
      PushNotifications.success({ content: res.success });
      yield put(push('/signin'));
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* resetPassword() {
  while (true) {
    try {
      const action = yield take(authTypes.RESET_PASSWORD_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.resetPasswordRequest,
        { ...action.payload }));
      yield put(resetPasswordSuccess());
      PushNotifications.success({ content: res.success });
      yield put(push('/signin'));
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* logOut() {
  while (true) {
    yield take(authTypes.USER_LOG_OUT);
    yield localStorage.removeItem('authToken');
    yield put(push('/auth/signin'));
    yield put(resetUi());
  }
}

function* updateProfile() {
  while (true) {
    try {
      const action = yield take(authTypes.PROFILE_UPDATE_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.updateProfile,
        { ...action.payload }));
      yield put(profileUpdateSuccess({ ...res }));
      PushNotifications.success({ content: SUCCESS_MESSAGES.PROFILE_SUCCESSFULLY_EDITED });
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

function* getCurrentUser() {
  while (true) {
    try {
      yield take(authTypes.GET_CURRENT_USER_REQUEST);
      const res = normalizeRequestData(yield call(userRequestHelpers.getCurrentUser));
      yield put((getCurrentUserSuccess({ ...res })));
    } catch (e) {
      yield put(userAuthorizationError());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

export default function* (): Generator {
  yield fork(singUp);
  yield fork(activateAccount);
  yield fork(singIn);
  yield fork(forgotPassword);
  yield fork(resetPassword);
  yield fork(getCurrentUser);
  yield fork(updateProfile);
  yield fork(logOut);
}
