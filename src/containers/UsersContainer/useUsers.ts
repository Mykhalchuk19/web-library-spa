import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { usersActions, usersSelectors } from '../../state/users';
import { TUseUsers } from '../../interfaces/userInterfaces';

const useUsers = (): TUseUsers => {
  const dispatch = useDispatch();
  const usersList = useSelector(usersSelectors.getUsersList);
  const isPending = useSelector(usersSelectors.getPending);
  const { t } = useTranslation(['common']);

  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const {
    users, limit, page, count,
  } = usersList;
  useEffect(() => {
    dispatch(usersActions.usersListRequest());
  }, [dispatch]);

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
  return {
    usersForShow,
    limit,
    page,
    count,
    handleEditUser,
    handleDeleteUser,
    t,
    closeEditModal,
    isOpenEditModal,
    isOpenDeleteModal,
    closeDeleteModal,
    userId,
    isPending,
  };
};

export default useUsers;
