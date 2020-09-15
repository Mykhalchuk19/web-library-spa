import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <div className="header__row">
      <Link className="header__link" to="/">Web library</Link>
    </div>
  </header>
);

export default Header;
