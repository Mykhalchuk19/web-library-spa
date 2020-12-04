import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';
import { UserItem } from '../../interfaces/userInterfaces';

const getUsersList = createSelector(pathOr({
  users: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['users', 'list']), identity);

const getUserById = createSelector(
  (state: TStore) => state.users.list.users,
  (_: TStore, userId: number | null) => userId,
  (users, userId) => users.find((item: UserItem): boolean => item.id === userId) || {
    id: null,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    type: undefined,
  },
);

const getPending = createSelector(pathOr(false, ['users', 'pending']), identity);

export {
  getUsersList,
  getUserById,
  getPending,
};
