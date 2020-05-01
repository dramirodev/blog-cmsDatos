import React from 'react';
import {ContendorRedesSociales, ContenedorIcon, Icon} from '../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faTwitter,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';

const ListadoRedesSociales = () => (
  <ContendorRedesSociales>
    <ContenedorIcon
      href="https://www.linkedin.com/in/dramirobarragan/"
      target="_blank"
      aria-label="Botón Linkedin"
    >
      {/* <Icon className="fab fa-linkedin-in" />
       */}
      <FontAwesomeIcon icon={faLinkedinIn} />
    </ContenedorIcon>
    <ContenedorIcon
      href="https://twitter.com/dramirobarragan"
      target="_blank"
      aria-label="Botón Twitter"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </ContenedorIcon>
    <ContenedorIcon
      href="https://github.com/DavidRamiroBarragan"
      target="_blank"
      aria-label="Botón github"
    >
      <FontAwesomeIcon icon={faGithubAlt} />
    </ContenedorIcon>
  </ContendorRedesSociales>
);

export default ListadoRedesSociales;
