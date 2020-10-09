import React, { useState } from 'react';
import style from './header.scss';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'gatsby';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { Brand, Toggle, Collapse } = Navbar;
  return (
    <div className="Header">
      <div className={style.navbarContainer}>
        <Navbar collapseOnSelect expand="lg" fixed="top" expanded={expanded}>
          <Brand as={Link}></Brand>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
