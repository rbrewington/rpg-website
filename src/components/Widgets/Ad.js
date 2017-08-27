import React from 'react';
import glamorous from 'glamorous';

const AdContainer = glamorous.div(
  {
    backgroundColor: '#7d7d7d',
    color: '#ffffff',
    margin: '0 auto',
  },
  ({ height, width }) => {
    return {
      height,
      width,
    };
  }
);

const Ad = props => {
  return <AdContainer {...props}>Advertisement</AdContainer>;
};

export default Ad;
