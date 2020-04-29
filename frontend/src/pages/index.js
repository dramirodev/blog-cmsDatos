import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoUsuario from '../components/InfoUsuario';
import {useStaticQuery, graphql} from 'gatsby';

const IndexPage = () => {
  const {logo} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "david.png"}) {
        relativePath
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Inicio" image={logo.relativePath} />
      <InfoUsuario logo={logo} />
    </Layout>
  );
};

export default IndexPage;
