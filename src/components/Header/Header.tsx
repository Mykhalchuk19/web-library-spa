import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.sass';

const Header: React.FC = () => {
  const { t } = useTranslation(['common']);
  return (
    <header className="header">
      <div className="header__row">
        <Link className="header__link" to="/">{t('Web library')}</Link>
      </div>
    </header>
  );
};

export default Header;
