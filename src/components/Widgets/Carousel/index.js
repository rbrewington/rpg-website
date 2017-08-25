import React from 'react';
import glamorous from 'glamorous';
import WizardLayout from '../../WizardEngine';
import RenderActive from '../../WizardEngine/RenderActive';
import Feature from './Feature';
import Tiles from './Tiles';

// TODO: cycle through carousel on timer
// TODO: tiles are shitty looking

const CarouselContainer = glamorous.div({
  width: '1280px',
  margin: '0 auto',
});

const Carousel = ({ items, images }) => {
  const steps = items.map(item => ({ ...item, component: 'Feature' }));
  return (
    <WizardLayout
      steps={steps}
      stepComponents={{ Feature }}
      Wrapper={CarouselContainer}
    >
      <RenderActive images={images} />
      <Tiles />
    </WizardLayout>
  );
};

export default Carousel;
