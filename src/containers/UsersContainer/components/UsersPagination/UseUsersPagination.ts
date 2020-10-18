import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../../state/user';

export interface IProps {
    count: number,
    page: number,
    rowsPerPage: number,
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
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
  // eslint-disable-next-line max-len
  const handleNextPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => { onChangePage(event, page + 1); }, [page]);
  // eslint-disable-next-line max-len
  const handlePreviousPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => { onChangePage(event, page - 1); }, [page]);
  // eslint-disable-next-line max-len
  const handleLastPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => { onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1)); }, [count, rowsPerPage]);
  // eslint-disable-next-line max-len
  const handleFirstPage = useCallback((event: React.MouseEvent<HTMLButtonElement>) => { onChangePage(event, 0); }, []);

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
