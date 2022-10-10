import React, { ReactElement } from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import styles from './NewsView.module.scss';
import MainNews from '../../components/mainNews';
import News from '../../components/news';
import Footer from '../../components/footer';

const NewsView = (): ReactElement => (
  <>
    <Header />
    <Section title="News" classNames={styles.section} />
    <MainNews />
    <News
      hideTitle
      button={
        <div className={styles.moreNewsWrapper}>
          <button className={styles.button}>Load more news</button>
        </div>
      }
    />
    <Footer />
  </>
);

export default NewsView;
