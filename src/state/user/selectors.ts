import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

const getAuthPending = createSelector(pathOr(false, ['user', 'pending']), identity);

export {
  getAuthPending,
};
