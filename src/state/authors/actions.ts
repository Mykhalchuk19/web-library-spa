import { createActions } from 'redux-actions';
import bookTypes from './types';

export const {
  authorCreateRequest,
  authorCreateSuccess,
  authorsGetRequest,
  authorsGetSuccess,
  authorUpdateRequest,
  authorUpdateSuccess,
  authorDeleteRequest,
  authorDeleteSuccess,
  authorRequestFailure,
} = createActions(
  bookTypes.AUTHOR_CREATE_REQUEST,
  bookTypes.AUTHOR_CREATE_SUCCESS,
  bookTypes.AUTHORS_GET_REQUEST,
  bookTypes.AUTHORS_GET_SUCCESS,
  bookTypes.AUTHOR_UPDATE_REQUEST,
  bookTypes.AUTHOR_UPDATE_SUCCESS,
  bookTypes.AUTHOR_DELETE_REQUEST,
  bookTypes.AUTHOR_DELETE_SUCCESS,
  bookTypes.AUTHOR_REQUEST_FAILURE,
);
