import React, { ReactElement } from 'react';
import { Column, Grid } from 'light-react-grid';
import styles from './NewsView.module.scss';
import MainNews from '../../components/mainNews';
import Container from '../../components/container';
import Toronto from '../../assets/images/toronto.jpeg';
import Mexico from '../../assets/images/mexico.jpeg';
import AbstractPainter from '../../assets/images/abstract-painter.jpeg';
import Archeology from '../../assets/images/arh.jpeg';
import NewsItem from '../../components/newsItem';

const NewsView = (): ReactElement => {
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
    <>
      <Container>
        <h1 className={styles.title}>News</h1>
      </Container>
      <MainNews newsData={newsData[0]} />
      <Container>
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
      </Container>
    </>
  );
};

export default NewsView;
