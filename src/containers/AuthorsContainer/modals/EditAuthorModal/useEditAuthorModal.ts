import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { TAuthorsValues, TAuthorsModalsHook } from '../../../../interfaces/authorsInterfaces';
import { authorsActions, authorsSelectors } from '../../../../state/authors';
import rules from '../rules';
import { TStore } from '../../../../state/storeInterfaces';
import { checkValuesBeforeRequest } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';

const useEditAuthorModal = (
  id: number | null | undefined,
  onClose: () => void,
): TAuthorsModalsHook => {
  const dispatch = useDispatch();
  const author = useSelector((state: TStore) => authorsSelectors.getAuthorById(state, id));

  const initialValues = {
    firstname: author.firstname,
    lastname: author.lastname,
  };

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
    resetForm,
    setSubmitting,
  } = useFormik<TAuthorsValues>({
    initialValues,
    validateOnChange: true,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      if (checkValuesBeforeRequest(initialValues, formValues)) {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
      } else {
        console.log(formValues);
        dispatch(authorsActions.authorUpdateRequest({ ...formValues, id: author.id }));
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
    onCloseHandler,
  };
};

export default useEditAuthorModal;
