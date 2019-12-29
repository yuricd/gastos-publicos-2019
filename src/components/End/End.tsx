import React from 'react';
import Footer from '../Footer/Footer';
import styles from './End.module.scss';

interface EndProps {
  handleNext: () => void,
}

const End: React.FC<EndProps> = ({ handleNext }) => {
  return (
    <div className={`${styles.end}`}>
      <h1 className={styles.slideLeft1s}>Feliz <span className="yellow">2020</span> para você!</h1> 
      <h1 className={styles.slideLeft2s}>E que você trabalhe bastante para poder <span className="yellow">financiar</span> nossos políticos.</h1>
      
      <button className={`btn ${styles.titleAnimation}`} onClick={handleNext}>Voltar</button>

      <Footer />
    </div>
  );
};

export default End;