import React from 'react';
import Nav from './MenuNavegacion';
import {css} from '@emotion/core';

const Header = props => {
  return (
    <header
      css={css`
        width: 100%;
        background-color: white;
        z-index: 9999;
        position: fixed;
        height: 6rem;
        overflow: none;
        display: flex;
        align-items: center;
      `}
    >
      <Nav {...props} />
    </header>
  );
};

export default Header;
