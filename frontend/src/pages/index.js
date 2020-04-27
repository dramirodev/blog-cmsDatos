import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import {css} from '@emotion/core';

const WrapperInfoUsuario = styled.div`
  max-width: 60rem;
  height: auto;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  position: relative;
  transition: all 0.5s;
`;

const AvatarInicio = styled(Image)`
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;

  /* &:after {
    content: '';
    height: 2rem;
    width: 2rem;
    top: 20px;
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid #272727;
    border-width: 0 5px 5px 0;
    z-index: 1;
  } */
`;

const StyledLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover::after {
    bottom: ${props => (props.showBio ? '-2.5rem' : '-1.5rem')};
    opacity: 1;
  }

  &:hover + div {
    transform: translateY(20px);
    transition: all 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    height: 2rem;
    width: 2rem;
    bottom: 20px;
    transform: ${props =>
      !props.showBio ? 'rotate(45deg)' : ' rotate(-140deg)'};
    border: 2px solid #f1f1f1;
    border-width: 0 5px 5px 0;
    z-index: 1;
    transition: all 0.3s;
    opacity: 0;
  }
`;

const IndexPage = () => {
  const {logo} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "david.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [showBio, setShowBio] = useState(false);

  return (
    <Layout>
      <SEO title="Inicio" />
      <div className="container">
        <WrapperInfoUsuario>
          <StyledLink onClick={() => setShowBio(!showBio)} showBio={showBio}>
            <AvatarInicio
              fluid={logo.childImageSharp.fluid}
              alt="Avatar Inicio"
            />
          </StyledLink>
          <h1
            css={css`
              font-size: 2rem;
              font-weight: bold;
              margin: 0;
            `}
          >
            M. David Ramiro
          </h1>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <ListadoRedesSociales />
        </WrapperInfoUsuario>
      </div>
    </Layout>
  );
};

export default IndexPage;
