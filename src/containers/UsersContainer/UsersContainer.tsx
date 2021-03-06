import React from 'react';
import Layout from '../Layout/Layout';
import { UsersTable } from './components';
import { EditUserModal, DeleteUserModal } from './modals';
import useUsers from './useUsers';
import { useGrid } from '../../hooks';
import { usersActions } from '../../state/users';
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
    isPending,
  } = useUsers();

  const {
    onSearch,
    changeRowsPerPage,
    changePage,
  } = useGrid({ limit, getListRequest: usersActions.usersListRequest });
  return (
    <>
      <Layout>
        <div className="users__wrapper">
          <h2 className="users__title">{t('Users')}</h2>
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
            isPending={isPending}
          />
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
