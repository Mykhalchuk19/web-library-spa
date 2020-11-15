import React from 'react';
import { TCategoriesModalsProps } from '../../../../interfaces/categoriesInterfaces';
import ModalView from '../ModalView';
import useEditCategoryModal from './useEditCategoryModal';
import { categoriesRequestHelpers } from '../../../../utils/requestHelpers';

const EditCategoryModal: React.FC<TCategoriesModalsProps> = ({
  id,
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
  } = useEditCategoryModal(id, onClose);
  return (
    <ModalView
      title="Edit category"
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

export default EditCategoryModal;
