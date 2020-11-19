import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelectors } from '../../../../state/user';
import { TUserValues, TUseUserEdit } from '../../../../interfaces/userInterfaces';
import rules from './rules';
import { TStore } from '../../../../state/storeInterfaces';
import { checkValuesBeforeRequest } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';

const useEditUserModal = (id: number | null, closeEditModal: () => void): TUseUserEdit => {
  const dispatch = useDispatch();
  const user = useSelector((state: TStore) => userSelectors.getUserById(state, id));
  const isPending = useSelector(userSelectors.getPending);

  const initialValues = {
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    type: user.type,
  };

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<TUserValues>({
    initialValues,
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      if (checkValuesBeforeRequest(initialValues, formValues)) {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
      } else {
        dispatch(userActions.userUpdateRequest({ ...formValues, id: user.id }));
        setSubmitting(isPending);
        closeEditModal();
      }
    },
  });
  return {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
  };
};

export default useEditUserModal;
