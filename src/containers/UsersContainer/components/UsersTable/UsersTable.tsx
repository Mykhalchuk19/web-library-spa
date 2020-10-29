import React from 'react';
import {
  Table,
  TableBody,
  TableCell, TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { USER_FIELDS } from '../../../../constants';
import { UsersPagination } from '../index';
import { IUseUsers } from '../../../../interfaces/userInterfaces';
import UsersItem from '../UsersItem/UsersItem';

const UsersTable: React.FC<IUseUsers> = ({
  usersForShow,
  handleEditUser,
  handleDeleteUser,
  limit,
  count,
  page,
  changePage,
  changeRowsPerPage,
  t,
} : IUseUsers) => (
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
          <UsersItem
            key={id}
            id={id}
            username={username}
            lastname={lastname}
            firstname={firstname}
            email={email}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
          />
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
);

export default UsersTable;
