import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

const getAuthPending = createSelector(pathOr(false, ['user', 'pending']), identity);
const getAuthError = createSelector(pathOr(null, ['user', 'error']), identity);
const getUserData = createSelector(pathOr({
  id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
}, ['user', 'userData']), identity);

export {
  getAuthPending,
  getAuthError,
  getUserData,
};
