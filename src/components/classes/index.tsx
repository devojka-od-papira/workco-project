import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Section from '../section';
import ClassItem from '../classItem';
import Container from '../container';
import DrawingPainting from '../../assets/images/drawing&painting.jpeg';
import Sculpture from '../../assets/images/Tuileries.jpeg';
import Mosaic from '../../assets/images/antonioGaudi.jpeg';
import Photography from '../../assets/images/photography.jpeg';
import Graphic from '../../assets/images/linocut.jpeg';
import Calligraphy from '../../assets/images/caligraphy.jpeg';
import ArtHistory from '../../assets/images/rome.jpeg';
import GraphicDesign from '../../assets/images/graphicDesign.jpeg';

import styles from './Classes.module.scss';

const Classes: React.FC = () => {
  const classData = [
    {
      title: 'Drawing & painting',
      src: DrawingPainting,
      alt: 'drawing & painting',
    },
    {
      title: 'Sculpture',
      src: Sculpture,
      alt: 'sculpture',
    },
    {
      title: 'Mosaic',
      src: Mosaic,
      alt: 'mosaic',
    },
    {
      title: 'Photography',
      src: Photography,
      alt: 'photography',
    },
    {
      title: 'Graphic (Kids)',
      src: Graphic,
      alt: 'graphic (kids)',
    },
    {
      title: 'Calligraphy (Kids)',
      src: Calligraphy,
      alt: 'calligraphy (kids)',
    },
    {
      title: 'Art history',
      src: ArtHistory,
      alt: 'art history',
    },
    {
      title: 'Graphic design',
      src: GraphicDesign,
      alt: 'graphic design',
    },
  ];
  return (
    <div>
      <Container>
        <Grid>
          <Column size={{ lg: 2 }} className={styles.section}>
            <Section title="Classes" />
          </Column>
        </Grid>
        <Grid>
          {classData.map((classItem) => (
            <ClassItem
              key={classItem.title}
              title={classItem.title}
              src={classItem.src}
              alt={classItem.alt}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Classes;
