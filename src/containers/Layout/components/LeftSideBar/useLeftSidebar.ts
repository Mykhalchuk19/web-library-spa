import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import i18n from '../../../../utils/i18next/config';
import { userActions } from '../../../../state/user';
import { uiActions, uiSelectors } from '../../../../state/ui';

interface IUseLeftSideBar {
    logOut: () => void,
    changeLanguage: (lng: string) => Promise<void>
    toggleLeftSideBar: () => void,
    isLeftSideBar: boolean,
}

const UseLeftSideBar = (): IUseLeftSideBar => {
  const dispatch = useDispatch();
  const isLeftSideBar = useSelector(uiSelectors.isLeftSideBarSelector);
  const logOut = useCallback(() => dispatch(userActions.userLogOut()), [dispatch]);
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
