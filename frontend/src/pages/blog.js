import React, {useState} from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import useArticulos from '../hooks/useArticulos';
import urlSlug from 'url-slug';
import {TituloArticulo, ContenedorBlog, DateParrafo} from '../styles/styles';

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
