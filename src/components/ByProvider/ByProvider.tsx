import React from 'react';
import TopCard from '../TopCard/TopCard';
import { List, Item } from '../List/List';
import { formatMonetary, capitalize } from '../../utils/Utils';

import latam from '../../assets/latam.png';
import styles from './ByProvider.module.scss';

interface ByProviderProps {
  handleNext: () => void,
  data: any,
}

const ByProvider: React.FC<ByProviderProps> = ({ handleNext, data }) => {
  return (
    <div className={`${styles.byProvider}`}>
      <h1 className={styles.titleAnimation}>Fornecedor que mais faturou</h1>
      <TopCard 
        image={latam} 
        amount={formatMonetary(data[0]['vlrDocumento'])}
        title={`${data[0].fornecedor} (${data[0].descricao})`}
      />

      <List>
        {data
          .map((item: any) => (
          <Item
            title={`${item.fornecedor} (${capitalize(item.descricao)})`}
            text={formatMonetary(Number(item.vlrDocumento))}
          />
        ))}
      </List>
      <button className={`next`} onClick={handleNext}>></button>
    </div>
  );
};

export default ByProvider;