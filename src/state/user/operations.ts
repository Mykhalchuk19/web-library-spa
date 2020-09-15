import {
  call, put, fork, take,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import userTypes from './types';
import { userAuthenticationSuccess } from './actions';
import { authenticationRequestHelpers, apiHelpers } from '../../utils/requestHelpers';

const { normalizeRequestData } = apiHelpers;

function* singUp() {
  while (true) {
    try {
      const action = yield take(userTypes.USER_SIGN_UP_REQUEST);
      const res = normalizeRequestData(yield call(authenticationRequestHelpers.signUpRequest,
        { ...action.payload }));
      yield put(userAuthenticationSuccess({ ...res }));
    } catch (e) {
      console.error(e, 'e');
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
    } catch (e) {
      console.error(e, 'e');
    }
  }
}

export default function* () {
  yield fork(singUp);
  yield fork(singIn);
}
