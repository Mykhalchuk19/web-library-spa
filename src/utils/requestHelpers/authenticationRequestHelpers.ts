import { createRequestApi } from './api';

const signUpRequest = createRequestApi('post', 'auth/signup');
const signInRequest = createRequestApi('post', 'auth/signin');
const activateAccountRequest = createRequestApi('post', 'auth/activate-account');

export {
  signUpRequest,
  signInRequest,
  activateAccountRequest,
};
