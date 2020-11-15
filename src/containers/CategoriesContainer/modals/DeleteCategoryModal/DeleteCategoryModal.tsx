import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, CustomButton } from '../../../../components';
import useDeleteCategoryModal from './useDeleteCategoryModal';
import './style.sass';
import { TCategoriesModalsProps } from '../../../../interfaces/categoriesInterfaces';

const useStyles = makeStyles({
  category_delete__btn_delete: {
    width: '45%',
  },
  category_delete__btn_cancel: {
    width: '45%',
    backgroundColor: 'lightcoral',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: 'lightcoral',
    },
  },
});

const DeleteCategoryModal: React.FC<TCategoriesModalsProps> = ({ id, onClose, isOpen }: TCategoriesModalsProps) => {
  const { onDeleteCategory } = useDeleteCategoryModal(id, onClose);
  const classes = useStyles();
  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      title="Delete category"
    >
      <div className="category-delete__wrapper">
        <div className="category-delete__row">
          <CustomButton
            text="Delete"
            type="button"
            onClick={onDeleteCategory}
            className={classes.category_delete__btn_delete}
          />
          <CustomButton
            text="Cancel"
            type="button"
            onClick={onClose}
            className={classes.category_delete__btn_cancel}
          />
        </div>
      </div>
    </ModalWindow>
  );
};

export default DeleteCategoryModal;
