import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import i18n from '../../../../utils/i18next/config';
import { userActions } from '../../../../state/user';

interface IUseLeftSideBar {
    logOut: () => void,
    changeLanguage: (lng: string) => Promise<void>
}

const UseLeftSideBar = (): IUseLeftSideBar => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = useCallback(() => {
    localStorage.removeItem('authToken');
    dispatch(userActions.userLogOut());
    history.push('/');
  }, [dispatch]);
  const changeLanguage = useCallback(async (lng: string) => {
    await i18n.changeLanguage(lng);
    await i18n.reloadResources();
  }, []);

  return {
    logOut,
    changeLanguage,
  };
};

export default UseLeftSideBar;
