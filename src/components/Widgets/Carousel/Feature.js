import React from 'react';
import glamorous from 'glamorous';

const FeatureContainer = glamorous.div(
  {
    width: '100%',
    height: '340px',
    position: 'relative',
  },
  ({ url }) => ({
    background: `linear-gradient(
      45deg,
      rgba(0,0,0,0.95) 2%,
      rgba(0,0,0,0) 50%
    ), url('${url}')`,
    backgroundSize: 'cover',
  })
);

const FeatureText = glamorous.div({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#ffffff',
  textShadow: '1px 1px 2px #000',
  width: '50%',
  position: 'absolute',
  bottom: '60px',
  left: '100px',
});

const Feature = ({ filename, text, images }) => {
  return (
    <FeatureContainer url={images[filename]}>
      <FeatureText>
        {text}
      </FeatureText>
    </FeatureContainer>
  );
};

export default Feature;
