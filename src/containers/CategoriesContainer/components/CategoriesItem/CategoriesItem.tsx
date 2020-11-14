import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';
import { CategoriesItemTable } from '../../../../interfaces/categoriesInterfaces';

const CategoriesItem: React.FC<CategoriesItemTable> = ({
  id, title, shortDescription, author,
  // handleEditCategory, handleDeleteCategory,
}: CategoriesItemTable) => (
  <TableRow key={id}>
    <TableCell component="td">
      {id}
    </TableCell>
    <TableCell component="td">
      {title}
    </TableCell>
    <TableCell component="td">
      {shortDescription}
    </TableCell>
    <TableCell component="td">
      {author}
    </TableCell>
    <TableCell component="td" colSpan={0.5}>
      <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.USERS}>
        <IconButton
          onClick={() => {

          }}
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
          onClick={() => {}}
          type="button"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </PermissionComponent>
    </TableCell>
  </TableRow>
);

export default CategoriesItem;
