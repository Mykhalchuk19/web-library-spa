import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { TCategoriesValues, TCategoriesModalsHook } from '../../../../interfaces/categoriesInterfaces';
import { categoriesActions, categoriesSelectors } from '../../../../state/categories';
import rules from '../rules';
import { TStore } from '../../../../state/storeInterfaces';

const useEditCategoryModal = (id: number | null | undefined, onClose: () => void): TCategoriesModalsHook => {
  const dispatch = useDispatch();
  const category = useSelector((state: TStore) => categoriesSelectors.getCategoryById(state, id));
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
      title: category.title,
      short_description: category.short_description || '',
      description: category.description || '',
      parent_id: category.parent_id,
    },
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(categoriesActions.categoryUpdateRequest({ ...formValues, id: category.id }));
      resetForm();
      onClose();
    },
  });
  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    setFieldValue,
  };
};

export default useEditCategoryModal;
