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
  handleEditCategory,
  handleDeleteCategory,
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
      { !isEmpty(categoriesForShow) && (
      <>
        <TableBody>
          {
          categoriesForShow.map(({
            id, title, shortDescription, description, author,
          }) => (
            <CategoriesItem
              key={id}
              id={id}
              title={title}
              shortDescription={shortDescription}
              description={description}
              author={author}
              handleEditCategory={handleEditCategory}
              handleDeleteCategory={handleDeleteCategory}
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
      </>
      )}
    </Table>
  </TableContainer>
);

export default memo(CategoriesTable);
