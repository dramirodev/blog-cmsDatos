import React from 'react';
import {ContendorRedesSociales, ContenedorIcon, Icon} from '../styles/styles';

const ListadoRedesSociales = () => (
  <ContendorRedesSociales>
    <ContenedorIcon
      href="https://www.linkedin.com/in/dramirobarragan/"
      target="_blank"
      aria-label="Botón Linkedin"
    >
      <Icon className="fab fa-linkedin-in" />
    </ContenedorIcon>
    <ContenedorIcon
      href="https://twitter.com/dramirobarragan"
      target="_blank"
      aria-label="Botón Twitter"
    >
      <Icon className="fab fa-twitter" />
    </ContenedorIcon>
    <ContenedorIcon
      href="https://github.com/DavidRamiroBarragan"
      target="_blank"
      aria-label="Botón github"
    >
      <Icon className="fab fa-github-alt" />
    </ContenedorIcon>
  </ContendorRedesSociales>
);

export default ListadoRedesSociales;
