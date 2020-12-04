import React, { memo } from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';
import { TAuthorsItemTable } from '../../../../interfaces/authorsInterfaces';

const AuthorsItem: React.FC<TAuthorsItemTable> = ({
  id, firstname, lastname, books,
  handleEditAuthor, handleDeleteAuthor,
}: TAuthorsItemTable) => (
  <TableRow>
    <TableCell component="td">
      {id}
    </TableCell>
    <TableCell component="td">
      {firstname}
    </TableCell>
    <TableCell component="td">
      {lastname}
    </TableCell>
    <TableCell component="td" colSpan={2}>
      {books.map((book) => (
        <div key={book.id}>
          <Link className="grid__link" to={`/books/${book.id}`}>{book.title}</Link>
          <br />
          <br />
        </div>
      ))}
    </TableCell>
    <TableCell component="td" colSpan={1}>
      <div className="controls-wrapper">
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.AUTHORS}>
            <IconButton
              onClick={() => handleEditAuthor(id)}
              type="button"
              aria-label="edit"
            >
              <Edit />
            </IconButton>
          </PermissionComponent>
        </div>
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.AUTHORS}>
            <IconButton
              onClick={() => handleDeleteAuthor(id)}
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

export default memo(AuthorsItem);
