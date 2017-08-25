import React from 'react';
import Carousel from '../Widgets/Carousel';
import carouselConfig from '../../configs/carousel.json';

const importAll = r => {
  return r.keys().reduce((acc, curr) => {
    return {
      ...acc,
      [curr.replace('./', '')]: r(curr),
    };
  }, {});
};

// determine carousel image location here
const carouselImages = importAll(
  require.context('../../assets/carousel', false, /\.(png|jpe?g|svg)$/)
);

const Home = () => {
  return (
    <div>
      <Carousel
        items={Object.values(carouselConfig)}
        images={carouselImages}
      />HOME
    </div>
  );
};

export default Home;
