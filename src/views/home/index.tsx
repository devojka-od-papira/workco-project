import React, { ReactElement } from 'react';
import 'light-react-grid/dist/index.css';
import News from '../../components/news';
import Classes from '../../components/classes';
import styles from './Home.module.scss';

const Home = (): ReactElement => (
  <>
    <News
      title="News"
      buttonText="More news"
      classNames={styles.moreNewsWrapper}
    />
    <Classes />
  </>
);

export default Home;
