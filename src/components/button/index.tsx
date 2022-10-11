import React from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const location = useLocation();
  return (
    <button
      className={cx({
        [styles.button]: location.pathname === '/news',
        [styles.anchorButton]: location.pathname === '/',
      })}
    >
      {text}
    </button>
  );
};

export default Button;
