import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TCategoriesValues, TCategoriesModalsHook } from '../../../../interfaces/categoriesInterfaces';
import { categoriesActions, categoriesSelectors } from '../../../../state/categories';
import rules from '../rules';
import { TStore } from '../../../../state/storeInterfaces';
import { checkValuesBeforeRequest } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';

const useEditCategoryModal = (id: number | null | undefined, onClose: () => void): TCategoriesModalsHook => {
  const dispatch = useDispatch();
  const category = useSelector((state: TStore) => categoriesSelectors.getCategoryById(state, id));

  const initialValues = {
    title: category.title,
    short_description: category.short_description || '',
    description: category.description || '',
    parent_id: category.parent_id,
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
  } = useFormik<TCategoriesValues>({
    initialValues,
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      if (checkValuesBeforeRequest(initialValues, formValues)) {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
      } else {
        dispatch(categoriesActions.categoryUpdateRequest({ ...formValues, id: category.id }));
        resetForm();
        onClose();
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

export default useEditCategoryModal;
