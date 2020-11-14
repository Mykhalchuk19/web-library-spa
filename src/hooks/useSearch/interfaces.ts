import React from 'react';
import { Action } from 'redux';

export type TUseGridProps = {
    limit: number,
    getListRequest: (...args: any[]) => Action<unknown>
}

export type TUseGrid = {
    changePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void,
    changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onSearch: (value?: string) => void,
}
