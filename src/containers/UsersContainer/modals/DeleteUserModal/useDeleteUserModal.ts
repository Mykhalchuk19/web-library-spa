import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../../state/users';

type TUseDeleteUserModal = {
   onDeleteUser: () => void,
}

const useDeleteUserModal = (
  userId: number | null,
  closeDeleteModal: () => void,
): TUseDeleteUserModal => {
  const dispatch = useDispatch();

  const onDeleteUser = useCallback(() => {
    dispatch(usersActions.userDeleteRequest({ id: userId }));
    closeDeleteModal();
  }, [dispatch, userId, closeDeleteModal]);
  return {
    onDeleteUser,
  };
};

export default useDeleteUserModal;
