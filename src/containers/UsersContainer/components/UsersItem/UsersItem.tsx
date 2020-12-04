import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Avatar, PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';
import { USER_STATUSES } from '../../../../constants/user';
import { UsersItemTable } from '../../../../interfaces/userInterfaces';
import { getLinkForDisplayImage } from '../../../../utils/helpers/fileHelpers';

const UsersItem: React.FC<UsersItemTable> = ({
  id, username, firstname, lastname, email, status, filename, handleEditUser, handleDeleteUser, t,
}: UsersItemTable) => (
  <TableRow key={id}>
    <TableCell component="td">
      {id}
    </TableCell>
    <TableCell component="td">
      <Avatar
        className="grid__avatar"
        src={getLinkForDisplayImage(filename)}
        text={t('Avatar')}
      />
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
    <TableCell component="td">
      {t(USER_STATUSES[status])}
    </TableCell>
    <TableCell component="td" colSpan={1}>
      <div className="controls-wrapper">
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.USERS}>
            <IconButton
              onClick={() => handleEditUser(id)}
              type="button"
              aria-label="edit"
            >
              <Edit />
            </IconButton>
          </PermissionComponent>
        </div>
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.USERS}>
            <IconButton
              onClick={() => handleDeleteUser(id)}
              type="button"
              aria-label="delete"
            >
              <Delete />
            </IconButton>
          </PermissionComponent>
        </div>
      </div>
    </TableCell>
  </TableRow>
);

export default UsersItem;
