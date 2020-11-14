import { createActions } from 'redux-actions';

import categoriesTypes from './types';

export const {
  categoryCreateRequest,
  categoryCreateSuccess,
  categoryCreateFailure,
  categoriesGetRequest,
  categoriesGetSuccess,
  categoriesGetFailure,
  categoryUpdateRequest,
  categoryUpdateSuccess,
  categoryUpdateFailure,
  categoryDeleteRequest,
  categoryDeleteSuccess,
  categoryDeleteFailure,
  categoriesGetAutocompleteRequest,
  categoriesGetAutocompleteSuccess,
  categoriesGetAutocompleteFailure,
} = createActions(
  categoriesTypes.CATEGORY_CREATE_REQUEST,
  categoriesTypes.CATEGORY_CREATE_SUCCESS,
  categoriesTypes.CATEGORY_CREATE_FAILURE,
  categoriesTypes.CATEGORIES_GET_REQUEST,
  categoriesTypes.CATEGORIES_GET_SUCCESS,
  categoriesTypes.CATEGORIES_GET_FAILURE,
  categoriesTypes.CATEGORY_UPDATE_REQUEST,
  categoriesTypes.CATEGORY_UPDATE_SUCCESS,
  categoriesTypes.CATEGORY_UPDATE_FAILURE,
  categoriesTypes.CATEGORY_DELETE_REQUEST,
  categoriesTypes.CATEGORY_DELETE_SUCCESS,
  categoriesTypes.CATEGORY_DELETE_FAILURE,
);
