import React from 'react';
import Layout from '../Layout/Layout';
import { CustomButton, PermissionComponent } from '../../components';
import { AddBookModal, EditBookModal, DeleteBookModal } from './modals';
import './style.sass';
import useBooks from './useBooks';
import { useGrid } from '../../hooks';
import { booksActions } from '../../state/books';
import BooksTable from './components/BooksTable/BooksTable';
import { ACTIONS, MODULES } from '../../constants/permissions';

const BooksContainer: React.FC = () => {
  const {
    isOpenAddBookModal,
    openAddBookModalHandler,
    closeAddBookModalHandler,
    t,
    booksForShow,
    limit,
    count, page,
    handleEditBook,
    handleDeleteBook,
    isOpenEditBookModal,
    closeEditBookModal,
    isOpenDeleteBookModal,
    closeDeleteBookModal,
    bookId,
  } = useBooks();

  const {
    onSearch,
    changeRowsPerPage,
    changePage,
  } = useGrid({ limit: 10, getListRequest: booksActions.booksGetRequest });
  return (
    <>
      <Layout>
        <div className="books__wrapper">
          <div className="books__header">
            <h2 className="books__title">{t('Books')}</h2>
          </div>
          <PermissionComponent action={ACTIONS.CREATE} module={MODULES.BOOKS}>
            <div className="books__row">
              <CustomButton
                type="button"
                text="Add book"
                onClick={openAddBookModalHandler}
              />
            </div>
          </PermissionComponent>
          <BooksTable
            booksForShow={booksForShow}
            handleEditBook={handleEditBook}
            handleDeleteBook={handleDeleteBook}
            t={t}
            limit={limit}
            count={count}
            page={page}
            changePage={changePage}
            changeRowsPerPage={changeRowsPerPage}
            onBooksSearch={onSearch}
          />
        </div>
      </Layout>
      <AddBookModal
        isOpen={isOpenAddBookModal}
        onClose={closeAddBookModalHandler}
      />
      <EditBookModal
        id={bookId}
        isOpen={isOpenEditBookModal}
        onClose={closeEditBookModal}
      />
      <DeleteBookModal
        isOpen={isOpenDeleteBookModal}
        onClose={closeDeleteBookModal}
        id={bookId}
      />
    </>
  );
};

export default BooksContainer;
