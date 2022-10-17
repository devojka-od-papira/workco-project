import React, { ReactElement } from 'react';
import styles from './NewsView.module.scss';
import MainNews from '../../components/mainNews';
import Container from '../../components/container';
import Toronto from '../../assets/images/toronto.jpeg';
import Mexico from '../../assets/images/mexico.jpeg';
import AbstractPainter from '../../assets/images/abstract-painter.jpeg';
import Archeology from '../../assets/images/arh.jpeg';
import NewsList from '../../components/newsList';
import Button from '../../components/button';

const NewsView = (): ReactElement => {
  const newsData = [
    {
      title: 'Prism of Relations: the 2022 Toronto Biennial',
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      image: {
        src: Toronto,
        alt: 'Toronto',
      },
    },
    {
      title: "Mexico's Best-Kept Secret Is Zacatecas’s Vibrant Art Scene",
      src: Mexico,
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      alt: 'Mexico',
      image: {
        src: Mexico,
        alt: 'Mexico',
      },
    },
    {
      title:
        'Mary Obering, Abstract Painter With a Passionate Following, Dies at 85',
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      image: {
        src: AbstractPainter,
        alt: 'Abstract painter',
      },
    },
    {
      title:
        "Archaelogists Discovered 800-Year-Old Ancient Palace That May Have Belonged To Genghis Khan's Grandson",
      description:
        "The biennial's curators asked how land might be an archive, prompting reflections on human conflicts over land as well as visions for alternate relations.",
      image: {
        src: Archeology,
        alt: 'Archeology',
      },
    },
  ];
  return (
    <>
      <Container>
        <h1 className={styles.title}>News</h1>
      </Container>
      <MainNews newsData={newsData[0]} />
      <NewsList newsData={newsData} />
      <Button text="Load more news" />
    </>
  );
};

export default NewsView;
