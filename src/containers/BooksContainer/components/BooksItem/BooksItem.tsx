import React, { memo } from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { PermissionComponent } from '../../../../components';
import { ACTIONS, MODULES } from '../../../../constants/permissions';
import { BooksItemTable } from '../../../../interfaces/booksInterfaces';
import { fileHelpers, translateHelpers } from '../../../../utils/helpers';

const DOWNLOAD_LINK_TEXT = 'Download';

const BooksItem: React.FC<BooksItemTable> = ({
  id, title, shortDescription, year, city, file, category, authors,
  handleEditBook, handleDeleteBook,
}: BooksItemTable) => (
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
      {year}
    </TableCell>
    <TableCell component="td">
      {city}
    </TableCell>
    <TableCell component="td">
      {category}
    </TableCell>
    <TableCell component="td">
      {authors.map((author) => (
        <>
          <span>{author}</span>
          <br />
        </>
      ))}
    </TableCell>
    <TableCell component="td">
      <a
        className="download__link"
        href={fileHelpers.getLinkForDownloadBook(file)}
        download
      >
        {translateHelpers.t(`${DOWNLOAD_LINK_TEXT}`, 'common')}
      </a>
    </TableCell>
    <TableCell component="td">
      <Link
        className="grid__link"
        to={`/books/${id}`}
      >
        {translateHelpers.t('Detail info', 'common')}
      </Link>
    </TableCell>
    <TableCell component="td" colSpan={0.5}>
      <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.BOOKS}>
        <IconButton
          onClick={() => handleEditBook(id)}
          type="button"
          aria-label="edit"
        >
          <Edit />
        </IconButton>
      </PermissionComponent>
    </TableCell>
    <TableCell component="td" colSpan={0.5}>
      <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.BOOKS}>
        <IconButton
          onClick={() => handleDeleteBook(id)}
          type="button"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </PermissionComponent>
    </TableCell>
  </TableRow>
);

export default memo(BooksItem);
