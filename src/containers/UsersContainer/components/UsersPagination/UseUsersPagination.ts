import React, { useCallback } from 'react';

export interface IProps {
    count: number,
    page: number,
    rowsPerPage: number,
    onChangePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void;
}

interface IUseUsersPagination {
    rowsPerPage: number,
    page: number,
    count: number,
    handleNextPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handlePreviousPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleLastPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleFirstPage: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const UseUsersPagination = ({
  page, count, rowsPerPage, onChangePage,
}: IProps): IUseUsersPagination => {
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

export default UseUsersPagination;
