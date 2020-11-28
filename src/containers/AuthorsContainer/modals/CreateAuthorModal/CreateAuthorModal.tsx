import React from 'react';
import { TAuthorsModalsProps } from '../../../../interfaces/authorsInterfaces';
import ModalView from '../ModalView';
import useCreateAuthorModal from './useCreateAuthorModal';

const CreateAuthorModal: React.FC<TAuthorsModalsProps> = ({
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
  } = useCreateAuthorModal(onClose);
  return (
    <ModalView
      title="Create author"
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

export default CreateAuthorModal;
