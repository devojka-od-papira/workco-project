import React from 'react';

import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

interface LogoProps {
  mobileMenuOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ mobileMenuOpen }) => {
  const cx = classNames.bind(styles);
  return (
    <div
      className={cx({
        logo: mobileMenuOpen,
        logo_small: !mobileMenuOpen,
      })}
    />
  );
};

export default Logo;
