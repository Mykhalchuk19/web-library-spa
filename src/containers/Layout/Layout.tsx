import React from 'react';
import { useSelector } from 'react-redux';
import { LeftSideBar } from './components';
import { uiSelectors } from '../../state/ui';
import { TLayout } from '../../interfaces/uiInterfaces';
import './style.sass';

const Layout: React.FC<TLayout> = ({ children }: TLayout) => {
  const isLeftSideBar = useSelector(uiSelectors.isLeftSideBarSelector);
  return (
    <>
      <div className="layout">
        <LeftSideBar />
        <section className={`main ${isLeftSideBar ? '' : 'hide-left-side-bar'}`}>
          <main className="main-container">
            {children}
          </main>
        </section>
      </div>
    </>
  );
};

export default Layout;
