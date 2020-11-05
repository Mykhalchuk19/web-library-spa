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
  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [searchValue, setSearchValue] = useState('');
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
    dispatch(userActions.usersListRequest({ page: newPage, limit, q: searchValue }));
  },
  [dispatch, limit, searchValue]);

  const changeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(userActions.usersListRequest({ page: 0, limit: parseInt(event.target.value, 10), q: searchValue }));
    },
    [dispatch, searchValue],
  );

  const usersForShow = useMemo(
    () => users.slice(page * limit, page * limit + limit),
    [users, limit, page],
  );

  const handleEditUser = useCallback((id) => {
    setOpenEditModal(true);
    setUserId(id);
  }, []);
  const closeEditModal = useCallback(() => setOpenEditModal(false), []);
  const handleDeleteUser = useCallback((id) => {
    setOpenDeleteModal(true);
    setUserId(id);
  }, []);
  const closeDeleteModal = useCallback(() => setOpenDeleteModal(false), []);
  const onUsersSearch = useCallback((event) => {
    setSearchValue(event.target.value);
    dispatch(userActions.usersListRequest({ q: event.target.value, limit }));
  }, [dispatch, limit, setSearchValue]);
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
    isOpenEditModal,
    isOpenDeleteModal,
    closeDeleteModal,
    userId,
    onUsersSearch,
  };
};

export default useUsers;
