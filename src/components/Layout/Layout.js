import React from 'react';
import style from './layout.scss';

const Layout = () => {
  return (
    <div className={style.layoutDiv}>
      <header>
        <p>Header</p>
      </header>
      <main>
        <p>Body</p>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
