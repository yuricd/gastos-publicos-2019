import React from 'react';
import styles from './TopCard.module.scss';

interface TopCardProps {
  image: string,
  amount: string,
  title: string,
}

const TopCard: React.FC<TopCardProps> = ({ image, amount, title }) => {
  return (
    <div className={`${styles.topCard} ${styles.slideLeft1s}`}>
        <figure>
          <img src={image} alt={title} />

          <figcaption>
            <span className={styles.amount}>
              {amount}
            </span>
            <span className={styles.title}>
              {title}
            </span>
          </figcaption>
        </figure>
      </div>
  );
};

export default TopCard;