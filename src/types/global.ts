export interface Image {
  src: string;
  alt: string;
}

export type NewsData = {
  title: string;
  description: string;
  image: Image;
};

export type DataItem = {
  img: string;
  thumbnail: string;
  title: string;
  shortText: string;
  slug: string;
  text: string;
};
