import { handleActions } from 'redux-actions';
import { TBooksState } from '../../interfaces/booksInterfaces';

const initialState: TBooksState = {
  pending: false,
  list: {
    books: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const reducer = handleActions({

}, { ...initialState });

export default reducer;
