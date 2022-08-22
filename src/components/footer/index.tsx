import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Container from '../container';

import styles from './footer.module.scss';

const Footer: React.FC = () => (
  <>
    <div className={styles.no_content} />
    <div className={styles.content}>
      <Container>
        <Grid>
          <Column size={{ lg: 3 }}>
            <h3 className={styles.title}>Art school</h3>
            <p className={styles.description}>127a, Painting street - USA</p>
          </Column>
        </Grid>
      </Container>
    </div>
  </>
);

export default Footer;
