import React from 'react';

const Tiles = ({ steps, activeIndex = 0, setActiveIndex }) => {
  return (
    <div>
      {steps.map((step, i) => {
        return (
          <a key={`${step.text}_${i}`} onClick={() => setActiveIndex(i)}>
            {step.text}
          </a>
        );
      })}
    </div>
  );
};

export default Tiles;
