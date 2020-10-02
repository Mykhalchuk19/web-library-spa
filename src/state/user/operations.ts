import {
  call, put, fork, take,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import userTypes from './types';
import { PushNotifications } from '../../utils/helpers';
import { userAuthenticationSuccess, userAuthenticationError } from './actions';
import { authenticationRequestHelpers, apiHelpers } from '../../utils/requestHelpers';

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

// eslint-disable-next-line func-names
export default function* (): Generator {
  yield fork(singUp);
  yield fork(singIn);
}
