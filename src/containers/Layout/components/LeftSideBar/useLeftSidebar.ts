import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import i18n from '../../../../utils/i18next/config';
import { authActions } from '../../../../state/auth';
import { uiActions, uiSelectors } from '../../../../state/ui';
import { TUseLeftSideBar } from '../../../../interfaces/uiInterfaces';

const UseLeftSideBar = (): TUseLeftSideBar => {
  const dispatch = useDispatch();
  const isLeftSideBar = useSelector(uiSelectors.isLeftSideBarSelector);
  const logOut = useCallback(() => dispatch(authActions.userLogOut()), [dispatch]);
  const changeLanguage = useCallback(async (lng: string) => {
    await i18n.changeLanguage(lng);
    await i18n.reloadResources();
  }, []);
  const toggleLeftSideBar = useCallback(
    () => { dispatch(uiActions.toggleLeftSideBar()); },
    [dispatch],
  );

  return {
    logOut,
    changeLanguage,
    toggleLeftSideBar,
    isLeftSideBar,
  };
};

export default UseLeftSideBar;
