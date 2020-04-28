import styled from '@emotion/styled';
import Image from 'gatsby-image';
import {Link} from 'gatsby';

export const TituloArticulo = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  color: #0092db;
  font-weight: 900;
  font-size: 4rem;
  display: block;
`;

export const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left !important;
  width: 100%;
`;

export const DateParrafo = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: -1.4rem;
`;

export const WrapperInfoUsuario = styled.div`
  max-width: 60rem;
  height: auto;
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  position: relative;
  transition: all 0.5s;
  padding: 0 2rem;
`;

export const AvatarInicio = styled(Image)`
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const StyledLinkBio = styled.a`
  color: #0092db;

  &:hover {
    text-decoration: underline;
  }
`;

export const InicioName = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;
