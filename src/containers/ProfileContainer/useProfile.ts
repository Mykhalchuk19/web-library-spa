import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { find, propEq } from 'ramda';
import { authActions, authSelectors } from '../../state/auth';
import { TUserValues, TUseProfile } from '../../interfaces/userInterfaces';
import rules from './rules';
import { ROLES_LIST } from '../../constants/permissions';

const useProfile = (): TUseProfile => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const user = useSelector(authSelectors.getUserData);
  const isPending = useSelector(authSelectors.getPending);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<TUserValues>({
    initialValues: {
      username: user.username || '',
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      email: user.email || '',
      type: user.type || 1,
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(authActions.profileUpdateRequest({ ...formValues, id: user.id }));
      setSubmitting(isPending);
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
