import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TUseCategories } from '../../interfaces/categoriesInterfaces';
import { categoriesSelectors, categoriesActions } from '../../state/categories';
import { createFullName } from '../../utils/helpers/convertDataHelpers';

const useCategories = (): TUseCategories => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const categoriesList = useSelector(categoriesSelectors.getCategoriesList);
  const {
    categories, limit, page, count,
  } = categoriesList;
  useEffect(() => {
    dispatch(categoriesActions.categoriesGetRequest());
  }, [dispatch]);
  const categoriesForShow = useMemo(
    () => categories
      .map(({
        id,
        title,
        short_description: shortDescription,
        creator: {
          firstname,
          lastname,
        },
      }) => ({
        id,
        title,
        shortDescription,
        author: createFullName(firstname, lastname),
      }))
      .slice(page * limit, page * limit + limit),
    [categories, limit, page],
  );

  const [isOpenCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);

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
    categoriesForShow,
    limit,
    count,
    page,
    // handleEditCategory,
    // handleDeleteCategory,
  };
};

export default useCategories;
