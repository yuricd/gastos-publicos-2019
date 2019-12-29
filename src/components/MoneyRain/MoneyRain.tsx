import React from 'react';
import './MoneyRain.scss';

const MoneyRain: React.FC = () => {
  return (
    <div className={`moneyRain`}>
      {Array(35).fill(0).map((_, idx) => 
        <i className={`money money--${idx}`} />
      )}

      {Array(15).fill(0).map((_, idx) => 
        <i className={`coin coin--${idx}`} />
      )}
    </div>
  );
};

export default MoneyRain;