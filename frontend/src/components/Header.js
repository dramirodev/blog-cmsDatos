import React from 'react';
import Nav from './MenuNavegacion';
import {css} from '@emotion/core';

const Header = () => {
  return (
    <header
      css={css`
        width: 100%;
        background-color: white;
        z-index: 9999;
        position: fixed;
        height: 4.4rem;
        overflow: none;
      `}
    >
      <Nav />
    </header>
  );
};

export default Header;
