import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import promotion from '../../assets/promotion.svg';
import styles from './ByDescription.module.scss';
import { formatMonetary, capitalize } from '../../utils/Utils';

interface ByDescriptionProps {
  handleNext: () => void,
  data: any,
}

const ByDescription: React.FC<ByDescriptionProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byDescription}`}>
      <h1 className={`${styles.titleAnimation}`}>Maiores gastos parlamentares</h1>

      <TopCard 
        image={promotion} 
        amount={formatMonetary(Number(Object.values(data)[0]))}
        title={Object.keys(data)[0]}
      />

      <List>
        {Object.keys(data)
          .map((key, idx) => (
          <Item
            title={capitalize(key)}
            text={formatMonetary(Number(Object.values(data)[idx]))}
          />
        ))}
      </List>
      <button className={`next`} onClick={handleNext}>></button>
    </div>
  );
};

export default ByDescription;