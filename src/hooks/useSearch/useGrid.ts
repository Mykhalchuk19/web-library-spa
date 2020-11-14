import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TUseGridProps, TUseGrid } from './interfaces';

const useGrid = ({ limit, getListRequest }: TUseGridProps): TUseGrid => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const changePage = useCallback((
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(getListRequest({ page: newPage, limit, q: searchValue }));
  },
  [dispatch, limit, searchValue, getListRequest]);

  const changeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(getListRequest({
        page: 0,
        limit: parseInt(event.target.value, 10),
        q: searchValue,
      }));
    },
    [dispatch, searchValue, getListRequest],
  );

  const onSearch = useCallback((event) => {
    setSearchValue(event.target.value);
    dispatch(getListRequest({ q: event.target.value, limit }));
  }, [dispatch, limit, setSearchValue, getListRequest]);

  return {
    changePage,
    changeRowsPerPage,
    onSearch,
  };
};

export default useGrid;
