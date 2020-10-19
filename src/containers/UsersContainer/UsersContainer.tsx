import React from 'react';
import { isEmpty } from 'ramda';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TablePagination,
  TableFooter,
  IconButton,
} from '@material-ui/core';
import { Edit, Delete, LastPage } from '@material-ui/icons';
import Layout from '../Layout/Layout';
import { USER_FIELDS } from '../../constants';
import { UsersPagination } from './components';
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
  } = useUsers();
  return (
    <>
      <Layout>
        <div className="users__wrapper">
          <h2 className="users__title">{t('Users')}</h2>
          { !isEmpty(usersForShow) && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {USER_FIELDS.map(({ id, field }) => (
                    <TableCell
                      key={id}
                    >
                      {t(field)}
                    </TableCell>
                  ))}
                  <TableCell colSpan={0.5} />
                  <TableCell colSpan={0.5} />
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  usersForShow.map(({
                    id, username, firstname, lastname, email,
                  }) => (
                    <TableRow key={id}>
                      <TableCell component="td">
                        {id}
                      </TableCell>
                      <TableCell component="td">
                        {username}
                      </TableCell>
                      <TableCell component="td">
                        {firstname}
                      </TableCell>
                      <TableCell component="td">
                        {lastname}
                      </TableCell>
                      <TableCell component="td">
                        {email}
                      </TableCell>
                      <TableCell component="td" colSpan={0.5}>
                        <IconButton
                          onClick={() => handleEditUser(id)}
                          type="button"
                          aria-label="edit"
                        >
                          <Edit />
                        </IconButton>
                      </TableCell>
                      <TableCell component="td" colSpan={0.5}>
                        <IconButton
                          onClick={() => handleDeleteUser(id)}
                          type="button"
                          aria-label="delete"
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={count}
                    rowsPerPage={limit}
                    labelRowsPerPage={t('Rows per page')}
                    page={page}
                    onChangePage={changePage}
                    onChangeRowsPerPage={changeRowsPerPage}
                    colSpan={7}
                    ActionsComponent={UsersPagination}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          )}
        </div>
      </Layout>
    </>
  );
};

export default UsersContainer;
