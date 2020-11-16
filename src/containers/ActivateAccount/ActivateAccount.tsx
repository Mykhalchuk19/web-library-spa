import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components';
import { authActions } from '../../state/auth';

const useStyles = makeStyles({
  activate_account_btn: {
    width: '80%',
    maxWidth: '400px',
    display: 'block',
    margin: '200px auto 0',
  },
});

const ActivateAccount: React.FC = () => {
  const classes = useStyles();
  const { id, code } = useParams();
  const dispatch = useDispatch();
  const activeAccount = useCallback(() => {
    dispatch(authActions.userAuthenticationRequest({ id, code }));
  },
  [dispatch, code, id]);
  return (
    <CustomButton
      text="Activate account"
      onClick={activeAccount}
      className={classes.activate_account_btn}
    />
  );
};

export default ActivateAccount;
