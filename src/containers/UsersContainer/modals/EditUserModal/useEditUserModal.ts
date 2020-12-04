import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions, usersSelectors } from '../../../../state/users';
import { TUserValues, TUseUserEdit } from '../../../../interfaces/userInterfaces';
import rules from './rules';
import { TStore } from '../../../../state/storeInterfaces';
import { isDifferentValues } from '../../../../utils/helpers/commonHelpers';
import PushNotifications from '../../../../utils/helpers/pushNotifications';
import { SUCCESS_MESSAGES } from '../../../../constants';

const useEditUserModal = (id: number | null, closeEditModal: () => void): TUseUserEdit => {
  const dispatch = useDispatch();
  const user = useSelector((state: TStore) => usersSelectors.getUserById(state, id));
  const isPending = useSelector(usersSelectors.getPending);

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
      if (isDifferentValues(initialValues, formValues)) {
        dispatch(usersActions.userUpdateRequest({ ...formValues, id: user.id }));
        setSubmitting(isPending);
        closeEditModal();
      } else {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
        setSubmitting(false);
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
