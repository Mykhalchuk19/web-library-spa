import { handleActions } from 'redux-actions';
import { TBooksState, TAction, TBookItem } from '../../interfaces/booksInterfaces';
import { bookTypes } from './index';

const initialState: TBooksState = {
  pending: true,
  list: {
    books: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const reducer = handleActions({
  [bookTypes.BOOK_CREATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [bookTypes.BOOK_CREATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      ...state.list,
      books: [...state.list.books, action.payload.book],
    },
  }),
  [bookTypes.BOOKS_GET_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [bookTypes.BOOKS_GET_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      books: action.payload.books,
      limit: action.payload.limit,
      count: action.payload.count,
      page: action.payload.page,
    },
  }),
  [bookTypes.BOOK_GET_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [bookTypes.BOOK_GET_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      ...state.list,
      books: [action.payload.book],
    },
  }),
  [bookTypes.BOOK_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [bookTypes.BOOK_UPDATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      books: [...(state.list.books as Array<TBookItem>).map((
        item: TBookItem,
      ): Array<TBookItem> => (item.id === action.payload.book.id ? action.payload.book : item))],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [bookTypes.BOOK_DELETE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [bookTypes.BOOK_DELETE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      books: [...state.list.books.filter((item) => item.id !== action.payload.book)],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [bookTypes.BOOK_REQUEST_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, { ...initialState });

export default reducer;
