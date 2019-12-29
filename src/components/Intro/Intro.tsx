import React from 'react';
import Footer from '../Footer/Footer';
import styles from './Intro.module.scss';

interface IntroProps {
  handleNext: () => void,
}

const Intro: React.FC<IntroProps> = ({ handleNext }) => {
  return (
    <div className={`${styles.intro}`}>
      <h1 className={styles.titleAnimation}>Você sabe dizer quanto a câmara <strong>te custou</strong> em <span className="yellow">2019</span>?</h1>
      <button className={`btn ${styles.titleAnimation}`} onClick={handleNext}>Começar</button>

      <Footer />
    </div>
  );
};

export default Intro;