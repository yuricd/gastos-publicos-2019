import React from 'react';
import styles from './List.module.scss';

interface ListProps {
  children: React.ReactNode,
}

interface ItemProps {
  title: string,
  text: string,
}

const Item: React.FC<ItemProps> = ({ title, text }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{text}</p>
    </li>
  );
};

const List: React.FC<ListProps> = ({ children }) => {
  return (
      <ol className={`${styles.list} ${styles.slideLeft2s}`}>
        {children}
      </ol>
  );
};

export { List, Item };