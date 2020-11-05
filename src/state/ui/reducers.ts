import { handleActions } from 'redux-actions';
import { UiState } from './interfaces';
import uiTypes from './types';

const initialState: UiState = {
  isLeftSideBar: true,
};

const uiReducer = handleActions<UiState, string>({
  [uiTypes.TOGGLE_LEFT_SIDE_BAR]: (state) => ({
    ...state,
    isLeftSideBar: !state.isLeftSideBar,
  }),
  [uiTypes.RESET_UI]: () => ({
    ...initialState,
  }),
}, initialState);

export default uiReducer;
