import React, { memo } from 'react';
import {
  Table,
  TableBody,
  TableCell, TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { isEmpty } from 'ramda';
import { AUTHORS_FIELDS } from '../../../../constants';
import { Form } from '../../../../components';
import { TAuthorsTable } from '../../../../interfaces/authorsInterfaces';
import AuthorsItem from '../AuthorsItem/AuthorsItem';
import AuthorsPagination from '../AuthorsPagination/AuthorsPagination';

const AuthorsTable: React.FC<TAuthorsTable> = ({
  authorsForShow,
  limit,
  count,
  page,
  changePage,
  changeRowsPerPage,
  t,
  onAuthorsSearch,
  handleEditAuthor,
  handleDeleteAuthor,
} : TAuthorsTable) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {AUTHORS_FIELDS.map(({ id, field }) => (
            <TableCell
              key={id}
            >
              {t(field)}
            </TableCell>
          ))}
          <TableCell colSpan={2}>
            <Form.CustomInput
              id="authors-search"
              label={t('Search')}
              error=""
              inputProps={{
                onChange: (value: string) => onAuthorsSearch(value),
              }}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      { !isEmpty(authorsForShow) && (
      <>
        <TableBody>
          {
          authorsForShow.map(({
            id, firstname, lastname, books,
          }) => (
            <AuthorsItem
              key={id}
              id={id}
              firstname={firstname}
              lastname={lastname}
              books={books}
              handleEditAuthor={handleEditAuthor}
              handleDeleteAuthor={handleDeleteAuthor}
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
              ActionsComponent={AuthorsPagination}
            />
          </TableRow>
        </TableFooter>
      </>
      )}
    </Table>
  </TableContainer>
);

export default memo(AuthorsTable);
