import React from 'react';

const useObtenerImagenDeArticulo = articulo => {
  let imagen;
  articulo.contenidoNode.childMarkdownRemark.htmlAst.children.forEach(
    element => {
      if (element.children) {
        imagen = element.children.filter(child => child.tagName === 'img');
      }
    },
  );
  return imagen[0].properties.src;
};

export default useObtenerImagenDeArticulo;
