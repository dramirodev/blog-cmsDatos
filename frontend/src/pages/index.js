import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import {css} from '@emotion/core';

const WrapperInfoUsuario = styled.div`
  max-width: 60rem;
  height: auto;
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  position: relative;
  transition: all 0.5s;
  padding: 0 2rem;
`;

const AvatarInicio = styled(Image)`
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledLinkBio = styled.a`
  color: #0092db;

  &:hover {
    text-decoration: underline;
  }
`;

const InicioName = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const IndexPage = props => {
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
    <Layout location={props.location}>
      <SEO title="Inicio" />
      <div className="container">
        <WrapperInfoUsuario>
          <StyledLink>
            <AvatarInicio
              fixed={logo.childImageSharp.fixed}
              alt="Avatar Inicio"
            />
          </StyledLink>
          <InicioName>M. David Ramiro</InicioName>
          <p
            css={css`
              font-weight: bold;
              margin: 0;
              color: #0092db;
            `}
          >
            Desarrollador de aplicaciones web
          </p>
          <p>
            Hola, durante los últimos años he trabajado con tecnologías
            JavaScript. Lenguaje del que soy un ferviente admirador. He
            realizado proyectos tanto en{' '}
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
        </WrapperInfoUsuario>
      </div>
    </Layout>
  );
};

export default IndexPage;
