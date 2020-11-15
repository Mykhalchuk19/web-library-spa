import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';
import { TCategoryItem } from '../../interfaces/categoriesInterfaces';

const getCategoriesList = createSelector(pathOr({
  categories: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['categories', 'list']), identity);

const getCategoryById = createSelector(
  (state: TStore) => state.categories.list.categories,
  (_: TStore, categoryId: number | null | undefined) => categoryId,
  (categories, categoryId) => categories.find((item: TCategoryItem): boolean => item.id === categoryId) || {
    id: null,
    title: '',
    short_description: '',
    description: '',
    parent_id: null,
    creator: null,
  },
);

export {
  getCategoriesList,
  getCategoryById,
};
