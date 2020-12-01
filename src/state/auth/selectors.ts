import { createSelector } from 'reselect';
import { identity, pathOr } from 'ramda';

const getPending = createSelector(pathOr(false, ['auth', 'pending']), identity);
const getUserData = createSelector(pathOr({
  id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  type: undefined,
  file: {
    filename: null,
  },
  avatar: null,
}, ['auth', 'userData']), identity);

const getMyPermissions = createSelector(pathOr([], ['auth', 'userData', 'permissions']), identity);

export {
  getPending,
  getUserData,
  getMyPermissions,
};
