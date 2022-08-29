import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Section from '../section';
import Container from '../container';
import styles from './News.module.scss';
import NewsItem from '../newsItem';
import Toronto from '../../assets/images/toronto.jpeg';
import Mexico from '../../assets/images/mexico.jpeg';
import AbstractPainter from '../../assets/images/abstract-painter.jpeg';
import Archeology from '../../assets/images/arh.jpeg';

const News: React.FC = () => {
  const newsData = [
    {
      title: 'Prism of Relations: the 2022 Toronto Biennial',
      src: Toronto,
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      alt: 'Toronto',
    },
    {
      title: "Mexico's Best-Kept Secret Is Zacatecas’s Vibrant Art Scene",
      src: Mexico,
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      alt: 'Mexico',
    },
    {
      title:
        'Mary Obering, Abstract Painter With a Passionate Following, Dies at 85',
      src: AbstractPainter,
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      alt: 'Abstract painter',
    },
    {
      title:
        "Archaelogists Discovered 800-Year-Old Ancient Palace That May Have Belonged To Genghis Khan's Grandson",
      src: Archeology,
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      alt: 'Archeology',
    },
  ];
  return (
    <div>
      <Container>
        <Grid>
          <Column size={{ lg: 2 }} className={styles.section}>
            <Section title="News" />
          </Column>
        </Grid>
        <Grid>
          {newsData.map((newsItem) => (
            <NewsItem
              key={newsItem.title}
              title={newsItem.title}
              src={newsItem.src}
              description={newsItem.description}
              alt={newsItem.alt}
            />
          ))}
        </Grid>
        <Grid>
          <Column size={{ lg: 2 }}>
            <div className={styles.moreNewsWrapper}>
              <a className={styles.moreNews} href="https://www.google.com">
                More news
              </a>
            </div>
          </Column>
        </Grid>
      </Container>
    </div>
  );
};

export default News;
