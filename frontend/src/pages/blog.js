import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import useArticulos from '../hooks/useArticulos';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import urlSlug from 'url-slug';

const TituloArticulo = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  color: #0092db;
  font-weight: 900;
  font-size: 4rem;
  display: block;
`;

const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left !important;
  width: 100%;
`;

const DateParrafo = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: -1.4rem;
`;

const Blog = ({location}) => {
  const articulos = useArticulos();
  console.log('articulos :>> ', articulos);
  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <ContenedorBlog>
        {articulos.map(articulo => (
          <div key={articulo.node.id}>
            <TituloArticulo to={`/blog/${urlSlug(articulo.node.titulo)}`}>
              {articulo.node.titulo}
            </TituloArticulo>
            <DateParrafo>{articulo.node.meta.createdAt}</DateParrafo>
            <p>{articulo.node.resumen}</p>
          </div>
        ))}
      </ContenedorBlog>
    </Layout>
  );
};

export default Blog;
