import { createRequestApi } from './api';

const getUsersListRequest = createRequestApi('get', 'users');
const updateUserRequest = createRequestApi('put', 'users/');
const deleteUserRequest = createRequestApi('delete', 'users/');
const getCurrentUser = createRequestApi('get', 'users/current-user');

export {
  getUsersListRequest,
  updateUserRequest,
  deleteUserRequest,
  getCurrentUser,
};
