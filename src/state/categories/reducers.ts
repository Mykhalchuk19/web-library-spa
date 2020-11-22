import { handleActions } from 'redux-actions';
import categoriesTypes from './types';
import { TCategoriesState, TAction, TCategoryItem } from '../../interfaces/categoriesInterfaces';

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
  [categoriesTypes.CATEGORIES_GET_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [categoriesTypes.CATEGORIES_GET_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      categories: action.payload.categories,
      limit: action.payload.limit,
      count: action.payload.count,
      page: action.payload.page,
    },
  }),
  [categoriesTypes.CATEGORY_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [categoriesTypes.CATEGORY_UPDATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      categories: [...(state.list.categories as Array<TCategoryItem>).map((item: TCategoryItem): Array<TCategoryItem> => (item.id === action.payload.category.id ? action.payload.category : item))],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [categoriesTypes.CATEGORY_DELETE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [categoriesTypes.CATEGORY_DELETE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      categories: [...state.list.categories.filter((item) => item.id !== action.payload.category)],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [categoriesTypes.CATEGORY_REQUEST_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, {
  ...initialState,
});

export default userReducer;
