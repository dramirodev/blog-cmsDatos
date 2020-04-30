import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import {css} from '@emotion/core';
import {AticuloTitle, ContenedorBlog, DateParrafo} from '../styles/styles';

export const paginaData = graphql`
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

const Paginas = ({location, data}) => {
  const pagina = data.allDatoCmsPagina.paginas[0];

  return (
    <Layout location={location}>
      <ContenedorBlog>
        <AticuloTitle>{pagina.titulo}</AticuloTitle>
        <DateParrafo>{pagina.meta.createdAt}</DateParrafo>
        <div
          dangerouslySetInnerHTML={{
            __html: pagina.contenidoNode.childMarkdownRemark.html,
          }}
        />
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <ListadoRedesSociales />
        </div>
      </ContenedorBlog>
    </Layout>
  );
};

export default Paginas;
