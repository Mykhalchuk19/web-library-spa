import React from 'react';
import { isEmpty } from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import { CustomButton } from '../../components';
import { CreateCategoryModal } from './modals';
import useCategories from './useCategories';
import './style.sass';
import CategoriesTable from './components/CategoriesTable/CategoriesTable';

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
    // handleEditCategory,
    // handleDeleteCategory,
    changePage,
    changeRowsPerPage,
    onCategoriesSearch,
  } = useCategories();
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
          { !isEmpty(categoriesForShow) && (
          <CategoriesTable
            categoriesForShow={categoriesForShow}
            // handleEditCategory={handleEditCategory}
            // handleDeleteCategory={handleDeleteCategory}
            t={t}
            limit={limit}
            count={count}
            page={page}
            changePage={changePage}
            changeRowsPerPage={changeRowsPerPage}
            onCategoriesSearch={onCategoriesSearch}
          />
          )}
        </div>
      </Layout>
      <CreateCategoryModal
        isOpen={isOpenCreateCategoryModal}
        onClose={closeCreateCategoryModalHandler}
      />
    </>
  );
};

export default CategoriesContainer;
