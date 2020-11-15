import { createRequestApi } from './api';

const signUpRequest = createRequestApi('post', 'auth/signup');
const signInRequest = createRequestApi('post', 'auth/signin');
const activateAccountRequest = createRequestApi('post', 'auth/activate-account');
const forgotPasswordRequest = createRequestApi('post', 'auth/forgot-password');
const resetPasswordRequest = createRequestApi('post', 'auth/reset-password');

export {
  signUpRequest,
  signInRequest,
  activateAccountRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
};
