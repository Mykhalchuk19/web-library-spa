import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as React from 'react';
import { userActions, userSelectors } from '../../state/user';
import rules from './rules';

export interface Values {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
}

type IUser = {
    username?: string | undefined,
    firstname?: string | undefined,
    lastname?: string | undefined,
    email?: string | undefined,
}

interface IUseProfile {
    dispatch: any,
    user: IUser,
    isPending: boolean
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
    values: IUser,
    errors: IUser,
    handleChange: (e: React.ChangeEvent<any>) => void,
    setSubmitting: (isSubmitting: boolean) => void,
    isSubmitting: boolean,
}

const useProfile = (): IUseProfile => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUserData);
  const isPending = useSelector(userSelectors.getAuthPending);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<Values>({
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
      dispatch(userActions.userUpdateRequest({ ...formValues }, { id: user.id }));
      setSubmitting(isPending);
    },
  });
  return {
    dispatch,
    user,
    isPending,
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  };
};

export default useProfile;
