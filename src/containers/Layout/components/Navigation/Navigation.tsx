import React from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../../../constants';
import './style.sass';

const Navigation: React.FC = () => (
  <nav className="main-nav">
    <MenuList>
      {
        Object.values(NAVIGATION).map(({ href, title }) => (
          <MenuItem>
            <NavLink className="main-nav__link" to={href}>{title}</NavLink>
          </MenuItem>
        ))
      }
    </MenuList>
  </nav>
);

export default Navigation;
