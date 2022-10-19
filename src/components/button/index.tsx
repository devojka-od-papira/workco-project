import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  loadMoreNews: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, loadMoreNews }) => (
  <button onClick={() => loadMoreNews()} className={styles.button}>
    {text}
  </button>
);

export default Button;
