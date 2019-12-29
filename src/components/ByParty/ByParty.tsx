import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import { formatMonetary } from '../../utils/Utils';

import pt from '../../assets/pt.png';
import styles from './ByParty.module.scss';

interface ByPartyProps {
  handleNext: () => void,
  data: any,
}

const ByParty: React.FC<ByPartyProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byParty}`}>
      <h1 className={`${styles.titleAnimation}`}>Qual partido mais gastou (absolutamente)</h1>
      <TopCard 
        image={pt} 
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

export default ByParty;