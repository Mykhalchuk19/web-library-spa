import { createRequestApi } from './api';

const updateUserRequest = createRequestApi('put', 'user/8');

export {
  updateUserRequest,
};
