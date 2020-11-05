import React from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../../../constants';
import './style.sass';

type TNavigation = {
    isLeftSideBar: boolean,
}

const Navigation: React.FC<TNavigation> = ({ isLeftSideBar }: TNavigation) => {
  const { t } = useTranslation(['common']);
  return (
    <nav className="main-nav">
      <MenuList>
        {
                    Object.values(NAVIGATION).map(({ href, title, icon }) => (
                      <MenuItem key={title}>
                        <NavLink className="main-nav__link" to={href} title={isLeftSideBar ? `${t(title)}` : ''}>
                          {isLeftSideBar ? <span className={`${icon} main-nav__icon`} /> : t(title)}
                        </NavLink>
                      </MenuItem>
                    ))
                }
      </MenuList>
    </nav>
  );
};

export default Navigation;
