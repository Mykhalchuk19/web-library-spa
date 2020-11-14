import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TUseCategories } from '../../interfaces/categoriesInterfaces';

const useCategories = (): TUseCategories => {
  const [isOpenCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);

  const { t } = useTranslation(['common']);

  const openCreateCategoryModalHandler = useCallback(() => {
    setOpenCreateCategoryModal(true);
  }, [setOpenCreateCategoryModal]);

  const closeCreateCategoryModalHandler = useCallback(() => {
    setOpenCreateCategoryModal(false);
  }, [setOpenCreateCategoryModal]);

  return {
    openCreateCategoryModalHandler,
    closeCreateCategoryModalHandler,
    isOpenCreateCategoryModal,
    t,
  };
};

export default useCategories;
