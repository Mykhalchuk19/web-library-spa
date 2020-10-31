import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { userActions, userSelectors } from '../../../../state/user';
import { IUser, IUserValues } from '../../../../interfaces/userInterfaces';
import rules from './rules';
import { TStore } from '../../../../state/storeInterfaces';

interface IUseUserEdit {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
  values: IUser,
  errors: IUser,
  handleChange: (e: React.ChangeEvent<any>) => void,
  isSubmitting: boolean,
}

const useEditUserModal = (id: number | null, closeEditModal: () => void): IUseUserEdit => {
  const dispatch = useDispatch();
  const user = useSelector((state: TStore) => userSelectors.getUserById(state, id));
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
      dispatch(userActions.userUpdateRequest({ ...formValues, id: user.id }));
      setSubmitting(isPending);
      closeEditModal();
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
