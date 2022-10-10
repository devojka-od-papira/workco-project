import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Section from '../section';
import styles from './News.module.scss';
import NewsItem from '../newsItem';
import Toronto from '../../assets/images/toronto.jpeg';
import Mexico from '../../assets/images/mexico.jpeg';
import AbstractPainter from '../../assets/images/abstract-painter.jpeg';
import Archeology from '../../assets/images/arh.jpeg';

interface NewsProps {
  hideTitle?: boolean | undefined;
  button: React.ReactElement;
}

const News: React.FC<NewsProps> = ({ hideTitle = false, button }) => {
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
    <Section hideTitle={hideTitle} classNames={styles.section} title="News">
      <Grid>
        {newsData.map((newsItem) => (
          <Column
            className={styles.wrapper}
            size={{ md: 4, lg: 6 }}
            key={newsItem.title}
          >
            <NewsItem
              title={newsItem.title}
              src={newsItem.src}
              description={newsItem.description}
              alt={newsItem.alt}
            />
          </Column>
        ))}
      </Grid>
      <Grid>{button}</Grid>
    </Section>
  );
};

export default News;
