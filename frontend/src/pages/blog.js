import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import useArticulos from '../hooks/useArticulos';
import styled from '@emotion/styled';

const TituloArticulo = styled.h2`
  color: #0092db;
  font-weight: 900;
  font-size: 2.8rem;
  text-align: left;
`;

const Blog = ({location}) => {
  const articulos = useArticulos();

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <div style={{marginTop: '6rem'}}>
        {articulos.map(articulo => (
          <TituloArticulo key={articulo.id}>{articulo.titulo}</TituloArticulo>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
