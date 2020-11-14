import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';

const getCategoriesList = createSelector(pathOr({
  categories: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['categories', 'list']), identity);

export {
  getCategoriesList,
};
