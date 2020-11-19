import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { find, propEq } from 'ramda';
import { authActions, authSelectors } from '../../state/auth';
import { TUserValues, TUseProfile } from '../../interfaces/userInterfaces';
import rules from './rules';
import { permissions, SUCCESS_MESSAGES } from '../../constants';
import { checkValuesBeforeRequest } from '../../utils/helpers/commonHelpers';
import PushNotifications from '../../utils/helpers/pushNotifications';

const { ROLES_LIST } = permissions;

const useProfile = (): TUseProfile => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const user = useSelector(authSelectors.getUserData);
  const isPending = useSelector(authSelectors.getPending);

  const initialValues = {
    username: user.username || '',
    firstname: user.firstname || '',
    lastname: user.lastname || '',
    email: user.email || '',
    type: user.type || 1,
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
      } else {
        dispatch(authActions.profileUpdateRequest({ ...formValues, id: user.id }));
        setSubmitting(isPending);
      }
    },
  });
  useEffect(() => {
    dispatch(authActions.getCurrentUserRequest());
  }, [dispatch]);

  const labelForRole = useMemo(() => {
    const currentRole: any = find(propEq('value', values.type))(ROLES_LIST);
    return currentRole ? currentRole.label : '';
  }, [values.type]);
  return {
    user,
    isPending,
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
    t,
    labelForRole,
  };
};

export default useProfile;
