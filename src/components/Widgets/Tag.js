import React from 'react';
import glamorous from 'glamorous';
import tagsConfig from '../../configs/tags.json';

const Tag = glamorous.div(
  {
    borderRadius: '4px',
    width: '100px',
    height: '34px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 'normal',
    textShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ({ type }) => {
    const { backgroundColor = '#000000', color = '#ffffff' } =
      tagsConfig[type] || {};

    return {
      backgroundColor,
      color,
      border: `2px solid ${color}`,
    };
  }
);

export default ({ type, ...restProps }) => {
  return (
    <Tag type={type} {...restProps}>
      {type}
    </Tag>
  );
};
