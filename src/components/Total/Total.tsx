import React from 'react';
import TopCard from '../TopCard/TopCard';
import { formatMonetary } from '../../utils/Utils';

import money from '../../assets/money-flying.svg';
import calendar from '../../assets/calendar.svg';

import styles from './Total.module.scss';

interface TotalProps {
  handleNext: () => void,
  data: any,
}

const Total: React.FC<TotalProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.total}`}>
      <h1 className={styles.titleAnimation}>Visão Geral</h1>
      <TopCard 
        image={money} 
        amount={formatMonetary(data['totalAmount'])}
        title={`Gasto total`}
      />

      <TopCard 
        image={calendar} 
        amount={formatMonetary(data['mostExpMonth'].amount)}
        title={`${data['mostExpMonth'].month} foi o mês mais caro`}
      />
      <button className={`next`} onClick={handleNext}>></button>
    </div>
  );
};

export default Total;