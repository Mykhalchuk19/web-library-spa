import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { TBookValues, TBooksModalsHook } from '../../../../interfaces/booksInterfaces';
import { booksActions } from '../../../../state/books';
import rules from '../rules';
import { createFormData } from '../../../../utils/helpers/fileHelpers';
import { translateHelpers } from '../../../../utils/helpers';

const NONE = translateHelpers.t('None', 'common');

const useAddBookModal = (onClose: () => void): TBooksModalsHook => {
  const dispatch = useDispatch();

  const [defaultAuthors, setDefaultAuthors] = useState([{ label: NONE, value: null }]);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    setFieldValue,
    resetForm,
  } = useFormik<TBookValues>({
    initialValues: {
      title: '',
      short_description: '',
      city: '',
      year: '',
      publishing_house: '',
      edition: '',
      series: '',
      category_id: null,
      file: undefined,
      authors: [],
    },
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      const formData = createFormData(formValues);
      dispatch(booksActions.bookCreateRequest(formData));
      onClose();
      resetForm();
    },
  });

  const onCloseHandler = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  const setAuthors = useCallback((authors) => {
    setDefaultAuthors(authors);
  }, []);

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    setFieldValue,
    onCloseHandler,
    setAuthors,
    defaultAuthors,
  };
};

export default useAddBookModal;
