import React from 'react';
import Layout from '../Layout/Layout';
import { CustomButton } from '../../components';
import { AddBookModal } from './modals';
import './style.sass';
import useBooks from './useBooks';

const BooksContainer: React.FC = () => {
  const {
    isOpenAddBookModal,
    closeAddBookModalHandler,
    openAddBookModalHandler,
    t,
  } = useBooks();
  return (
    <>
      <Layout>
        <div className="books__wrapper">
          <div className="books__header">
            <h2 className="books__title">{t('Books')}</h2>
          </div>
          <div className="books__row">
            <CustomButton
              type="button"
              text="Add book"
              onClick={openAddBookModalHandler}
            />
          </div>
        </div>
      </Layout>
      <AddBookModal
        isOpen={isOpenAddBookModal}
        onClose={closeAddBookModalHandler}
      />
    </>
  );
};

export default BooksContainer;
