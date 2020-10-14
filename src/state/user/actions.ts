import { createActions } from 'redux-actions';

import userTypes from './types';

export const {
  userSignUpRequest,
  userSignInRequest,
  userAuthenticationSuccess,
  userAuthenticationError,
  userLogOut,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFailure,
} = createActions(
  userTypes.USER_SIGN_UP_REQUEST,
  userTypes.USER_SIGN_IN_REQUEST,
  userTypes.USER_AUTHENTICATION_SUCCESS,
  userTypes.USER_AUTHENTICATION_ERROR,
  userTypes.USER_LOG_OUT,
  userTypes.USER_UPDATE_REQUEST,
  userTypes.USER_UPDATE_SUCCESS,
  userTypes.USER_UPDATE_FAILURE,
);
