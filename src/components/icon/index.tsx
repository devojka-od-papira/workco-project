import React from 'react';
import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

export interface IconProps {
  icon: string;
  onClick: () => void;
  mobileMenuOpen: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, onClick, mobileMenuOpen }) => {
  const cx = classNames.bind(styles);
  return (
    <button
      className={cx({
        menuOpen: mobileMenuOpen,
        menuClosed: !mobileMenuOpen,
      })}
      onClick={onClick}
    >
      <img src={icon} alt="" />
    </button>
  );
};

export default Icon;
