import { createActions } from 'redux-actions';

import userTypes from './types';

export const {
  userSignUpRequest,
  userSignInRequest,
  userAuthenticationSuccess,
  userAuthenticationError,
  userLogOut,
  usersListRequest,
  usersListSuccess,
  usersListFailure,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFailure,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteFailure,
} = createActions(
  userTypes.USER_SIGN_UP_REQUEST,
  userTypes.USER_SIGN_IN_REQUEST,
  userTypes.USER_AUTHENTICATION_SUCCESS,
  userTypes.USER_AUTHENTICATION_ERROR,
  userTypes.USER_LOG_OUT,
  userTypes.USERS_LIST_REQUEST,
  userTypes.USERS_LIST_SUCCESS,
  userTypes.USERS_LIST_FAILURE,
  userTypes.USER_UPDATE_REQUEST,
  userTypes.USER_UPDATE_SUCCESS,
  userTypes.USER_UPDATE_FAILURE,
  userTypes.USER_DELETE_REQUEST,
  userTypes.USER_DELETE_SUCCESS,
  userTypes.USER_DELETE_FAILURE,
);
