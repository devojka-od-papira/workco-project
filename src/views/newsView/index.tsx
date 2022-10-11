import React, { ReactElement } from 'react';
import styles from './NewsView.module.scss';
import MainNews from '../../components/mainNews';
import News from '../../components/news';
import Container from '../../components/container';

const NewsView = (): ReactElement => (
  <>
    <Container>
      <h1 className={styles.title}>News</h1>
    </Container>
    <MainNews />
    <News buttonText="Load more news" classNames={styles.moreNewsWrapper} />
  </>
);

export default NewsView;
