import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TUseBooks } from '../../interfaces/booksInterfaces';

const useBooks = (): TUseBooks => {
  const { t } = useTranslation(['common']);
  const [isOpenAddBookModal, setOpenAddBookModal] = useState(false);

  const openAddBookModalHandler = useCallback(() => {
    setOpenAddBookModal(true);
  }, [setOpenAddBookModal]);

  const closeAddBookModalHandler = useCallback(() => {
    setOpenAddBookModal(false);
  }, [setOpenAddBookModal]);
  return {
    isOpenAddBookModal,
    openAddBookModalHandler,
    closeAddBookModalHandler,
    t,
  };
};

export default useBooks;
