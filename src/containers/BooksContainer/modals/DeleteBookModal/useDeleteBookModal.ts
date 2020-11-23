import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../../../../state/books';

type TUseDeleteBookModal = {
  onDeleteBook: () => void,
}

const useDeleteBookModal = (
  id: number | null | undefined,
  onClose: () => void,
): TUseDeleteBookModal => {
  const dispatch = useDispatch();

  const onDeleteBook = useCallback(() => {
    dispatch(booksActions.bookDeleteRequest({ id }));
    onClose();
  }, [dispatch, id, onClose]);
  return {
    onDeleteBook,
  };
};

export default useDeleteBookModal;
