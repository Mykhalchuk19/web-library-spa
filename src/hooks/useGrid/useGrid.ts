import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TUseGridProps, TUseGrid } from './interfaces';
import { debounce } from '../../utils/helpers/commonHelpers';

const useGrid = ({ limit, getListRequest }: TUseGridProps): TUseGrid => {
  const [searchValue, setSearchValue] = useState('');
  const [needSearch, setNeedSearch] = useState(false);
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
    setNeedSearch(true);
  }, [setSearchValue]);

  useEffect(() => {
    if (needSearch) {
      debounce(() => {
        dispatch(getListRequest({ q: searchValue, limit }));
      }, 800, 'searchFunc', needSearch);
    }
  }, [searchValue, limit, dispatch, getListRequest, needSearch]);

  return {
    changePage,
    changeRowsPerPage,
    onSearch,
  };
};

export default useGrid;
