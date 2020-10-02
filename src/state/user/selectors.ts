import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

const getAuthPending = createSelector(pathOr(false, ['user', 'pending']), identity);
const getAuthError = createSelector(pathOr(null, ['user', 'error']), identity);

export {
  getAuthPending,
  getAuthError,
};
