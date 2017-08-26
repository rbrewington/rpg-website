import React from 'react';
import glamorous from 'glamorous';
import Tag from '../Tag';

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
  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  width: '50%',
  position: 'absolute',
  top: '160px',
  left: '100px',
});

export default class Feature extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.setNextSlide, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  setNextSlide = () => {
    const { steps, activeIndex = 0, setActiveIndex } = this.props;
    const nextIndex = activeIndex < steps.length - 1 ? activeIndex + 1 : 0;
    return setActiveIndex(nextIndex);
  };
  render() {
    const { filename, type, text, images } = this.props;
    return (
      <FeatureContainer url={images[filename]}>
        <FeatureText>
          <Tag type={type} style={{ marginBottom: '10px' }} />
          {text}
        </FeatureText>
      </FeatureContainer>
    );
  }
}
