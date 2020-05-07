import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {useLocation} from '@reach/router';
import AvatarNavegacion from './AvatarNavegacion';
import {BarraNavegacion, NavItem} from '../styles/styles';

const MenuNavegacion = () => {
  const location = useLocation();

  const {totalArticulos} = useStaticQuery(graphql`
    query {
      totalArticulos: allMarkdownRemark {
        totalCount
      }
    }
  `);

  return (
    <BarraNavegacion>
      {location.pathname !== '/' && <AvatarNavegacion />}
      <NavItem fade to="/" activeClassName={'pagina-actual'}>
        Inicio
      </NavItem>
      {totalArticulos.totalCount > 0 && (
        <NavItem
          to="/blog"
          activeClassName={'pagina-actual'}
          partiallyActive={true}
          fade
        >
          Blog
        </NavItem>
      )}
      <NavItem
        to="/sobre-mi"
        activeClassName={'pagina-actual'}
        partiallyActive={true}
        fade
      >
        Sobre mi
      </NavItem>
    </BarraNavegacion>
  );
};

export default MenuNavegacion;
