import React from 'react';
import { isEmpty } from 'ramda';
import Layout from '../Layout/Layout';
import { UsersTable } from './components';
import { EditUserModal, DeleteUserModal } from './modals';
import useUsers from './useUsers';
import { useGrid } from '../../hooks';
import { userActions } from '../../state/user';
import './style.sass';

const UsersContainer: React.FC = () => {
  const {
    usersForShow,
    limit,
    page,
    count,
    handleEditUser,
    handleDeleteUser,
    t,
    isOpenEditModal,
    closeEditModal,
    isOpenDeleteModal,
    closeDeleteModal,
    userId,
  } = useUsers();

  const {
    onSearch,
    changeRowsPerPage,
    changePage,
  } = useGrid({ limit, getListRequest: userActions.usersListRequest });
  return (
    <>
      <Layout>
        <div className="users__wrapper">
          <h2 className="users__title">{t('Users')}</h2>
          { !isEmpty(usersForShow) && (
          <UsersTable
            usersForShow={usersForShow}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            t={t}
            limit={limit}
            count={count}
            page={page}
            changePage={changePage}
            changeRowsPerPage={changeRowsPerPage}
            onUsersSearch={onSearch}
          />
          )}
        </div>
      </Layout>
      <EditUserModal
        isOpen={isOpenEditModal}
        closeEditModal={closeEditModal}
        userId={userId}
      />
      <DeleteUserModal
        isOpen={isOpenDeleteModal}
        closeDeleteModal={closeDeleteModal}
        userId={userId}
      />
    </>
  );
};

export default UsersContainer;
