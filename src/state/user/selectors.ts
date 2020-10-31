import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';
import { IUserData } from './interfaces';

const getPending = createSelector(pathOr(false, ['user', 'pending']), identity);
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

const getUserById = createSelector(
  (state: TStore) => state.user.list.users,
  (_: TStore, userId: number | null) => userId,
  (users, userId) => users.find((item: IUserData): boolean => item.id === userId) || {
    id: null,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  },
);

export {
  getPending,
  getAuthError,
  getUserData,
  getUsersList,
  getUserById,
};
