import React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

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

const ContendorRedesSociales = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 40%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const ContenedorIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  background-color: #f1f1f1;
  border-radius: 30%;
  margin-top: 2rem;
  color: #272727;
  overflow: hidden;
  cursor: pointer;

  &:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  &:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background-color: #0092db;
    left: -110%;
    top: 90%;
    transform: rotate(45deg);
  }

  &:hover:before {
    animation: ${animacionRelleno} 0.7s 1 forwards;
  }
`;

const Icon = styled.i`
  font-size: 1.8rem;
  transition: all 0.3s;
`;

const ListadoRedesSociales = () => (
  <ContendorRedesSociales>
    <ContenedorIcon>
      <Icon className="fab fa-linkedin-in"></Icon>
    </ContenedorIcon>
    <ContenedorIcon class="icon" href="#">
      <Icon className="fab fa-twitter"></Icon>
    </ContenedorIcon>
    <ContenedorIcon class="icon" href="#">
      <Icon className="fab fa-github-alt"></Icon>
    </ContenedorIcon>
  </ContendorRedesSociales>
);

export default ListadoRedesSociales;
