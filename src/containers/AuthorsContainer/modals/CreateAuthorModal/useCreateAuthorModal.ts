import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TAuthorsValues, TAuthorsModalsHook } from '../../../../interfaces/authorsInterfaces';
import { authorsActions } from '../../../../state/authors';
import rules from '../rules';

const useCreateAuthorModal = (onClose: () => void): TAuthorsModalsHook => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    resetForm,
  } = useFormik<TAuthorsValues>({
    initialValues: {
      firstname: '',
      lastname: '',
    },
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(authorsActions.authorCreateRequest(formValues));
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
    onCloseHandler,
  };
};

export default useCreateAuthorModal;
