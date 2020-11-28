import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TBookValues, TBooksModalsHook } from '../../../../interfaces/booksInterfaces';
import { booksActions } from '../../../../state/books';
import rules from '../rules';
import { createFormData } from '../../../../utils/helpers/fileHelpers';

const useAddBookModal = (onClose: () => void): TBooksModalsHook => {
  const dispatch = useDispatch();
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

export default useAddBookModal;
