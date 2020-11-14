import React from 'react';

export type TPaginationProps = {
    count: number,
    page: number,
    rowsPerPage: number,
    onChangePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void;
}

export type TUsePagination = {
    rowsPerPage: number,
    page: number,
    count: number,
    handleNextPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handlePreviousPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleLastPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleFirstPage: (event: React.MouseEvent<HTMLButtonElement>) => void
}
