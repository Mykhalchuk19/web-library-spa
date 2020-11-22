import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, Form, CustomButton } from '../../../components';
import { TCategoriesModalView } from '../../../interfaces/categoriesInterfaces';
import './style.sass';
import { TAsyncOption } from '../../../interfaces/componentInterfaces';

const useStyles = makeStyles({
  categories_modal__btn: {
    width: '100%',
  },
});

const ModalView: React.FC<TCategoriesModalView> = ({
  title,
  isOpen,
  onClose,
  handleSubmit,
  errors,
  values,
  isSubmitting,
  handleChange,
  asyncRequest,
  setFieldValue,
}: TCategoriesModalView) => {
  const classes = useStyles();
  return (
    <ModalWindow
      title={title}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className="categories-modal__form" onSubmit={handleSubmit}>
        <div className="categories-modal__row">
          <Form.CustomInput
            id="title"
            label="Title"
            error={errors.title || ''}
            inputProps={{
              name: 'title',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.title,
            }}
          />
        </div>
        <div className="categories-modal__row">
          <Form.CustomInput
            id="short_description"
            label="Short description"
            inputProps={{
              name: 'short_description',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.short_description,
            }}
          />
        </div>
        <div className="categories-modal__row">
          <Form.CustomInput
            id="description"
            label="Description"
            inputProps={{
              name: 'description',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.description,
            }}
          />
        </div>
        <div className="categories-modal__row">
          <Form.CustomAsyncSelect
            id="parent_id"
            onChange={(option: TAsyncOption) => setFieldValue('parent_id', option.value)}
            value={values.parent_id}
            asyncRequest={asyncRequest}
            handleChange={handleChange}
          />
        </div>
        <div className="categories-modal__row">
          <CustomButton
            type="submit"
            className={classes.categories_modal__btn}
            text="Submit"
          />
        </div>
      </form>
    </ModalWindow>
  );
};

export default memo(ModalView);
