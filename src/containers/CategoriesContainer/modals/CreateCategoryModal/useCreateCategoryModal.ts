import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TCategoriesValues, TCategoriesModalsHook } from '../../../../interfaces/categoriesInterfaces';
import { categoriesActions } from '../../../../state/categories';
import rules from '../rules';

const useCreateCategoryModal = (onClose: () => void): TCategoriesModalsHook => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    setFieldValue,
    resetForm,
  } = useFormik<TCategoriesValues>({
    initialValues: {
      title: '',
      short_description: '',
      description: '',
      parent_id: null,
    },
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(categoriesActions.categoryCreateRequest(formValues));
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

export default useCreateCategoryModal;
