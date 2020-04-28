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
      allDatoCmsArticulo {
        nodes {
          id
          titulo
        }
      }
    }
  `);

  if (resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors);
  }

  // Si hay resultados generar los archivos estáticos

  const articulos = resultado.data.allDatoCmsArticulo.nodes;

  // Crear templates de articulos

  articulos.forEach(articulo => {
    actions.createPage({
      path: `/blog/${urlSlug(articulo.titulo)}`,
      component: require.resolve('./src/templates/Articulo.js'),
      context: {
        id: articulo.id,
      },
    });
  });
};
