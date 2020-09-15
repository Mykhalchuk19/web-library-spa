import { createRequestApi } from './api';

const signUpRequest = createRequestApi('post', 'user/signup');
const signInRequest = createRequestApi('post', 'user/signin');

export {
  signUpRequest,
  signInRequest,
};
