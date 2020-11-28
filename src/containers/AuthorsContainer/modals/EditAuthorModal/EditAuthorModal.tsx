import React from 'react';
import { TAuthorsModalsProps } from '../../../../interfaces/authorsInterfaces';
import ModalView from '../ModalView';
import useEditAuthorModal from './useEditAuthorModal';

const EditAuthorModal: React.FC<TAuthorsModalsProps> = ({
  id,
  isOpen,
  onClose,
}: TAuthorsModalsProps) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    onCloseHandler,
  } = useEditAuthorModal(id, onClose);
  return (
    <ModalView
      title="Edit author"
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onCloseHandler}
      isSubmitting={isSubmitting}
    />
  );
};

export default EditAuthorModal;
