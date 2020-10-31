import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { userActions, userSelectors } from '../../state/user';
import { IUser, IUserValues } from '../../interfaces/userInterfaces';
import rules from './rules';

interface IUseProfile {
    user: IUser,
    isPending: boolean
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
    values: IUser,
    errors: IUser,
    handleChange: (e: React.ChangeEvent<any>) => void,
    setSubmitting: (isSubmitting: boolean) => void,
    isSubmitting: boolean,
    t: TFunction,
}

const useProfile = (): IUseProfile => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);
  const user = useSelector(userSelectors.getUserData);
  const isPending = useSelector(userSelectors.getPending);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<IUserValues>({
    initialValues: {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.profileUpdateRequest({ ...formValues, id: user.id }));
      setSubmitting(isPending);
    },
  });
  useEffect(() => {
    dispatch(userActions.getCurrentUserRequest());
  }, [dispatch]);
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
  };
};

export default useProfile;
