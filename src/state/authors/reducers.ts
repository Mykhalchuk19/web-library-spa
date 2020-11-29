import { handleActions } from 'redux-actions';
import { TAuthorsState, TAction, TAuthorItem } from '../../interfaces/authorsInterfaces';
import authorsTypes from './types';

const initialState: TAuthorsState = {
  pending: false,
  list: {
    authors: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const reducer = handleActions({
  [authorsTypes.AUTHOR_REQUEST_FAILURE]: (state) => ({
    ...state,
    pending: true,
  }),
  [authorsTypes.AUTHOR_CREATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    list: {
      ...state.list,
      authors: [...state.list.authors, action.payload.author],
    },
  }),
  [authorsTypes.AUTHORS_GET_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authorsTypes.AUTHORS_GET_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      authors: action.payload.authors,
      limit: action.payload.limit,
      count: action.payload.count,
      page: action.payload.page,
    },
  }),
  [authorsTypes.AUTHOR_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authorsTypes.AUTHOR_UPDATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      authors: [...(state.list.authors as Array<TAuthorItem>).map((
        item: TAuthorItem,
      ): Array<TAuthorItem> => (item.id === action.payload.author.id
        ? action.payload.author : item))],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [authorsTypes.AUTHOR_DELETE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authorsTypes.AUTHOR_DELETE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      authors: [...state.list.authors.filter((item) => item.id !== action.payload.author)],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [authorsTypes.AUTHOR_REQUEST_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, { ...initialState });

export default reducer;
