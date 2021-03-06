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
        <div key={author}>
          <span>{author}</span>
          <br />
          <br />
        </div>
      ))}
    </TableCell>
    <TableCell component="td">
      {file ? (
        <a
          className="download__link"
          href={fileHelpers.getLinkForDownloadBook(file)}
          download
        >
          {translateHelpers.t(`${DOWNLOAD_LINK_TEXT}`, 'common')}
        </a>
      ) : <span>{translateHelpers.t('No file', 'common')}</span>}
    </TableCell>
    <TableCell component="td">
      <Link
        className="grid__link"
        to={`/books/${id}`}
      >
        {translateHelpers.t('Detail info', 'common')}
      </Link>
    </TableCell>
    <TableCell component="td" colSpan={1}>
      <div className="controls-wrapper">
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.BOOKS}>
            <IconButton
              onClick={() => handleEditBook(id)}
              type="button"
              aria-label="edit"
            >
              <Edit />
            </IconButton>
          </PermissionComponent>
        </div>
        <div className="controls-wrapper__column">
          <PermissionComponent action={ACTIONS.UPDATE} module={MODULES.BOOKS}>
            <IconButton
              onClick={() => handleDeleteBook(id)}
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

export default memo(BooksItem);
