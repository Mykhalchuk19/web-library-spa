import React from 'react';
import ModalView from '../ModalView';
import useAddBookModal from './useAddBookModal';
import { TBooksModalsProps } from '../../../../interfaces/booksInterfaces';
import { authorsRequestHelpers, categoriesRequestHelpers } from '../../../../utils/requestHelpers';

const AddBookModal:React.FC<TBooksModalsProps> = ({ isOpen, onClose }: TBooksModalsProps) => {
  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    onCloseHandler,
    defaultAuthors,
    setAuthors,
  } = useAddBookModal(onClose);
  return (
    <ModalView
      title="Add book"
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
      setAuthors={setAuthors}
    />
  );
};

export default AddBookModal;
