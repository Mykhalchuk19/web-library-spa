import { handleActions } from 'redux-actions';
import { TAction, AuthState } from '../../interfaces/authInterfaces';
import authTypes from './types';

const initialState: AuthState = {
  userData: {},
  pending: false,
};

const userReducer = handleActions<AuthState, string>({
  [authTypes.USER_SIGN_IN_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authTypes.USER_SIGN_UP_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authTypes.USER_SIGN_UP_SUCCESS]: (state) => ({
    ...state,
    pending: false,
  }),
  [authTypes.USER_AUTHORIZATION_ERROR]: (state) => ({
    ...state,
    pending: false,
  }),
  [authTypes.USER_AUTHENTICATION_REQUEST]: (state) => ({
    ...state,
    pending: false,
  }),
  [authTypes.USER_LOG_OUT]: (state) => ({
    ...state,
    userData: {},
  }),
  [authTypes.PROFILE_UPDATE_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authTypes.AVATAR_UPLOAD_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authTypes.GET_CURRENT_USER_REQUEST]: (state) => ({
    ...state,
    pending: true,
  }),
  [authTypes.SET_USER]: (state, action: TAction) => ({
    ...state,
    userData: {
      ...action.payload.userData,
    },
    pending: false,
  }),
}, {
  ...initialState,
});

export default userReducer;
