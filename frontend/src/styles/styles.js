import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

//TODO Separar estilos por componentes y revisar los comunes o pueden serlo

export const TituloArticulo = styled(Link)`
  color: #003d5c;
  font-weight: 900;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  margin-bottom: 1rem;

  @media (min-width: 468px) {
    font-size: 4rem;
  }
`;

export const PostContainer = styled.div`
  margin-bottom: 1rem;
`;

export const DateParrafo = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
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
  color: #003d5c;

  &:hover {
    text-decoration: underline;
    color: #0092db;
  }
`;

export const InicioName = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`;

export const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left;
  width: 100%;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;

    @media (min-width: 468px) {
      font-size: 1.6rem;
    }
  }
`;

export const AticuloTitle = styled.h1`
  color: #003d5c;
  font-weight: 900;
  font-size: 2rem;

  @media (min-width: 468px) {
    font-size: 4rem;
  }
`;

export const FigCationStyled = styled.figcaption`
  font-size: 12px;
  letter-spacing: 1px;
  color: #003d5c;
  font-weight: bold;
  text-align: center;
`;

export const ImagenContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const animacionRelleno = keyframes`
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 15%;
    top: -30%;
  }
  100% {
    left: -10%;
    top: -10%;
  }
`;

export const ContendorRedesSociales = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const ContenedorIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 3.6rem;
  min-height: 3.6rem;
  background-color: #f1f1f1;
  border-radius: 30%;
  margin-top: 2rem;
  color: #272727;
  overflow: hidden;
  cursor: pointer;
  border: none;

  &:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  &:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background-color: #003d5c;
    left: -110%;
    top: 90%;
    transform: rotate(45deg);
  }

  &:hover:before {
    animation: ${animacionRelleno} 0.7s 1 forwards;
  }
`;

export const Icon = styled.i`
  font-size: 1.8rem;
  transition: all 0.3s;
`;

const animacionAvatarInicio = keyframes`
from{
     top: -50px;
     opacity: 0;
 }

 to{
     top: .1rem;
     opacity: 1;
 }
`;
export const Container = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  animation: ${animacionAvatarInicio};
  animation-duration: 0.8s;
`;

export const BarraNavegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  min-width: 30rem;
  padding: 2rem 2rem;

  @media (min-width: 468px) {
    justify-content: flex-start;
  }
`;
export const NavItem = styled(AniLink)`
  position: relative;
  display: block;
  margin-right: 1rem;
  text-transform: capitalize;
  transition: all 0.5s;
  font-size: 1.4rem;
  padding: 0px 10px;
  color: #272727;
  letter-spacing: 1px;
  text-decoration: none !important;

  &:hover {
    background-color: #003d5c;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 8px;
    width: 12px;
    height: 12px;
    border: 1px solid #003d5c;
    border-width: 0 0 2px 2px;
    opacity: 0;
    transition: all 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 12px;
    height: 12px;
    border: 2px solid #003d5c;
    border-width: 2px 2px 0 0;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover:before {
    opacity: 1;
    bottom: -5px;
    left: -5px;
  }
  &:hover:after {
    opacity: 1;
    top: -5px;
    right: -5px;
  }

  &.pagina-actual {
    background-color: #003d5c;
    color: white;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  z-index: 9999;
  position: fixed;
  height: 6.5rem;
  overflow: none;
  display: flex;
  align-items: center;
`;
