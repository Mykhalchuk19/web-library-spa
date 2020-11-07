import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';

type UsersItem = {
    id: number | undefined,
    username: string | undefined,
    firstname: string | undefined,
    lastname: string | undefined,
    email: string | undefined,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
}

const UsersItem: React.FC<UsersItem> = ({
  id, username, firstname, lastname, email, handleEditUser, handleDeleteUser,
}: UsersItem) => (
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
      <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.USERS}>
        <IconButton
          onClick={() => handleEditUser(id)}
          type="button"
          aria-label="edit"
        >
          <Edit />
        </IconButton>
      </PermissionComponent>
    </TableCell>
    <TableCell component="td" colSpan={0.5}>
      <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.USERS}>
        <IconButton
          onClick={() => handleDeleteUser(id)}
          type="button"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </PermissionComponent>
    </TableCell>
  </TableRow>
);

export default UsersItem;
