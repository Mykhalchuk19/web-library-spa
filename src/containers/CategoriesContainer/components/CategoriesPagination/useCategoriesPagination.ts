import React, { useCallback } from 'react';
import { TCategoriesPaginationProps, TUseCategoriesPagination } from '../../../../interfaces/categoriesInterfaces';

const UseCategoriesPagination = ({
  page, count, rowsPerPage, onChangePage,
}: TCategoriesPaginationProps): TUseCategoriesPagination => {
  const handleNextPage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChangePage(event, page + 1);
    },
    [page, onChangePage],
  );
  const handlePreviousPage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChangePage(event, page - 1);
    },
    [page, onChangePage],
  );
  const handleLastPage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    },
    [count, rowsPerPage, onChangePage],
  );
  const handleFirstPage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChangePage(event, 0);
    },
    [onChangePage],
  );

  return {
    rowsPerPage,
    page,
    count,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
    handleFirstPage,
  };
};

export default UseCategoriesPagination;
