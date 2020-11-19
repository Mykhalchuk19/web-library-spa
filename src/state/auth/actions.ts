import { createActions } from 'redux-actions';
import authTypes from './types';

export const {
  userAuthorizationError,
  userSignUpRequest,
  userSignUpSuccess,
  userSignInRequest,
  userAuthenticationRequest,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  resetPasswordRequest,
  resetPasswordSuccess,
  userLogOut,
  getCurrentUserRequest,
  profileUpdateRequest,
  setUser,
} = createActions(
  authTypes.USER_AUTHORIZATION_ERROR,
  authTypes.USER_SIGN_UP_REQUEST,
  authTypes.USER_SIGN_UP_SUCCESS,
  authTypes.USER_SIGN_IN_REQUEST,
  authTypes.USER_AUTHENTICATION_REQUEST,
  authTypes.USER_LOG_OUT,
  authTypes.FORGOT_PASSWORD_REQUEST,
  authTypes.FORGOT_PASSWORD_SUCCESS,
  authTypes.RESET_PASSWORD_REQUEST,
  authTypes.RESET_PASSWORD_SUCCESS,
  authTypes.GET_CURRENT_USER_REQUEST,
  authTypes.PROFILE_UPDATE_REQUEST,
  authTypes.SET_USER,
);
