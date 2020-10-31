import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomButton, Form, ModalWindow } from '../../../../components';
import useEditUserModal from './useEditUserModal';
import './style.sass';

type TEditUserModal = {
    isOpen : boolean,
    closeEditModal: () => void,
    userId: number | null,
}

const useStyles = makeStyles({
  user_edit__btn: {
    width: '100%',
  },
});

const EditUserModal: React.FC<TEditUserModal> = ({
  isOpen, closeEditModal, userId,
}: TEditUserModal) => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useEditUserModal(userId, closeEditModal);
  const classes = useStyles();
  return (
    <ModalWindow
      title="Edit user"
      isOpen={isOpen}
      onClose={closeEditModal}
    >
      <form className="edit-user__form" onSubmit={handleSubmit}>
        <div className="edit-user__body">
          <div className="edit-user__row">
            <Form.CustomInput
              id="username"
              label="Username"
              error={errors.username || ''}
              inputProps={{
                name: 'username',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.username,
              }}
            />
          </div>
          <div className="edit-user__row">
            <Form.CustomInput
              id="firstname"
              label="First name"
              error={errors.firstname || ''}
              inputProps={{
                name: 'firstname',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.firstname,
              }}
            />
          </div>
          <div className="edit-user__row">
            <Form.CustomInput
              id="lastname"
              label="Last name"
              error={errors.lastname || ''}
              inputProps={{
                name: 'lastname',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.lastname,
              }}
            />
          </div>
          <div className="edit-user__row">
            <Form.CustomInput
              id="email"
              label="Email"
              error={errors.email || ''}
              inputProps={{
                name: 'email',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.email,
              }}
            />
          </div>
          <div className="edit-user__row">
            <CustomButton
              type="submit"
              className={classes.user_edit__btn}
              text="Submit"
            />
          </div>
        </div>
      </form>
    </ModalWindow>
  );
};

export default EditUserModal;
