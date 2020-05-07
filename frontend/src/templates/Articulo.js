import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import SEO from '../components/seo';
import {ContenedorBlog, AticuloTitle, DateParrafo} from '../styles/styles';

export const ArticulosLocales = graphql`
  query($id: String!) {
    articulo: markdownRemark(id: {eq: $id}) {
      frontmatter {
        titulo
        date(formatString: "DD/MM/YY")
        featured {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      id
      timeToRead
      wordCount {
        words
      }
    }
    logo: file(relativePath: {eq: "david.png"}) {
      relativePath
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Articulo = ({data}) => {
  const {articulo, logo} = data;
  let imagen;
  if (articulo.imagen) {
    imagen = articulo.imagen.fluid;
  } else {
    imagen = {
      src: logo.relativePath,
      height: 155,
      width: 150,
    };
  }

  return (
    <Layout>
      <SEO title={articulo.titulo} imagen={imagen} />
      <ContenedorBlog>
        <AticuloTitle>{articulo.frontmatter.titulo}</AticuloTitle>
        <DateParrafo>{articulo.frontmatter.date}</DateParrafo>
        <Image fluid={articulo.frontmatter.featured.childImageSharp.fluid} />
        <div
          dangerouslySetInnerHTML={{
            __html: articulo.html,
          }}
        />
      </ContenedorBlog>{' '}
    </Layout>
  );
};

export default Articulo;
