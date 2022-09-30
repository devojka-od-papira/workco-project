import React from 'react';
import styles from './Logo.module.scss';
import ArtLogo from '../../assets/images/art-school-logo.svg';

const Logo: React.FC = () => (
  <img className={styles.logo} src={ArtLogo} alt="Logo" />
);

export default Logo;
