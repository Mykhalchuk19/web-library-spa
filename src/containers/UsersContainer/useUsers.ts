import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions, userSelectors } from '../../state/user';
import { userInterfaces } from '../../interfaces';

interface IUseUsers {
  users: Array<userInterfaces.UserItem>,
  limit: number,
  page: number,
  count: number,
  changePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
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
  return {
    users,
    limit,
    page,
    count,
    changePage,
  };
};

export default useUsers;
