import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TBooksModalsHook, TBookEditValues } from '../../../../interfaces/booksInterfaces';
import { booksActions, booksSelectors } from '../../../../state/books';
import rules from './rules';
import { createFormData } from '../../../../utils/helpers/fileHelpers';
import { TStore } from '../../../../state/storeInterfaces';
import { checkValuesBeforeRequest } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';

const useEditBookModal = (id: number | null | undefined, onClose: () => void): TBooksModalsHook => {
  const dispatch = useDispatch();
  const book = useSelector((state: TStore) => booksSelectors.getBookById(state, id));

  const initialValues = {
    title: book.title || '',
    short_description: book.short_description || '',
    city: book.city || '',
    year: book.year || '',
    publishing_house: book.publishing_house || '',
    edition: book.edition || '',
    series: book.series || '',
    category_id: book.category_id,
    file_id: book.file_id,
    file: undefined,
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
      console.log(checkValuesBeforeRequest(initialValues, formValues));
      if (checkValuesBeforeRequest(initialValues, formValues)) {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
      } else {
        const formData = createFormData(formValues);
        dispatch(booksActions.bookUpdateRequest({ formData, id: book.id }));
        onClose();
        resetForm();
      }
    },
  });

  const onCloseHandler = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);
  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    setFieldValue,
    onCloseHandler,
  };
};

export default useEditBookModal;
