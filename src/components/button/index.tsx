import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);

export default Button;
