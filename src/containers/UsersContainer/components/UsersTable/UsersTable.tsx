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
import { USER_FIELDS } from '../../../../constants/user';
import { Form, Loader } from '../../../../components';
import { UsersPagination } from '../index';
import { TUsersTable } from '../../../../interfaces/userInterfaces';
import UsersItem from '../UsersItem/UsersItem';

const UsersTable: React.FC<TUsersTable> = ({
  usersForShow,
  handleEditUser,
  handleDeleteUser,
  limit,
  count,
  page,
  changePage,
  changeRowsPerPage,
  t,
  onUsersSearch,
  isPending,
} : TUsersTable) => (
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
          <TableCell colSpan={2}>
            <Form.CustomInput
              id="user-search"
              label={t('Search')}
              error=""
              inputProps={{
                onChange: (value: string) => onUsersSearch(value),
              }}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      { !isPending ? (
        <>
          <TableBody>
            {
        usersForShow.map(({
          id,
          username,
          firstname,
          lastname,
          email,
          status,
          file,
        }) => (
          <UsersItem
            key={id}
            id={id}
            username={username}
            lastname={lastname}
            firstname={firstname}
            email={email}
            status={status}
            filename={file?.filename}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            t={t}
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
                colSpan={9}
                ActionsComponent={UsersPagination}
              />
            </TableRow>
          </TableFooter>
        </>
      ) : (<Loader secondary />)}
    </Table>
  </TableContainer>
);

export default UsersTable;
