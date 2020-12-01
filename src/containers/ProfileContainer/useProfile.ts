import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { find, propEq } from 'ramda';
import { authActions, authSelectors } from '../../state/auth';
import { TUserValues, TUseProfile } from '../../interfaces/userInterfaces';
import rules from './rules';
import { permissions, SUCCESS_MESSAGES } from '../../constants';
import { commonHelpers, fileHelpers } from '../../utils/helpers';
import PushNotifications from '../../utils/helpers/pushNotifications';
import { createFormData } from '../../utils/helpers/fileHelpers';

const { ROLES_LIST } = permissions;

const useProfile = (): TUseProfile => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const user = useSelector(authSelectors.getUserData);
  const isPending = useSelector(authSelectors.getPending);
  const [src, setSrc] = useState(fileHelpers.getLinkForDisplayImage(user.file?.filename));

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
    setFieldValue,
  } = useFormik<TUserValues>({
    initialValues,
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      if (commonHelpers.isDifferentValues(initialValues, formValues)) {
        dispatch(authActions.profileUpdateRequest({ ...formValues, id: user.id }));
        setSubmitting(isPending);
      } else {
        PushNotifications.info({ content: SUCCESS_MESSAGES.VALUES_ARE_IDENTICAL });
      }
    },
  });

  useEffect(() => {
    if (!user.id) dispatch(authActions.getCurrentUserRequest());
    setSrc(fileHelpers.getLinkForDisplayImage(user.file?.filename));
  }, [dispatch, src, user, user.file]);

  const setAvatar = useCallback((file) => {
    const formValues = {
      file,
      avatar: user.avatar,
    };
    const formData = createFormData(formValues);
    dispatch(authActions.avatarUploadRequest(formData));
  }, [dispatch, user.avatar]);

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
    setFieldValue,
    src,
    setAvatar,
  };
};

export default useProfile;
