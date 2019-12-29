import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.generalFooter} ${styles.slideLeft2s}`}>
      <p>Dados públicos obtidos em <a href="https://www2.camara.leg.br/transparencia/cota-para-exercicio-da-atividade-parlamentar/dados-abertos-cota-parlamentar" target="_blank" rel="noopener noreferrer">https://www2.camara.leg.br</a><br /> em 28/12/2019.</p>
      <p>Projeto de <a href="/" target="_blank" rel="noopener noreferrer">código aberto</a>.</p>
    </footer>
  );
};

export default Footer;