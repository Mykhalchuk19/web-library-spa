import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';
import { TAuthorItem } from '../../interfaces/authorsInterfaces';

const getAuthorsList = createSelector(pathOr({
  authors: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['authors', 'list']), identity);

const getAuthorById = createSelector(
  (state: TStore) => state.authors.list.authors,
  (_: TStore, authorId: number | null | undefined) => authorId,
  (authors, authorId) => authors.find((item: TAuthorItem): boolean => item.id === authorId) || {
    id: null,
    firstname: '',
    lastname: '',
  },
);

export {
  getAuthorsList,
  getAuthorById,
};
