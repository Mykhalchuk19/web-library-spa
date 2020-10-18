import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions, userSelectors } from '../../state/user';
import { userInterfaces } from '../../interfaces';

interface IUseUsers {
  usersForShow: Array<userInterfaces.UserItem>,
  limit: number,
  page: number,
  count: number,
  changePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void,
  changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const useUsers = (): IUseUsers => {
  const dispatch = useDispatch();
  const usersList = useSelector(userSelectors.getUsersList);
  const {
    users, limit, page, count,
  } = usersList;
  useEffect(() => {
    dispatch(userActions.usersListRequest());
  }, [dispatch]);
  // eslint-disable-next-line max-len
  const changePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => { dispatch(userActions.usersListRequest({ page: newPage })); }, [dispatch]);
  // eslint-disable-next-line max-len
  const changeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { dispatch(userActions.usersListRequest({ page: 0, limit: parseInt(event.target.value, 10) })); }, [dispatch]);
  // eslint-disable-next-line max-len
  const usersForShow = useMemo(() => users.slice(page * limit, page * limit + limit), [users, limit, page]);
  return {
    usersForShow,
    limit,
    page,
    count,
    changePage,
    changeRowsPerPage,
  };
};

export default useUsers;
