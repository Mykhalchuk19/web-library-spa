import { createRequestApi } from './api';

const signUpRequest = createRequestApi('post', 'auth/signup');
const signInRequest = createRequestApi('post', 'auth/signin');

export {
  signUpRequest,
  signInRequest,
};
