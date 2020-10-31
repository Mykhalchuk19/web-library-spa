import React from 'react';
import { isEmpty } from 'ramda';
import Layout from '../Layout/Layout';
import { UsersTable } from './components';
import { EditUserModal } from './modals';
import useUsers from './useUsers';
import './style.sass';

const UsersContainer: React.FC = () => {
  const {
    usersForShow,
    limit,
    page,
    count,
    changePage,
    changeRowsPerPage,
    handleEditUser,
    handleDeleteUser,
    t,
    isOpen,
    closeEditModal,
    userId,
  } = useUsers();
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
          />
          )}
        </div>
      </Layout>
      <EditUserModal
        isOpen={isOpen}
        closeEditModal={closeEditModal}
        userId={userId}
      />
    </>
  );
};

export default UsersContainer;
