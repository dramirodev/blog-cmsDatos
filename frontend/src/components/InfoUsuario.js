import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import {css} from '@emotion/core';
import {
  WrapperInfoUsuario,
  AvatarInicio,
  StyledLink,
  InicioName,
  StyledLinkBio,
} from '../styles/styles';

const InfoUsuario = () => {
  const {logo, imagen} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "david.png"}) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  console.log('imagen :>> ', imagen);

  return (
    <WrapperInfoUsuario>
      <StyledLink>
        <AvatarInicio fixed={logo.childImageSharp.fixed} alt="Avatar Inicio" />
      </StyledLink>
      <InicioName>M. David Ramiro</InicioName>
      <p
        css={css`
          font-weight: bold;
          margin: 0;
          color: #0092db;
          letter-spacing: 0.18em;
        `}
      >
        Desarrollador de aplicaciones web
      </p>
      <p>
        Hola, durante los últimos años he trabajado con tecnologías JavaScript.
        Lenguaje del que soy un ferviente admirador. He realizado proyectos
        tanto en{' '}
        <StyledLinkBio href="https://reactjs.org/" target="_blank">
          ReactJs
        </StyledLinkBio>{' '}
        como en{' '}
        <StyledLinkBio href="https://angular.io/" target="_blank">
          Angular
        </StyledLinkBio>
        . Ahora estoy aprendiendo{' '}
        <StyledLinkBio href="https://nodejs.org/en/" target="_blank">
          NodeJs
        </StyledLinkBio>{' '}
        para poder entender a esos locos desarrolladores backend. 😉
      </p>
      <ListadoRedesSociales />
      <p
        css={css`
          font-size: 12px;
          margin-top: 1rem;
        `}
      >
        Logo diseñado por{' '}
        <StyledLinkBio
          href="https://www.behance.net/cocotaloco"
          target="_blank"
        >
          Claudia Casanova
        </StyledLinkBio>
      </p>
    </WrapperInfoUsuario>
  );
};

export default InfoUsuario;
