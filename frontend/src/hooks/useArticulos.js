import {graphql, useStaticQuery} from 'gatsby';

const useArticulos = () => {
  const listadoArticulos = [];
  const articulos = useStaticQuery(graphql`
    {
      articulo: allDatoCmsArticulo {
        edges {
          node {
            categoria
            id
            titulo
            meta {
              createdAt(formatString: "DD-MMMM-YYYY", locale: "es")
            }
            contenidoNode {
              childMarkdownRemark {
                excerpt(format: PLAIN, pruneLength: 160)
                timeToRead
                wordCount {
                  words
                }
              }
            }
          }
        }
      }
    }
  `);

  articulos.articulo.edges.forEach(article => {
    listadoArticulos.push({
      id: article.node.id,
      titulo: article.node.titulo,
      categoria: article.node.categoria,
      fecha: article.node.meta.createdAt,
      resumen: article.node.contenidoNode.childMarkdownRemark.excerpt,
      timeToRead: article.node.contenidoNode.childMarkdownRemark.timeToRead,
      numeroPalabras:
        article.node.contenidoNode.childMarkdownRemark.wordCount.words,
    });
  });

  return listadoArticulos;
};

export default useArticulos;
