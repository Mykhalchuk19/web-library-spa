import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userActions, userSelectors } from '../../state/user';
import { IUseUsers } from '../../interfaces/userInterfaces';

const useUsers = (): IUseUsers => {
  const dispatch = useDispatch();
  const usersList = useSelector(userSelectors.getUsersList);
  const { t } = useTranslation(['common']);
  const [isOpen, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const {
    users, limit, page, count,
  } = usersList;
  useEffect(() => {
    dispatch(userActions.usersListRequest());
  }, [dispatch]);

  const changePage = useCallback((
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(userActions.usersListRequest({ page: newPage, limit }));
  },
  [dispatch, limit]);

  const changeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(userActions.usersListRequest({ page: 0, limit: parseInt(event.target.value, 10) }));
    },
    [dispatch],
  );

  const usersForShow = useMemo(
    () => users.slice(page * limit, page * limit + limit),
    [users, limit, page],
  );

  const handleEditUser = useCallback((id) => {
    setOpen(true);
    setUserId(id);
  }, []);
  const handleDeleteUser = useCallback((id) => {}, []);
  const closeEditModal = useCallback(() => setOpen(false), []);
  return {
    usersForShow,
    limit,
    page,
    count,
    changePage,
    changeRowsPerPage,
    handleEditUser,
    handleDeleteUser,
    t,
    closeEditModal,
    isOpen,
    userId,
  };
};

export default useUsers;
