import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import { CustomButton } from '../../components';
import { CreateCategoryModal } from './modals';
import useCategories from './useCategories';
import './style.sass';

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
