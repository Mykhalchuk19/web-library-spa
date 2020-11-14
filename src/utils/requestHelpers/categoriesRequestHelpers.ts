import { createRequestApi } from './api';

const getCategoriesList = createRequestApi('get', 'categories');
const createCategoryRequest = createRequestApi('post', 'categories/create');
const editCategoryRequest = createRequestApi('put', 'categories');
const deleteCategoryRequest = createRequestApi('delete', 'categories');
const autocompleteCategoriesRequest = createRequestApi('get', 'categories/autocomplete');

export {
  getCategoriesList,
  createCategoryRequest,
  editCategoryRequest,
  deleteCategoryRequest,
  autocompleteCategoriesRequest,
};
