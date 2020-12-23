import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { isEmpty } from 'ramda';
import { TBooksModalsHook, TBookEditValues } from '../../../../interfaces/booksInterfaces';
import { booksActions, booksSelectors } from '../../../../state/books';
import rules from './rules';
import { createFormData } from '../../../../utils/helpers/fileHelpers';
import { TStore } from '../../../../state/storeInterfaces';
import { isDifferentValues } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';
import { TAuthorItem } from '../../../../interfaces/authorsInterfaces';
import { TAsyncOption } from '../../../../interfaces/componentInterfaces';

const useEditBookModal = (
  id: number | null | undefined,
  onClose: () => void,
): TBooksModalsHook => {
  const dispatch = useDispatch();

  const book = useSelector((state: TStore) => booksSelectors.getBookById(state, id));

  const [needRequest, setNeedRequest] = useState(false);
  const [defaultAuthors, setDefaultAuthors] = useState(useMemo(() => (!isEmpty(book.authors)
    ? (book.authors as Array<TAuthorItem>).map((author: TAuthorItem) => ({
      label: `${author.firstname} ${author.lastname}`,
      value: author.id,
    })) : [{ label: 'None', value: null }]), [book.authors]));

  const [categoryId, setCategoryId] = useState(useMemo(() => book.category_id || null, [book.category_id]));

  const initialValues = {
    title: book.title || '',
    short_description: book.short_description || '',
    city: book.city || '',
    year: book.year || '',
    publishing_house: book.publishing_house || '',
    edition: book.edition || '',
    series: book.series || '',
    category_id: categoryId,
    file_id: book.file_id,
    file: undefined,
    authors: !isEmpty(defaultAuthors)
      ? (defaultAuthors as Array<TAsyncOption>).map((option: TAsyncOption) => option.value) : [],
  };

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    setFieldValue,
    resetForm,
    setSubmitting,
  } = useFormik<TBookEditValues>({
    initialValues,
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      if (isDifferentValues(initialValues, formValues, needRequest)) {
        const formData = createFormData(formValues);
        dispatch(booksActions.bookUpdateRequest({ formData, id: book.id }));
        onClose();
        resetForm();
      } else {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
      }
    },
  });
  const setAuthors = useCallback((authors) => {
    setDefaultAuthors(authors);
    setNeedRequest(true);
  }, []);

  const setCategory = useCallback((category) => {
    setCategoryId(category);
    setNeedRequest(true);
  }, []);

  const onCloseHandler = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  useEffect(() => {
    setDefaultAuthors(!isEmpty(book.authors)
      ? (book.authors as Array<TAuthorItem>).map((author: TAuthorItem) => ({
        label: `${author.firstname} ${author.lastname}`,
        value: author.id,
      })) : [{ label: 'None', value: null }]);

    return () => {
      setNeedRequest(false);
    };
  }, [book.authors]);
  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    setFieldValue,
    onCloseHandler,
    defaultAuthors,
    setAuthors,
    setCategory,
  };
};

export default useEditBookModal;
