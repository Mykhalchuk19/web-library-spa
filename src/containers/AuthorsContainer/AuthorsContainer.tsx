import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useAuthors from './useAuthors';
import { useGrid } from '../../hooks';
import { authorsActions } from '../../state/authors';
import Layout from '../Layout/Layout';
import { CustomButton, PermissionComponent } from '../../components';
import AuthorsTable from './components/AuthorsTable/AuthorsTable';
import { CreateAuthorModal, DeleteAuthorModal, EditAuthorModal } from './modals';
import './style.sass';
import { ACTIONS, MODULES } from '../../constants/permissions';

const useStyles = makeStyles({
  authors_btn_add: {
    height: '30px',
  },
});

const AuthorsContainer: React.FC = () => {
  const classes = useStyles();
  const {
    isOpenCreateAuthorModal,
    openCreateAuthorModalHandler,
    closeCreateAuthorModalHandler,
    t,
    authorsForShow,
    limit,
    count, page,
    handleEditAuthor,
    handleDeleteAuthor,
    isOpenEditAuthorModal,
    closeEditAuthorModal,
    isOpenDeleteAuthorModal,
    closeDeleteAuthorModal,
    authorId,
  } = useAuthors();

  const {
    onSearch,
    changeRowsPerPage,
    changePage,
  } = useGrid({ limit, getListRequest: authorsActions.authorsGetRequest });
  return (
    <>
      <Layout>
        <div className="authors__wrapper">
          <div className="authors__header">
            <h2 className="authors__title">{t('Authors')}</h2>
          </div>
          <PermissionComponent action={ACTIONS.CREATE} module={MODULES.AUTHORS}>
            <div className="authors__row">
              <CustomButton
                type="button"
                text="Create author"
                className={classes.authors_btn_add}
                onClick={openCreateAuthorModalHandler}
              />
            </div>
          </PermissionComponent>
          <AuthorsTable
            authorsForShow={authorsForShow}
            handleEditAuthor={handleEditAuthor}
            handleDeleteAuthor={handleDeleteAuthor}
            t={t}
            limit={limit}
            count={count}
            page={page}
            changePage={changePage}
            changeRowsPerPage={changeRowsPerPage}
            onAuthorsSearch={onSearch}
          />
        </div>
      </Layout>
      <CreateAuthorModal
        isOpen={isOpenCreateAuthorModal}
        onClose={closeCreateAuthorModalHandler}
      />
      <EditAuthorModal
        id={authorId}
        isOpen={isOpenEditAuthorModal}
        onClose={closeEditAuthorModal}
      />
      <DeleteAuthorModal
        id={authorId}
        isOpen={isOpenDeleteAuthorModal}
        onClose={closeDeleteAuthorModal}
      />
    </>
  );
};

export default memo(AuthorsContainer);
