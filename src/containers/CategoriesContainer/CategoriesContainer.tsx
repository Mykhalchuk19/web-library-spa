import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import { CustomButton } from '../../components';
import { CreateCategoryModal, EditCategoryModal, DeleteCategoryModal } from './modals';
import useCategories from './useCategories';
import './style.sass';
import CategoriesTable from './components/CategoriesTable/CategoriesTable';
import { useGrid } from '../../hooks';
import { categoriesActions } from '../../state/categories';

const useStyles = makeStyles({
  categories_btn_add: {
    height: '30px',
  },
});

const CategoriesContainer: React.FC = () => {
  const classes = useStyles();
  const {
    isOpenCreateCategoryModal,
    openCreateCategoryModalHandler,
    closeCreateCategoryModalHandler,
    t,
    categoriesForShow,
    limit,
    count, page,
    handleEditCategory,
    handleDeleteCategory,
    isOpenEditCategoryModal,
    closeEditCategoryModal,
    isOpenDeleteCategoryModal,
    closeDeleteCategoryModal,
    categoryId,
  } = useCategories();

  const {
    onSearch,
    changeRowsPerPage,
    changePage,
  } = useGrid({ limit, getListRequest: categoriesActions.categoriesGetRequest });
  return (
    <>
      <Layout>
        <div className="categories__wrapper">
          <div className="categories__header">
            <h2 className="categories__title">{t('Categories')}</h2>
          </div>
          <div className="categories__row">
            <CustomButton
              type="button"
              text="Create category"
              className={classes.categories_btn_add}
              onClick={openCreateCategoryModalHandler}
            />
          </div>
          <CategoriesTable
            categoriesForShow={categoriesForShow}
            handleEditCategory={handleEditCategory}
            handleDeleteCategory={handleDeleteCategory}
            t={t}
            limit={limit}
            count={count}
            page={page}
            changePage={changePage}
            changeRowsPerPage={changeRowsPerPage}
            onCategoriesSearch={onSearch}
          />
        </div>
      </Layout>
      <CreateCategoryModal
        isOpen={isOpenCreateCategoryModal}
        onClose={closeCreateCategoryModalHandler}
      />
      <EditCategoryModal
        id={categoryId}
        isOpen={isOpenEditCategoryModal}
        onClose={closeEditCategoryModal}
      />
      <DeleteCategoryModal
        id={categoryId}
        isOpen={isOpenDeleteCategoryModal}
        onClose={closeDeleteCategoryModal}
      />
    </>
  );
};

export default memo(CategoriesContainer);
