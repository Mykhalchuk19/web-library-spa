import React, { ChangeEvent, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CustomButton, Form, ModalWindow } from '../../../components';
import { TAsyncOption } from '../../../interfaces/componentInterfaces';
import { TBooksModalView } from '../../../interfaces/booksInterfaces';
import './style.sass';

const useStyles = makeStyles({
  books_modal__btn: {
    width: '100%',
  },
});

const ModalView:React.FC<TBooksModalView> = ({
  title,
  isOpen,
  onClose,
  handleSubmit,
  errors,
  values,
  handleChange,
  isSubmitting,
  setFieldValue,
  asyncRequest,
}: TBooksModalView) => {
  const classes = useStyles();
  return (
    <ModalWindow
      title={title}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className="books-modal__form" onSubmit={handleSubmit}>
        <div className="books-modal__row">
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
        <div className="books-modal__row">
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
        <div className="books-modal__row">
          <Form.CustomInput
            id="city"
            label="City"
            inputProps={{
              name: 'city',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.city,
            }}
          />
        </div>
        <div className="books-modal__row">
          <Form.CustomInput
            id="year"
            label="Year"
            inputProps={{
              name: 'year',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.year,
            }}
          />
        </div>
        <div className="books-modal__row">
          <Form.CustomInput
            id="publishing_house"
            label="Publishing house"
            inputProps={{
              name: 'publishing_house',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.publishing_house,
            }}
          />
        </div>
        <div className="books-modal__row">
          <Form.CustomInput
            id="edition"
            label="Edition"
            inputProps={{
              name: 'edition',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.edition,
            }}
          />
        </div>
        <div className="books-modal__row">
          <Form.CustomInput
            id="series"
            label="Series"
            inputProps={{
              name: 'series',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.series,
            }}
          />
        </div>
        <div className="books-modal__row">
          <Form.CustomAsyncSelect
            id="category_id"
            onChange={(option: TAsyncOption) => setFieldValue('category_id', option.value)}
            value={values.category_id}
            asyncRequest={asyncRequest}
            handleChange={handleChange}
          />
        </div>
        <div className="books-modal__row">
          <Form.FileInput
            id="file"
            label="File"
            inputProps={{
              name: 'file',
              disabled: isSubmitting,
              onChange: (event: ChangeEvent<any>) => {
                setFieldValue('file', event.target.files[0]);
              },
              type: 'file',
            }}
            error={errors.file}
          />
        </div>
        <div className="books-modal__row">
          <CustomButton
            type="submit"
            className={classes.books_modal__btn}
            text="Submit"
          />
        </div>
      </form>
    </ModalWindow>
  );
};

export default memo(ModalView);
