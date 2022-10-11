import React from 'react';
import Container from '../container';
import styles from './MainNews.module.scss';
import Toronto from '../../assets/images/toronto.jpeg';

const MainNews: React.FC = () => (
  <Container>
    <div className={styles.content}>
      <h2 className={styles.title}>
        Prism of Relations: the 2022 Toronto Biennial
      </h2>
      <div className={styles.mainImageWrapper}>
        <img className={styles.img} src={Toronto} alt="toronto" />
      </div>
      <p className={styles.shortText}>
        The biennial`s curators asked how land might be an archive, prompting
        reflections on human conflicts over land as well as visions for
        alternate relations.
      </p>
    </div>
  </Container>
);

export default MainNews;
