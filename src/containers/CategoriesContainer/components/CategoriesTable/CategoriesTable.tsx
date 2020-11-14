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
import { CATEGORIES_FIELDS } from '../../../../constants';
import { Form } from '../../../../components';
import { TCategoriesTable } from '../../../../interfaces/categoriesInterfaces';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import CategoriesPagination from '../CategoriesPagination/CategoriesPagination';

const CategoriesTable: React.FC<TCategoriesTable> = ({
  categoriesForShow,
  limit,
  count,
  page,
  changePage,
  changeRowsPerPage,
  t,
  onCategoriesSearch,
} : TCategoriesTable) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {CATEGORIES_FIELDS.map(({ id, field }) => (
            <TableCell
              key={id}
            >
              {t(field)}
            </TableCell>
          ))}
          <TableCell colSpan={2}>
            <Form.CustomInput
              id="categories-search"
              label={t('Search')}
              error=""
              inputProps={{
                onChange: (value: string) => onCategoriesSearch(value),
              }}
            />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          categoriesForShow.map(({
            id, title, short_description: shortDescription, author,
          }) => (
            <CategoriesItem
              key={id}
              id={id}
              title={title}
              shortDescription={shortDescription}
              author={author}
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
            ActionsComponent={CategoriesPagination}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
);

export default CategoriesTable;