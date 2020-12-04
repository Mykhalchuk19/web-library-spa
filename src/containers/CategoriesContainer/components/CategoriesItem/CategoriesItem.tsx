import React, { memo } from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';
import { CategoriesItemTable } from '../../../../interfaces/categoriesInterfaces';

const CategoriesItem: React.FC<CategoriesItemTable> = ({
  id, title, shortDescription, description, author,
  handleEditCategory, handleDeleteCategory,
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
      {description}
    </TableCell>
    <TableCell component="td">
      {author}
    </TableCell>
    <TableCell component="td" colSpan={1}>
      <div className="controls-wrapper">
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.CATEGORIES}>
            <IconButton
              onClick={() => handleEditCategory(id)}
              type="button"
              aria-label="edit"
            >
              <Edit />
            </IconButton>
          </PermissionComponent>
        </div>
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.CATEGORIES}>
            <IconButton
              onClick={() => handleDeleteCategory(id)}
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

export default memo(CategoriesItem);
