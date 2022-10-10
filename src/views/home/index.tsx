import React, { ReactElement } from 'react';
import 'light-react-grid/dist/index.css';
import Header from '../../components/header';
import News from '../../components/news';
import Classes from '../../components/classes';
import Footer from '../../components/footer';
import styles from './Home.module.scss';

const Home = (): ReactElement => (
  <>
    <Header />
    <News
      button={
        <div className={styles.moreNewsWrapper}>
          <a className={styles.moreNews} href="https://www.google.com">
            More news
          </a>
        </div>
      }
    />
    <Classes />
    <Footer />
  </>
);

export default Home;
