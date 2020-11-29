import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TUseAuthors, TAuthorForMapItem } from '../../interfaces/authorsInterfaces';
import { authorsActions, authorsSelectors } from '../../state/authors';
import { convertEmptyValueForShow } from '../../utils/helpers/convertDataHelpers';

const useAuthors = (): TUseAuthors => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const authorsList = useSelector(authorsSelectors.getAuthorsList);
  const {
    authors, limit, page, count,
  } = authorsList;
  useEffect(() => {
    dispatch(authorsActions.authorsGetRequest());
  }, [dispatch]);
  const authorsForShow = useMemo(
    () => authors
      .map(({
        id,
        firstname,
        lastname,
        books,
      }: TAuthorForMapItem) => ({
        id: convertEmptyValueForShow(id),
        firstname: convertEmptyValueForShow(firstname),
        lastname: convertEmptyValueForShow(lastname),
        books: books || [],
      }))
      .slice(page * limit, page * limit + limit),
    [authors, limit, page],
  );

  const [isOpenCreateAuthorModal, setOpenCreateAuthorModal] = useState(false);

  const openCreateAuthorModalHandler = useCallback(() => {
    setOpenCreateAuthorModal(true);
  }, [setOpenCreateAuthorModal]);

  const closeCreateAuthorModalHandler = useCallback(() => {
    setOpenCreateAuthorModal(false);
  }, [setOpenCreateAuthorModal]);

  const [isOpenEditAuthorModal, setOpenEditAuthorModal] = useState(false);
  const [isOpenDeleteAuthorModal, setOpenDeleteAuthorModal] = useState(false);
  const [authorId, setAuthorId] = useState(null);

  const handleEditAuthor = useCallback((id) => {
    setOpenEditAuthorModal(true);
    setAuthorId(id);
  }, []);

  const closeEditAuthorModal = useCallback(() => setOpenEditAuthorModal(false), []);

  const handleDeleteAuthor = useCallback((id) => {
    setOpenDeleteAuthorModal(true);
    setAuthorId(id);
  }, []);

  const closeDeleteAuthorModal = useCallback(() => setOpenDeleteAuthorModal(false), []);

  return {
    openCreateAuthorModalHandler,
    closeCreateAuthorModalHandler,
    isOpenCreateAuthorModal,
    t,
    authorsForShow,
    limit,
    count,
    page,
    handleEditAuthor,
    handleDeleteAuthor,
    closeEditAuthorModal,
    isOpenEditAuthorModal,
    isOpenDeleteAuthorModal,
    closeDeleteAuthorModal,
    authorId,
  };
};

export default useAuthors;
