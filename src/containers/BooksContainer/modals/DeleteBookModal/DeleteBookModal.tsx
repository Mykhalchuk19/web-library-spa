import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, CustomButton } from '../../../../components';
import useDeleteBookModal from './useDeleteBookModal';
import './style.sass';
import { TBooksModalsProps } from '../../../../interfaces/booksInterfaces';

const useStyles = makeStyles({
  book_delete__btn_delete: {
    width: '45%',
  },
  book_delete__btn_cancel: {
    width: '45%',
    backgroundColor: 'lightcoral',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: 'lightcoral',
    },
  },
});

const DeleteBookModal: React.FC<TBooksModalsProps> = ({
  id,
  onClose,
  isOpen,
}: TBooksModalsProps) => {
  const { onDeleteBook } = useDeleteBookModal(id, onClose);
  const classes = useStyles();
  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      title="Delete book"
    >
      <div className="book-delete__wrapper">
        <div className="book-delete__row">
          <CustomButton
            text="Delete"
            type="button"
            onClick={onDeleteBook}
            className={classes.book_delete__btn_delete}
          />
          <CustomButton
            text="Cancel"
            type="button"
            onClick={onClose}
            className={classes.book_delete__btn_cancel}
          />
        </div>
      </div>
    </ModalWindow>
  );
};

export default DeleteBookModal;
