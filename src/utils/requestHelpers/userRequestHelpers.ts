import { createRequestApi } from './api';

const getUsersListRequest = createRequestApi('get', 'users');
const updateUserRequest = createRequestApi('put', 'users/');
const deleteUserRequest = createRequestApi('delete', 'users/');

export {
  getUsersListRequest,
  updateUserRequest,
  deleteUserRequest,
};
