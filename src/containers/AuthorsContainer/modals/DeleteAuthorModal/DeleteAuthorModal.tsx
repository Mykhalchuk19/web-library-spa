import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, CustomButton } from '../../../../components';
import useDeleteAuthorModal from './useDeleteAuthorModal';
import './style.sass';
import { TAuthorsModalsProps } from '../../../../interfaces/authorsInterfaces';

const useStyles = makeStyles({
  author_delete__btn_delete: {
    width: '45%',
  },
  author_delete__btn_cancel: {
    width: '45%',
    backgroundColor: 'lightcoral',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: 'lightcoral',
    },
  },
});

const DeleteAuthorModal: React.FC<TAuthorsModalsProps> = ({ id, onClose, isOpen }: TAuthorsModalsProps) => {
  const { onDeleteAuthor } = useDeleteAuthorModal(id, onClose);
  const classes = useStyles();
  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      title="Delete author"
    >
      <div className="author-delete__wrapper">
        <div className="author-delete__row">
          <CustomButton
            text="Delete"
            type="button"
            onClick={onDeleteAuthor}
            className={classes.author_delete__btn_delete}
          />
          <CustomButton
            text="Cancel"
            type="button"
            onClick={onClose}
            className={classes.author_delete__btn_cancel}
          />
        </div>
      </div>
    </ModalWindow>
  );
};

export default DeleteAuthorModal;
