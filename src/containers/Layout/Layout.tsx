import React from 'react';
import { LeftSideBar } from './components';
import './style.sass';

type ILayout = {
    children: React.ReactElement | React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }: ILayout) => (
  <>
    <div className="layout">
      <LeftSideBar />
      <section className="main">
        <main className="main-container">
          {children}
        </main>
      </section>
    </div>
  </>
);

export default Layout;
