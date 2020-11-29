import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../../state/user';

type TUseDeleteUserModal = {
   onDeleteUser: () => void,
}

const useDeleteUserModal = (
  userId: number | null,
  closeDeleteModal: () => void,
): TUseDeleteUserModal => {
  const dispatch = useDispatch();

  const onDeleteUser = useCallback(() => {
    dispatch(userActions.userDeleteRequest({ id: userId }));
    closeDeleteModal();
  }, [dispatch, userId, closeDeleteModal]);
  return {
    onDeleteUser,
  };
};

export default useDeleteUserModal;
