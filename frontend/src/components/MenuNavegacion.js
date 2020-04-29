import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const BarraNavegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  min-width: 30rem;
  padding: 2rem 2rem;
  margin-top: 1rem;

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
  padding: 0px 10px;
  color: #272727;
  letter-spacing: 1px;

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

const AvatarNavegacion = styled(Image)`
  width: 5rem;
  margin-right: 1rem;
`;

const Nav = ({ location }) => {

  const {logo, totalArticulos} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "david.png"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totalArticulos: allDatoCmsArticulo {
        totalCount
      }
    }
  `);

  return (
    <BarraNavegacion>
      {location && location.pathname !== '/' ? (
        <AvatarNavegacion
          fluid={logo.childImageSharp.fluid}
          alt="Avatar barra de navegación"
        />
      ) : null}
      <NavItem to="/" activeClassName={'pagina-actual'}>
        Inicio
      </NavItem>
      {totalArticulos.totalCount > 0 && (
        <NavItem
          to="/blog"
          activeClassName={'pagina-actual'}
          partiallyActive={true}
        >
          Blog
        </NavItem>
      )}
      <NavItem
        to="/sobre-mi"
        activeClassName={'pagina-actual'}
        partiallyActive={true}
      >
        Sobre mi
      </NavItem>
    </BarraNavegacion>
  );
};

export default Nav;
