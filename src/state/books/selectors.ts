import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';
import { TStore } from '../storeInterfaces';
import { TBookItem } from '../../interfaces/booksInterfaces';

const getBooksList = createSelector(pathOr({
  books: [],
  limit: 10,
  page: 0,
  count: 0,
}, ['books', 'list']), identity);

const getBookById = createSelector(
  (state: TStore) => state.books.list.books,
  (_: TStore, bookId: number | null | undefined) => bookId,
  (books, bookId) => books.find((item: TBookItem): boolean => item.id === bookId) || {
    id: null,
    title: '',
    short_description: '',
    publishing_house: '',
    year: '',
    city: '',
    edition: '',
    series: '',
    created_by: '',
    file: null,
    category_id: null,
    file_id: null,
    authors: [],
  },
);

export {
  getBooksList,
  getBookById,
};
