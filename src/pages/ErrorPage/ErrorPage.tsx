import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CustomButton } from '../../components';
import './style.sass';
import { history } from '../../configureStore';

const useStyles = makeStyles({
  error_page__go_back: {
    display: 'block',
    margin: '0 auto',
    width: '200px',
  },
});

const ErrorPage: React.FC = () => {
  const styles = useStyles();
  return (
    <>
      <div className="error-page">
        <h2 className="error-page__title">Error</h2>
        <h4 className="error-page__subtitle">404</h4>
        <CustomButton className={styles.error_page__go_back} onClick={() => history.push('/profile')}>Profile</CustomButton>
      </div>
    </>
  );
};

export default ErrorPage;
