import { createRequestApi } from './api';

const getCategoriesList = createRequestApi('get', 'categories');
const createCategoryRequest = createRequestApi('post', 'categories/create');
const updateCategoryRequest = createRequestApi('put', 'categories/');
const deleteCategoryRequest = createRequestApi('delete', 'categories/');
const autocompleteCategoriesRequest = createRequestApi('get', 'categories/autocomplete');

export {
  getCategoriesList,
  createCategoryRequest,
  updateCategoryRequest,
  deleteCategoryRequest,
  autocompleteCategoriesRequest,
};
