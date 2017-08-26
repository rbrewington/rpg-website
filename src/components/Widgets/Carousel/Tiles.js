import React from 'react';
import glamorous from 'glamorous';

const TilesContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: '100px',
});
const Tile = glamorous.div(
  {
    flexGrow: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    color: '#ffffff',
    fontSize: '1.1rem',
    textAlign: 'center',
    padding: '19px 11px 11px',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    ':hover': { cursor: 'pointer' },
  },
  ({ imageUrl, active }) => {
    return {
      background: `${active
        ? 'linear-gradient(rgba(54, 129, 30, 0.7), rgba(54, 129, 30, 0.7))'
        : 'linear-gradient(rgba(133, 133, 133, 0.65), rgba(133, 133, 133, 0.65))'}, url('${imageUrl}')`,
      backgroundSize: 'cover',
    };
  }
);

const Tiles = ({ steps, activeIndex = 0, setActiveIndex, images }) => {
  return (
    <TilesContainer>
      {steps.map((step, i) => {
        const { filename } = step;
        return (
          <Tile
            key={`${step.text}_${i}`}
            onClick={() => setActiveIndex(i)}
            imageUrl={images[filename]}
            active={i === activeIndex}
          >
            <span>
              {step.text}
            </span>
            <glamorous.Span fontSize="14px" textTransform="uppercase">
              {step.type}
            </glamorous.Span>
          </Tile>
        );
      })}
    </TilesContainer>
  );
};

export default Tiles;
