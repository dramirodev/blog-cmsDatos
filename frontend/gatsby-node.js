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

      paginas: allDatoCmsPagina {
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
  const paginas = resultado.data.paginas.nodes;

  // crear templates para paginas
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.titulo),
      component: require.resolve('./src/templates/Paginas.js'),
      context: {
        id: pagina.id,
      },
    });
  });

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
