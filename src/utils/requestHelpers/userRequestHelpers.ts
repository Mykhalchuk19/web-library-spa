import { createRequestApi } from './api';

const updateUserRequest = createRequestApi('put', 'users/');

export {
  updateUserRequest,
};
