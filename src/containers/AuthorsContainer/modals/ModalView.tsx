import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalWindow, Form, CustomButton } from '../../../components';
import { TAuthorsModalView } from '../../../interfaces/authorsInterfaces';
import './style.sass';

const useStyles = makeStyles({
  authors_modal__btn: {
    width: '100%',
  },
});

const ModalView: React.FC<TAuthorsModalView> = ({
  title,
  isOpen,
  onClose,
  handleSubmit,
  errors,
  values,
  isSubmitting,
  handleChange,
}: TAuthorsModalView) => {
  const classes = useStyles();
  return (
    <ModalWindow
      title={title}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className="authors-modal__form" onSubmit={handleSubmit}>
        <div className="authors-modal__row">
          <Form.CustomInput
            id="firstname"
            label="First name"
            error={errors.firstname || ''}
            inputProps={{
              name: 'firstname',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.firstname,
            }}
          />
        </div>
        <div className="authors-modal__row">
          <Form.CustomInput
            id="lastname"
            label="Last name"
            inputProps={{
              name: 'lastname',
              disabled: isSubmitting,
              onChange: handleChange,
              value: values.lastname,
            }}
          />
        </div>
        <div className="authors-modal__row">
          <CustomButton
            type="submit"
            className={classes.authors_modal__btn}
            text="Submit"
          />
        </div>
      </form>
    </ModalWindow>
  );
};

export default memo(ModalView);
