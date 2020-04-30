import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import SEO from '../components/seo';
import {ContenedorBlog, AticuloTitle, DateParrafo} from '../styles/styles';

export const articuloData = graphql`
  query($id: String!) {
    articulo: datoCmsArticulo(id: {eq: $id}) {
      titulo
      contenidoNode {
        childMarkdownRemark {
          htmlAst
          html
        }
      }
      meta {
        createdAt(locale: "es", formatString: "DD/MM/YYYY")
      }
      imagen {
        fluid {
          srcSet
        }
      }
    }
    logo: file(relativePath: {eq: "david.png"}) {
      relativePath
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Articulo = ({ data}) => {
  const {articulo, logo} = data;
  const imagen = articulo.imagen.fluid
    ? articulo.imagen.fluid
    : {
        src: logo.relativePath,
        height: 155,
        width: 150,
      };

  return (
    <Layout>
      <SEO title={articulo.titulo} imagen={imagen} />
      <ContenedorBlog>
        <AticuloTitle>{articulo.titulo}</AticuloTitle>
        <DateParrafo>{articulo.meta.createdAt}</DateParrafo>
        <div
          dangerouslySetInnerHTML={{
            __html: articulo.contenidoNode.childMarkdownRemark.html,
          }}
        />
      </ContenedorBlog>{' '}
    </Layout>
  );
};

export default Articulo;
