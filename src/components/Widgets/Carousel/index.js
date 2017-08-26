import React from 'react';
import glamorous from 'glamorous';
import WizardLayout from '../../WizardEngine';
import RenderActive from '../../WizardEngine/RenderActive';
import Feature from './Feature';
import Tiles from './Tiles';

// TODO: cycle through carousel on timer

const CarouselContainer = glamorous.div({});

const Carousel = ({ items, images }) => {
  const steps = items.map(item => ({ ...item, component: 'Feature' }));
  return (
    <WizardLayout
      steps={steps}
      stepComponents={{ Feature }}
      Wrapper={CarouselContainer}
    >
      <RenderActive images={images} />
      <Tiles images={images} />
    </WizardLayout>
  );
};

export default Carousel;
