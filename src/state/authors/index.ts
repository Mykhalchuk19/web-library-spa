import authorsTypes from './types';
import * as authorsActions from './actions';
import * as authorsSelectors from './selectors';
import authorsSaga from './operations';
import authorsReducer from './reducers';

export {
  authorsTypes,
  authorsActions,
  authorsSelectors,
  authorsSaga,
};
export default authorsReducer;
