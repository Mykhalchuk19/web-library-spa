import React from 'react';
import ModalView from '../ModalView';
import useEditBookModal from './useEditBookModal';
import { TBooksModalsProps } from '../../../../interfaces/booksInterfaces';
import { authorsRequestHelpers, categoriesRequestHelpers } from '../../../../utils/requestHelpers';

const EditBookModal:React.FC<TBooksModalsProps> = ({ id, isOpen, onClose }: TBooksModalsProps) => {
  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    onCloseHandler,
    defaultAuthors,
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
      authorsAutocomplete={authorsRequestHelpers.autocompleteAuthorsRequest}
      defaultValueForAuthors={defaultAuthors}
    />
  );
};

export default EditBookModal;
