import {graphql, useStaticQuery} from 'gatsby';

const useArticulos = () => {
  const datos = useStaticQuery(graphql`
    query {
      articulos: allStrapiArticulo {
        nodes {
          publicado
          titulo
          contenido
          id
          resumen
        }
      }
    }
  `);

  return datos.articulos.nodes;
};

export default useArticulos;
