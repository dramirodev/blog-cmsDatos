import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const BarraNavegacion = styled.nav`
  display: flex;
  justify-content: center;
  max-width: 60rem;
  padding: 1rem 2rem;

  @media (min-width: 468px) {
    justify-content: flex-start;
  }
`;
const NavItem = styled(Link)`
  position: relative;
  display: block;
  margin-right: 1rem;
  text-transform: capitalize;
  transition: all 0.5s;
  font-size: 1.4rem;
  padding: 5px 10px;
  line-height: 1;
  color: #272727;

  &:hover {
    background-color: #0092db;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border: 1px solid #0092db;
    border-width: 0 0 2px 2px;
    opacity: 0;
    transition: all 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 12px;
    height: 12px;
    border: 2px solid #0092db;
    border-width: 2px 2px 0 0;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover:before {
    opacity: 1;
    bottom: -5px;
    left: -5px;
  }
  &:hover:after {
    opacity: 1;
    top: -5px;
    right: -5px;
  }

  &.pagina-actual {
    background-color: #0092db;
    color: white;
  }
`;

const Nav = () => {
  return (
    <BarraNavegacion>
      <NavItem to="/" activeClassName={'pagina-actual'}>
        Inicio
      </NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/sobre-mi">Sobre mi</NavItem>
    </BarraNavegacion>
  );
};

export default Nav;
