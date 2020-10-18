import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  LastPage, FirstPage, KeyboardArrowLeft, KeyboardArrowRight,
} from '@material-ui/icons';
import UseUsersPagination, { IProps } from './UseUsersPagination';

const UsersPagination: React.FC<IProps> = (props: IProps) => {
  const {
    page,
    count,
    rowsPerPage,
    handlePreviousPage,
    handleNextPage,
    handleFirstPage,
    handleLastPage,
  } = UseUsersPagination(props);
  return (
    <>
      <IconButton
        onClick={handleFirstPage}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handlePreviousPage}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </>
  );
};

export default UsersPagination;
