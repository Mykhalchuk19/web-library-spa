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
} from '@material-ui/core';
import Layout from '../Layout/Layout';
import { USER_FIELDS } from '../../constants';
import { UsersPagination } from './components';
import useUsers from './useUsers';
import './style.sass';

const UsersContainer: React.FC = () => {
  const {
    usersForShow, limit, page, count, changePage, changeRowsPerPage,
  } = useUsers();
  return (
    <>
      <Layout>
        <div className="users__wrapper">
          <h2 className="users__title">Users</h2>
          { !isEmpty(usersForShow) && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {USER_FIELDS.map(({ id, field }) => (
                    <TableCell
                      key={id}
                    >
                      {field}
                    </TableCell>
                  ))}
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
                    </TableRow>
                  ))
                }
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    // rowsPerPageOptions={[5, 10, 25]}
                    count={count}
                    rowsPerPage={limit}
                    page={page}
                    onChangePage={changePage}
                    onChangeRowsPerPage={changeRowsPerPage}
                    colSpan={5}
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
