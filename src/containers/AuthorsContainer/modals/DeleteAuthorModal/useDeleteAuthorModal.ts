import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authorsActions } from '../../../../state/authors';

type TUseDeleteUserModal = {
  onDeleteAuthor: () => void,
}

const useDeleteAuthorModal = (id: number | null | undefined, onClose: () => void): TUseDeleteUserModal => {
  const dispatch = useDispatch();

  const onDeleteAuthor = useCallback(() => {
    dispatch(authorsActions.authorDeleteRequest({ id }));
    onClose();
  }, [dispatch, id, onClose]);
  return {
    onDeleteAuthor,
  };
};

export default useDeleteAuthorModal;
