import React from 'react';
import cx from 'classnames';
import styles from './Logo.module.scss';

interface LogoProps {
  mobileMenuOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ mobileMenuOpen }) => (
  <div
    className={cx({
      [styles.logo]: mobileMenuOpen,
      [styles.logoSmall]: !mobileMenuOpen,
    })}
  />
);

export default Logo;
