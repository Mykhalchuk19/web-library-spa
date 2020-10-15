import {
  call, put, fork, take,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import userTypes from './types';
import { PushNotifications } from '../../utils/helpers';
import {
  userAuthenticationSuccess, userAuthenticationError, userUpdateSuccess, userUpdateFailure,
} from './actions';
import { authenticationRequestHelpers, apiHelpers, userRequestHelpers } from '../../utils/requestHelpers';

const { normalizeRequestData } = apiHelpers;

function* singUp() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_SIGN_UP_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signUpRequest,
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

function* logOut() {
  yield take(userTypes.USER_LOG_OUT);
  yield push('/');
  localStorage.removeItem('authToken');
}

function* updateUser() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_UPDATE_REQUEST);
      console.log(action.payload);
      const res = normalizeRequestData(yield call(userRequestHelpers.updateUserRequest,
        { ...action.payload }, { id: 8 }));
      yield put(userUpdateSuccess({ ...res }));
    } catch (e) {
      yield put(userUpdateFailure());
      PushNotifications.error({ content: e.response.data.error });
    }
  }
}

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(singUp);
  yield fork(singIn);
  yield fork(updateUser);
}
