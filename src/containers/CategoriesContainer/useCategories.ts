import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TUseCategories, TCategoryForMapItem } from '../../interfaces/categoriesInterfaces';
import { categoriesSelectors, categoriesActions } from '../../state/categories';
import { createFullName, convertEmptyValueForShow } from '../../utils/helpers/convertDataHelpers';

const useCategories = (): TUseCategories => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const categoriesList = useSelector(categoriesSelectors.getCategoriesList);
  const isPending = useSelector(categoriesSelectors.getPending);
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
        description,
        creator,
      }: TCategoryForMapItem) => ({
        id: convertEmptyValueForShow(id),
        title: convertEmptyValueForShow(title),
        shortDescription: convertEmptyValueForShow(shortDescription),
        description: convertEmptyValueForShow(description),
        author: convertEmptyValueForShow(createFullName(creator ? creator.firstname : '', creator ? creator.lastname : '')),
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

  const [isOpenEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [isOpenDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const handleEditCategory = useCallback((id) => {
    setOpenEditCategoryModal(true);
    setCategoryId(id);
  }, []);

  const closeEditCategoryModal = useCallback(() => setOpenEditCategoryModal(false), []);

  const handleDeleteCategory = useCallback((id) => {
    setOpenDeleteCategoryModal(true);
    setCategoryId(id);
  }, []);

  const closeDeleteCategoryModal = useCallback(() => setOpenDeleteCategoryModal(false), []);

  return {
    openCreateCategoryModalHandler,
    closeCreateCategoryModalHandler,
    isOpenCreateCategoryModal,
    t,
    categoriesForShow,
    limit,
    count,
    page,
    handleEditCategory,
    handleDeleteCategory,
    closeEditCategoryModal,
    isOpenEditCategoryModal,
    isOpenDeleteCategoryModal,
    closeDeleteCategoryModal,
    categoryId,
    isPending,
  };
};

export default useCategories;
