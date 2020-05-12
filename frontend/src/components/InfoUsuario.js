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
  const {logo} = useStaticQuery(graphql`
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
          color: #003d5c;
          letter-spacing: 0.05em;
          text-align: center;
        `}
      >
        Desarrollador de aplicaciones web
      </p>
      <p
        css={css`
          font-size: 1.4rem;
          text-align: center;
          @media (min-width: 468px) {
            font-size: 1.6rem;
          }
        `}
      >
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
