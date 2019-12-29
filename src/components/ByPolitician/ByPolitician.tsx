import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import { formatMonetary } from '../../utils/Utils';

import professora from '../../assets/professora-marcivania.jpg';
import styles from './ByPolitician.module.scss';

interface ByPoliticianProps {
  handleNext: () => void,
  data: any,
}

const ByPolitician: React.FC<ByPoliticianProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byPolitician}`}>
      <h1 className={styles.titleAnimation}>Qual parlamentar mais gastou</h1>
      <TopCard 
        image={professora} 
        amount={formatMonetary(data[0]['vlrDocumento'])}
        title={`${data[0].parlamentar} (${data[0].partido})`}
      />

      <List>
        {data
          .map((item: any) => (
          <Item
            title={`${item.parlamentar} (${item.partido})`}
            text={formatMonetary(Number(item.vlrDocumento))}
          />
        ))}
      </List>
      <button className={`next`} onClick={handleNext}>></button>
    </div>
  );
};

export default ByPolitician;