import {graphql, useStaticQuery} from 'gatsby';

const useArticulos = () => {
  const listadoArticulos = [];
  const articulos = useStaticQuery(graphql`
    {
      articulo: allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            frontmatter {
              titulo
              date(formatString: "DD-MM-YYYY", locale: "es")
            }
            excerpt(format: PLAIN, pruneLength: 160)
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
  `);

  articulos.articulo.edges.forEach(article => {
    if (article.node.frontmatter.titulo) {
      listadoArticulos.push({
        id: article.node.id,
        titulo: article.node.frontmatter.titulo,
        fecha: article.node.frontmatter.date,
        resumen: article.node.excerpt,
        timeToRead: article.node.timeToRead,
        numeroPalabras: article.node.wordCount.words,
        imagen: article.node.frontmatter.featured,
      });
    }
  });

  return listadoArticulos;
};

export default useArticulos;
