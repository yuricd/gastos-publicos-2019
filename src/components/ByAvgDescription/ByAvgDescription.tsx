import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import { formatMonetary, capitalize } from '../../utils/Utils';

import promotion from '../../assets/promotion.svg';
import styles from './ByAvgDescription.module.scss';

interface ByAvgDescriptionProps {
  handleNext: () => void,
  data: any,
}

const ByAvgDescription: React.FC<ByAvgDescriptionProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byAvgDescription}`}>
      <h1 className={styles.titleAnimation}>Quanto um parlamentar gastou, em média, por descrição</h1>
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

export default ByAvgDescription;