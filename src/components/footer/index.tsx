import React from 'react';
import Container from '../container';

import styles from './footer.module.scss';

const Footer: React.FC = () => (
  <>
    <div className={styles.noContent} />
    <footer>
      <div className={styles.content}>
        <Container>
          <h3 className={styles.title}>Art school</h3>
          <p className={styles.description}>127a, Painting street - USA</p>
        </Container>
      </div>
    </footer>
  </>
);

export default Footer;
