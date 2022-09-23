import React, { useState } from 'react';
import { Column, Grid, useBreakpoint } from 'light-react-grid';
import cx from 'classnames';
import Container from '../container';
import Menu from '../menu';
import Logo from '../logo';
import MenuButton from '../MenuButton';
import styles from './Header.module.scss';
import closeIcon from '../../assets/icons/close.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const menu = [
    {
      title: 'Home',
      path: '',
    },
    {
      title: 'Classes',
      path: '',
    },
    {
      title: 'News',
      path: '',
    },
    {
      title: 'Gallery',
      path: '',
    },
    {
      title: 'About us',
      path: '',
    },
  ];
  return (
    <header className={cx(styles.header)}>
      <Container>
        <Grid>
          <Column
            className={cx(mobileMenuOpen && styles.menu)}
            size={{ sm: 1, md: 2, lg: 2 }}
          >
            <Logo mobileMenuOpen={mobileMenuOpen} />
          </Column>
          <Column
            className={styles.menu}
            size={{ sm: 3, md: 6, lg: 9 }}
            offsetLeft={{ lg: 1 }}
          >
            <Menu menu={menu} mobileMenuOpen={mobileMenuOpen} />
            {breakpoint === 'sm' && (
              <MenuButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                icon={mobileMenuOpen ? closeIcon : hamburgerIcon}
                mobileMenuOpen={mobileMenuOpen}
              />
            )}
          </Column>
        </Grid>
      </Container>
    </header>
  );
};
export default Header;
