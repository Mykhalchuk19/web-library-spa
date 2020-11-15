import { createActions } from 'redux-actions';

import userTypes from './types';

export const {
  userSignUpRequest,
  userSignUpSuccess,
  userSignUpError,
  userSignInRequest,
  userAuthenticationRequest,
  userAuthenticationSuccess,
  userAuthenticationError,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
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
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserFailure,
  profileUpdateRequest,
  profileUpdateSuccess,
  profileUpdateFailure,
} = createActions(
  userTypes.USER_SIGN_UP_REQUEST,
  userTypes.USER_SIGN_UP_SUCCESS,
  userTypes.USER_SIGN_UP_ERROR,
  userTypes.USER_SIGN_IN_REQUEST,
  userTypes.USER_AUTHENTICATION_REQUEST,
  userTypes.USER_AUTHENTICATION_SUCCESS,
  userTypes.USER_AUTHENTICATION_ERROR,
  userTypes.USER_LOG_OUT,
  userTypes.FORGOT_PASSWORD_REQUEST,
  userTypes.FORGOT_PASSWORD_SUCCESS,
  userTypes.FORGOT_PASSWORD_FAILURE,
  userTypes.USERS_LIST_REQUEST,
  userTypes.USERS_LIST_SUCCESS,
  userTypes.USERS_LIST_FAILURE,
  userTypes.USER_UPDATE_REQUEST,
  userTypes.USER_UPDATE_SUCCESS,
  userTypes.USER_UPDATE_FAILURE,
  userTypes.USER_DELETE_REQUEST,
  userTypes.USER_DELETE_SUCCESS,
  userTypes.USER_DELETE_FAILURE,
  userTypes.GET_CURRENT_USER_REQUEST,
  userTypes.GET_CURRENT_USER_SUCCESS,
  userTypes.GET_CURRENT_USER_FAILURE,
  userTypes.PROFILE_UPDATE_REQUEST,
  userTypes.PROFILE_UPDATE_SUCCESS,
  userTypes.PROFILE_UPDATE_FAILURE,
);
