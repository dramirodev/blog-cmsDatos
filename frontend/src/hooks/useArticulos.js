import {graphql, useStaticQuery} from 'gatsby';

const useArticulos = () => {
  const articulos = useStaticQuery(graphql`
    {
      articulos: allDatoCmsArticulo {
        edges {
          node {
            categoria
            contenidoNode {
              childMarkdownRemark {
                html
              }
            }
            id
            titulo
            resumen
            meta {
              createdAt(formatString: "DD-MMMM-YYYY", locale: "es")
            }
            imagen {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `);

  return articulos.articulos.edges;
};

export default useArticulos;
