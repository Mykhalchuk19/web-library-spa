import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TUseBooks, TBookForMap } from '../../interfaces/booksInterfaces';
import { booksActions, booksSelectors } from '../../state/books';

import { convertEmptyValueForShow } from '../../utils/helpers/convertDataHelpers';

const useBooks = (): TUseBooks => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const booksList = useSelector(booksSelectors.getBooksList);
  const {
    books, limit, page, count,
  } = booksList;

  useEffect(() => {
    dispatch(booksActions.booksGetRequest());
  }, [dispatch]);
  const booksForShow = useMemo(
    () => books
      .map(({
        id,
        title,
        short_description: shortDescription,
        year,
        city,
        edition,
        file,
        category,
      }: TBookForMap) => ({
        id: convertEmptyValueForShow(id),
        title: convertEmptyValueForShow(title),
        short_description: convertEmptyValueForShow(shortDescription),
        year: convertEmptyValueForShow(year),
        city: convertEmptyValueForShow(city),
        edition: convertEmptyValueForShow(edition),
        file: file.filename,
        category: category ? category.title : convertEmptyValueForShow(' '),
      }))
      .slice(page * limit, page * limit + limit),
    [books, limit, page],
  );

  const [isOpenAddBookModal, setOpenAddBookModal] = useState(false);

  const openAddBookModalHandler = useCallback(() => {
    setOpenAddBookModal(true);
  }, [setOpenAddBookModal]);

  const closeAddBookModalHandler = useCallback(() => {
    setOpenAddBookModal(false);
  }, [setOpenAddBookModal]);

  const [isOpenEditBookModal, setOpenEditBookModal] = useState(false);
  const [isOpenDeleteBookModal, setOpenDeleteBookModal] = useState(false);
  const [bookId, setBookId] = useState(null);

  const handleEditBook = useCallback((id) => {
    setOpenEditBookModal(true);
    setBookId(id);
  }, []);

  const closeEditBookModal = useCallback(() => setOpenEditBookModal(false), []);

  const handleDeleteBook = useCallback((id) => {
    setOpenDeleteBookModal(true);
    setBookId(id);
  }, []);

  const closeDeleteBookModal = useCallback(() => setOpenDeleteBookModal(false), []);

  return {
    isOpenAddBookModal,
    openAddBookModalHandler,
    closeAddBookModalHandler,
    t,
    booksForShow,
    limit,
    count,
    page,
    handleEditBook,
    handleDeleteBook,
    closeEditBookModal,
    isOpenEditBookModal,
    isOpenDeleteBookModal,
    closeDeleteBookModal,
    bookId,
  };
};

export default useBooks;
