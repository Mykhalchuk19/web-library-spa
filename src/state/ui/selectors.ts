import { createSelector } from 'reselect';
import { pathOr, identity } from 'ramda';

const isLeftSideBarSelector = createSelector(pathOr(true, ['ui', 'isLeftSideBar']), identity);

export {
  isLeftSideBarSelector,
};
