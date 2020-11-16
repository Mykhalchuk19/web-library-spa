import { handleActions } from 'redux-actions';
import { TAction, UserState, UserItem } from '../../interfaces/userInterfaces';
import userTypes from './types';

const initialState: UserState = {
  pending: false,
  list: {
    users: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const userReducer = handleActions<UserState, string>({
  [userTypes.USERS_LIST_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USERS_LIST_SUCCESS]: (state, action: TAction) => ({
    ...state,
    list: {
      users: action.payload.users,
      limit: action.payload.limit,
      count: action.payload.count,
      page: action.payload.page,
    },
    pending: false,
  }),
  [userTypes.USERS_LIST_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.USER_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_UPDATE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      users: [...(state.list.users as Array<UserItem>).map((item: UserItem): Array<UserItem> => (item.id === action.payload.userData.id ? action.payload.userData : item))],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [userTypes.USER_UPDATE_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.USER_DELETE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_DELETE_SUCCESS]: (state, action: TAction) => ({
    ...state,
    pending: false,
    list: {
      users: [...state.list.users.filter((item) => item.id !== action.payload.user)],
      limit: state.list.limit,
      page: state.list.page,
      count: state.list.count,
    },
  }),
  [userTypes.USER_DELETE_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, {
  ...initialState,
});

export default userReducer;
