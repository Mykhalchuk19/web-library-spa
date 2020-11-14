import { handleActions } from 'redux-actions';
import categoriesTypes from './types';
import { TCategoriesState, TAction } from '../../interfaces/categoriesInterfaces';

const initialState: TCategoriesState = {
  pending: false,
  list: {
    categories: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const userReducer = handleActions<TCategoriesState, string>({
  [categoriesTypes.CATEGORY_CREATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [categoriesTypes.CATEGORY_CREATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    list: {
      ...state.list,
      categories: [...state.list.categories, action.payload.category],
    },
  }),
  [categoriesTypes.CATEGORY_CREATE_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, {
  ...initialState,
});

export default userReducer;
