import { handleActions } from 'redux-actions';

import userTypes from './types';

const userReducer = handleActions({
  [userTypes.USER_SIGN_IN_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_SIGN_UP_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_AUTHENTICATION_SUCCESS]: (state, payload) => ({
    ...state,
    userData: payload,
    pending: false,
  }),
  [userTypes.USER_AUTHENTICATION_ERROR]: (state) => ({
    ...state,
    pending: false,
  }),
}, {
  userData: {},
  pending: false,
});

export default userReducer;
