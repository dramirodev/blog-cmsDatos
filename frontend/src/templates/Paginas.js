import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import styled from '@emotion/styled';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import {css} from '@emotion/core';

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

const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left;
  width: 100%;
  margin-bottom: 2rem;
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

const Paginas = ({location, data}) => {
  const pagina = data.allDatoCmsPagina.paginas[0];

  return (
    <Layout location={location}>
      <ContenedorBlog>
        <AticuloTitle>{pagina.titulo}</AticuloTitle>
        <DateParrafo>{pagina.meta.createdAt}</DateParrafo>
        <div
          css={css`
            p {
              font-size: 1.6rem;
              letter-spacing: 0.1rem;
            }

            img[alt='puente'] {
              padding: 1rem;
              border: 1px solid black;
              max-width: 60%;
              display: block;
              margin: 0 auto;
            }

            a {
              color: #0092db;
            }
          `}
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
