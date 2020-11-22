import { createActions } from 'redux-actions';

import categoriesTypes from './types';

export const {
  categoryCreateRequest,
  categoryCreateSuccess,
  categoriesGetRequest,
  categoriesGetSuccess,
  categoryUpdateRequest,
  categoryUpdateSuccess,
  categoryDeleteRequest,
  categoryDeleteSuccess,
  categoryRequestFailure,
} = createActions(
  categoriesTypes.CATEGORY_CREATE_REQUEST,
  categoriesTypes.CATEGORY_CREATE_SUCCESS,
  categoriesTypes.CATEGORIES_GET_REQUEST,
  categoriesTypes.CATEGORIES_GET_SUCCESS,
  categoriesTypes.CATEGORY_UPDATE_REQUEST,
  categoriesTypes.CATEGORY_UPDATE_SUCCESS,
  categoriesTypes.CATEGORY_DELETE_REQUEST,
  categoriesTypes.CATEGORY_DELETE_SUCCESS,
);
