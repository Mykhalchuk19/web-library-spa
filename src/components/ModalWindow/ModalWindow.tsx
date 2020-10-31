import React, { ReactPortal, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import CustomButton from '../CustomButton/CustomButton';
import './style.sass';

type MWProps = {
    title?: string,
    isOpen: boolean,
    onClose?: () => void | CallableFunction,
    children?: JSX.Element
}

const useStyles = makeStyles({
  modal_window__close_btn: {
    position: 'absolute',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    boxShadow: 'none',
    right: '0',
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      boxShadow: 'none',
    },
  },
  modal_window__close_icon: {
    '&:hover': {
      color: 'gainsboro',
    },
  },
});

const ModalWindow = ({
  title, isOpen, onClose, children,
}: MWProps): ReactPortal => {
  useLayoutEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);
  const classes = useStyles();
  const { t } = useTranslation(['common']);
  return (
      isOpen && ReactDOM.createPortal(
        <div className="modal-window">
          <div className="modal-window__wrapper">
            <div className="modal-window__header">
              <h3 className="modal-window__title">{t(title || 'Title')}</h3>
              <CustomButton onClick={onClose} className={classes.modal_window__close_btn} text="">
                <CloseIcon className={classes.modal_window__close_icon} />
              </CustomButton>
            </div>
            <div className="modal-window__body">{children}</div>
          </div>
        </div>,
        document.body,
      )
  ) as ReactPortal;
};

export default ModalWindow;
