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


  return imagen.properties.src;
};

export default useObtenerImagenDeArticulo;
