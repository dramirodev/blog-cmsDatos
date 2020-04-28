import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import styled from '@emotion/styled';

export const articuloData = graphql`
  query($id: String!) {
    allDatoCmsPagina(filter: {id: {eq: $id}}) {
      paginas: nodes {
        id
        titulo
        contenidoNode {
          childMarkdownRemark {
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
    }
  }
`;

const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left !important;
  width: 100%;
`;

const AticuloTitle = styled.h1`
  color: #0092db;
  font-weight: 900;
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
`;
const DateParrafo = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: -1.4rem;
`;

const Articulo = ({location, data}) => {
  const articulo = data.allDatoCmsPagina.paginas[0];

  return (
    <Layout location={location}>
      <ContenedorBlog>
        <AticuloTitle>{articulo.titulo}</AticuloTitle>
        <DateParrafo>{articulo.meta.createdAt}</DateParrafo>
        <div
          dangerouslySetInnerHTML={{
            __html: articulo.contenidoNode.childMarkdownRemark.html,
          }}
        />
      </ContenedorBlog>
    </Layout>
  );
};

export default Articulo;
