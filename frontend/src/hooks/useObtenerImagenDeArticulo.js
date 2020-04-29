import React from 'react';

const useObtenerImagenDeArticulo = articulo => {
  let imagen;
  articulo.contenidoNode.childMarkdownRemark.htmlAst.children.forEach(
    element => {
      if (element.children) {
        imagen = element.children.find(child => {
          if (child.tagName === 'img') {
            return true;
          }
          return false;
        });
      }
    },
  );
  console.log(imagen);

  return imagen.properties.src;
};

export default useObtenerImagenDeArticulo;
