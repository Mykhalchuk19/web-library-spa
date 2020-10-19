import React from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../../../constants';
import './style.sass';

const Navigation: React.FC = () => {
  const { t } = useTranslation(['common']);
  return (
    <nav className="main-nav">
      <MenuList>
        {
                    Object.values(NAVIGATION).map(({ href, title }) => (
                      <MenuItem>
                        <NavLink className="main-nav__link" to={href}>{t(title)}</NavLink>
                      </MenuItem>
                    ))
                }
      </MenuList>
    </nav>
  );
};

export default Navigation;
