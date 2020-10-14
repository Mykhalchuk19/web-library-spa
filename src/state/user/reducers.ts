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
  [userTypes.USER_AUTHENTICATION_SUCCESS]: (state, { payload: { userData } }) => ({
    ...state,
    userData,
    pending: false,
  }),
  [userTypes.USER_AUTHENTICATION_ERROR]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.USER_LOG_OUT]: (state) => ({
    ...state,
    userData: {},
  }),
  [userTypes.USER_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_UPDATE_SUCCESS]: (state, { payload: { userData } }) => ({
    ...state,
    userData,
    pending: false,
  }),
}, {
  userData: {},
  pending: false,
});

export default userReducer;
