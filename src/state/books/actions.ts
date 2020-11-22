import { createActions } from 'redux-actions';
import bookTypes from './types';

export const {
  bookCreateRequest,
  bookCreateSuccess,
  booksGetRequest,
  booksGetSuccess,
  bookUpdateRequest,
  bookUpdateSuccess,
  bookDeleteRequest,
  bookDeleteSuccess,
  bookRequestFailure,
} = createActions(
  bookTypes.BOOK_CREATE_REQUEST,
  bookTypes.BOOK_CREATE_SUCCESS,
  bookTypes.BOOKS_GET_REQUEST,
  bookTypes.BOOKS_GET_SUCCESS,
  bookTypes.BOOK_UPDATE_REQUEST,
  bookTypes.BOOK_UPDATE_SUCCESS,
  bookTypes.BOOK_DELETE_REQUEST,
  bookTypes.BOOK_DELETE_SUCCESS,
  bookTypes.BOOK_REQUEST_FAILURE,
);
