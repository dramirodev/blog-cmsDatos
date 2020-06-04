import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import useArticulos from '../hooks/useArticulos';
import urlSlug from 'url-slug';
import {
  TituloArticulo,
  ContenedorBlog,
  DateParrafo,
  PostContainer,
} from '../styles/styles';

const Blog = () => {
  const articulos = useArticulos();

  return (
    <Layout>
      <SEO title="Blog" />
      <ContenedorBlog>
        {articulos.map(articulo => (
          <PostContainer key={articulo.id}>
            <TituloArticulo to={`/blog/${urlSlug(articulo.titulo)}`}>
              {articulo.titulo}
            </TituloArticulo>
            <DateParrafo>{articulo.fecha}</DateParrafo>
            <p>{articulo.resumen}</p>
          </PostContainer>
        ))}
      </ContenedorBlog>
    </Layout>
  );
};

export default Blog;
