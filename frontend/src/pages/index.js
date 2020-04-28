import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoUsuario from '../components/InfoUsuario';

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Inicio" />
      <InfoUsuario />
    </Layout>
  );
};

export default IndexPage;
