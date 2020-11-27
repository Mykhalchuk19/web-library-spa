import { createRequestApi } from './api';

const createAuthorRequest = createRequestApi('post', 'authors/create');
const getAuthorsList = createRequestApi('get', 'authors/');
const updateAuthorRequest = createRequestApi('put', 'authors/');
const deleteAuthorRequest = createRequestApi('delete', 'authors/');
const autocompleteAuthorsRequest = createRequestApi('get', 'authors/autocomplete');

export {
  createAuthorRequest,
  getAuthorsList,
  updateAuthorRequest,
  deleteAuthorRequest,
  autocompleteAuthorsRequest,
};
