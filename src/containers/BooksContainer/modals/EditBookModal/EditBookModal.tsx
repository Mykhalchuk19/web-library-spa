import React from 'react';
import ModalView from '../ModalView';
import useEditBookModal from './useEditBookModal';
import { TBooksModalsProps } from '../../../../interfaces/booksInterfaces';
import { categoriesRequestHelpers } from '../../../../utils/requestHelpers';

const EditBookModal:React.FC<TBooksModalsProps> = ({ id, isOpen, onClose }: TBooksModalsProps) => {
  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    onCloseHandler,
  } = useEditBookModal(id, onClose);
  return (
    <ModalView
      title="Edit book"
      isOpen={isOpen}
      onClose={onCloseHandler}
      values={values}
      errors={errors}
      isSubmitting={isSubmitting}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      asyncRequest={categoriesRequestHelpers.autocompleteCategoriesRequest}
    />
  );
};

export default EditBookModal;
