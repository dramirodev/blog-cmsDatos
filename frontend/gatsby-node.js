/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {
  const resultado = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            titulo
          }
          id
        }
      }
    }
  `);

  if (resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors);
  }

  // Si hay resultados generar los archivos estáticos
  const articulosLocales = resultado.data.allMarkdownRemark.nodes;

  // Crear templates de articulos
  articulosLocales.forEach(articulo => {
    actions.createPage({
      path: `/blog/${urlSlug(articulo.frontmatter.titulo)}`,
      component: require.resolve('./src/templates/Articulo.js'),
      context: {
        id: articulo.id,
      },
    });
  });
};
