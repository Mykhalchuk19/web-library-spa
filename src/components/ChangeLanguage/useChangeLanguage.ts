import { useCallback } from 'react';
import i18n from '../../utils/i18next/config';
import { TChangeLanguage } from '../../interfaces/componentInterfaces';

const useChangeLanguage = (): TChangeLanguage => {
  const changeLanguage = useCallback(async (lng: string) => {
    await i18n.changeLanguage(lng);
    await i18n.reloadResources();
  }, []);

  return {
    changeLanguage,
  };
};

export default useChangeLanguage;
