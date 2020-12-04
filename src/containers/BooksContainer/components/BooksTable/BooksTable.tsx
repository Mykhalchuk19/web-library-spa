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
import { BOOKS_FIELDS } from '../../../../constants';
import { Form, Loader } from '../../../../components';
import { TBooksTable } from '../../../../interfaces/booksInterfaces';
import BooksItem from '../BooksItem/BooksItem';
import BooksPagination from '../BooksPagination/BooksPagination';

const BooksTable: React.FC<TBooksTable> = ({
  booksForShow,
  limit,
  count,
  page,
  changePage,
  changeRowsPerPage,
  t,
  onBooksSearch,
  handleEditBook,
  handleDeleteBook,
  isPending,
} : TBooksTable) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {BOOKS_FIELDS.map(({ id, field }) => (
            <TableCell
              key={id}
            >
              {t(field)}
            </TableCell>
          ))}
          <TableCell colSpan={3}>
            <Form.CustomInput
              id="books-search"
              label={t('Search')}
              error=""
              inputProps={{
                onChange: (value: string) => onBooksSearch(value),
              }}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      { !isPending ? (
        <>
          <TableBody>
            {
          booksForShow.map(({
            id, title, short_description: shortDescription, year, city, file, category, authors,
          }) => (
            <BooksItem
              key={id}
              id={id}
              title={title}
              shortDescription={shortDescription}
              year={year}
              city={city}
              file={file}
              category={category}
              authors={authors}
              handleEditBook={handleEditBook}
              handleDeleteBook={handleDeleteBook}
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
                colSpan={11}
                ActionsComponent={BooksPagination}
              />
            </TableRow>
          </TableFooter>
        </>
      ) : (<Loader secondary />)}
    </Table>
  </TableContainer>
);

export default memo(BooksTable);
