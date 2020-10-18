import { createSelector } from 'reselect';
import { pathOr, identity, path } from 'ramda';

const getAuthPending = createSelector(pathOr(false, ['user', 'pending']), identity);
const getAuthError = createSelector(pathOr(null, ['user', 'error']), identity);
const getUserData = createSelector(pathOr({
  id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
}, ['user', 'userData']), identity);
const getUsersList = createSelector(pathOr({
  users: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['user', 'list']), identity);

export {
  getAuthPending,
  getAuthError,
  getUserData,
  getUsersList,
};
