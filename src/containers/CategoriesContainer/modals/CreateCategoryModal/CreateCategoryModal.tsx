import React from 'react';
import { TCategoriesModalsProps } from '../../../../interfaces/categoriesInterfaces';
import ModalView from '../ModalView';
import useCreateCategoryModal from './useCreateCategoryModal';
import { categoriesRequestHelpers } from '../../../../utils/requestHelpers';

const CreateCategoryModal: React.FC<TCategoriesModalsProps> = ({
  isOpen,
  onClose,
}: TCategoriesModalsProps) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useCreateCategoryModal(onClose);
  return (
    <ModalView
      title="Create category"
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isSubmitting={isSubmitting}
      asyncRequest={categoriesRequestHelpers.autocompleteCategoriesRequest}
      setFieldValue={setFieldValue}
    />
  );
};

export default CreateCategoryModal;
