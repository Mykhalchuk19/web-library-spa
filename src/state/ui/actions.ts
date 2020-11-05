import { createActions } from 'redux-actions';

import uiTypes from './types';

export const {
  toggleLeftSideBar,
  resetUi,
} = createActions(
  uiTypes.TOGGLE_LEFT_SIDE_BAR,
  uiTypes.RESET_UI,
);
