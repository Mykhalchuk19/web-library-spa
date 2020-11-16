import { createActions } from 'redux-actions';

import userTypes from './types';

export const {
  usersListRequest,
  usersListSuccess,
  usersListFailure,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFailure,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteFailure,
} = createActions(
  userTypes.USERS_LIST_REQUEST,
  userTypes.USERS_LIST_SUCCESS,
  userTypes.USERS_LIST_FAILURE,
  userTypes.USER_UPDATE_REQUEST,
  userTypes.USER_UPDATE_SUCCESS,
  userTypes.USER_UPDATE_FAILURE,
  userTypes.USER_DELETE_REQUEST,
  userTypes.USER_DELETE_SUCCESS,
  userTypes.USER_DELETE_FAILURE,
);
