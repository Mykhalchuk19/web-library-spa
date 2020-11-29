import { createRequestApi } from './api';

const addBookRequest = createRequestApi('post', 'books/create');
const getBooksList = createRequestApi('get', 'books/');
const getBook = createRequestApi('get', 'books/get/');
const updateBookRequest = createRequestApi('put', 'books/');
const deleteBookRequest = createRequestApi('delete', 'books/');
const autocompleteBooksRequest = createRequestApi('get', 'books/autocomplete');

export {
  addBookRequest,
  getBooksList,
  updateBookRequest,
  deleteBookRequest,
  autocompleteBooksRequest,
  getBook,
};
