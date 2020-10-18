import { handleActions } from 'redux-actions';
import { IAction, UserState } from '../../interfaces/userInterfaces';
import userTypes from './types';

const initialState: UserState = {
  userData: { },
  pending: false,
  list: {
    users: [],
    limit: 10,
    page: 0,
    count: 0,
  },
};

const userReducer = handleActions<UserState, string>({
  [userTypes.USER_SIGN_IN_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_SIGN_UP_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_AUTHENTICATION_SUCCESS]: (state, action: IAction) => ({
    ...state,
    userData: action.payload.userData,
    pending: false,
  }),
  [userTypes.USER_AUTHENTICATION_ERROR]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.USER_LOG_OUT]: (state) => ({
    ...state,
    userData: {},
  }),
  [userTypes.USER_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_UPDATE_SUCCESS]: (state, action: IAction) => ({
    ...state,
    userData: action.payload.userData,
    pending: false,
  }),
  [userTypes.USERS_LIST_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USERS_LIST_SUCCESS]: (state, action: IAction) => ({
    ...state,
    list: { ...action.payload },
    pending: false,
  }),
  [userTypes.USERS_LIST_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.USER_DELETE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.USER_DELETE_SUCCESS]: (state, action: IAction) => ({
    ...state,
    pending: false,
    list: {
      users: [...state.list.users.filter((id) => id === action.payload.user)],
      limit: state.list.limit,
      page: state.list.page,
    },
  }),
  [userTypes.USER_DELETE_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
  [userTypes.GET_CURRENT_USER_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [userTypes.GET_CURRENT_USER_SUCCESS]: (state, action: IAction) => ({
    ...state,
    userData: action.payload.userData,
    pending: false,
  }),
  [userTypes.GET_CURRENT_USER_FAILURE]: (state) => ({
    ...state,
    pending: false,
  }),
}, {
  ...initialState,
});

export default userReducer;
