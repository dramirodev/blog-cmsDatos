import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

import {Container} from '../styles/styles';

const AvatarNavegacion = () => {
  const {logo} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "david.png"}) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Image
        fixed={logo.childImageSharp.fixed}
        alt="Avatar barra de navegación"
      />
    </Container>
  );
};

export default AvatarNavegacion;
