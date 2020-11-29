import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TStore } from '../../state/storeInterfaces';
import { booksActions, booksSelectors } from '../../state/books';
import { TUseInfoOfBook } from '../../interfaces/booksInterfaces';

const useInfoOfBook = (): TUseInfoOfBook => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const book = useSelector((state: TStore) => booksSelectors.getBookById(state, parseInt(id, 10)));
  useEffect(() => {
    if (!book || !book.id) {
      dispatch(booksActions.bookGetRequest({ id }));
    }
  }, [book, id, dispatch]);
  return { book, t };
};

export default useInfoOfBook;
