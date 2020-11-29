import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../../../state/categories';

type TUseDeleteUserModal = {
  onDeleteCategory: () => void,
}

const useDeleteCategoryModal = (
  id: number | null | undefined,
  onClose: () => void,
): TUseDeleteUserModal => {
  const dispatch = useDispatch();

  const onDeleteCategory = useCallback(() => {
    dispatch(categoriesActions.categoryDeleteRequest({ id }));
    onClose();
  }, [dispatch, id, onClose]);
  return {
    onDeleteCategory,
  };
};

export default useDeleteCategoryModal;
