import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import { formatMonetary } from '../../utils/Utils';

import sp from '../../assets/sp.svg';
import styles from './ByUF.module.scss';

interface ByUFProps {
  handleNext: () => void,
  data: any,
}

const ByUF: React.FC<ByUFProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byUF}`}>
      <h1 className={`${styles.titleAnimation}`}>Estado que mais gastou</h1>
      <TopCard 
        image={sp} 
        amount={formatMonetary(Number(Object.values(data)[0]))}
        title={Object.keys(data)[0]}
      />

      <List>
        {Object.keys(data)
          .map((key, idx) => (
          <Item
            title={key}
            text={formatMonetary(Number(Object.values(data)[idx]))}
          />
        ))}
      </List>
      <button className={`next`} onClick={handleNext}>></button>
    </div>
  );
};

export default ByUF;