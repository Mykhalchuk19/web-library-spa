import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, CustomButton } from '../../../../components';
import useDeleteUserModal from './useDeleteUserModal';
import { TDeleteUserModal } from '../../../../interfaces/userInterfaces';
import './style.sass';

const useStyles = makeStyles({
  user_delete__btn_delete: {
    width: '45%',
  },
  user_delete__btn_cancel: {
    width: '45%',
    backgroundColor: 'lightcoral',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: 'lightcoral',
    },
  },
});

const DeleteUserModal: React.FC<TDeleteUserModal> = ({
  userId,
  closeDeleteModal,
  isOpen,
}: TDeleteUserModal) => {
  const { onDeleteUser } = useDeleteUserModal(userId, closeDeleteModal);
  const classes = useStyles();
  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={closeDeleteModal}
      title="Delete user"
    >
      <div className="user-delete__wrapper">
        <div className="user-delete__row">
          <CustomButton
            text="Delete"
            type="button"
            onClick={onDeleteUser}
            className={classes.user_delete__btn_delete}
          />
          <CustomButton
            text="Cancel"
            type="button"
            onClick={closeDeleteModal}
            className={classes.user_delete__btn_cancel}
          />
        </div>
      </div>
    </ModalWindow>
  );
};

export default DeleteUserModal;
