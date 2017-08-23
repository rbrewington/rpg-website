import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';

const IconContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
});

const Icon = glamorous(FontAwesome, {
  rootEl: 'div',
  forwardProps: ['className', 'name', 'spin', 'style', 'size'],
})({
  color: '#7d7d7d',
  '& + span': {
    marginLeft: '3px',
  },
});

const Icons = () => {
  return (
    <IconContainer>
      <Icon name="facebook-square" size="2x" />
      <Icon name="twitter-square" size="2x" />
      <Icon name="youtube-square" size="2x" />
      <Icon name="twitch" size="2x" />
      <Icon
        name="search"
        size="2x"
        style={{ color: '#4b9e2a', marginLeft: '16px' }}
      />
      <Icon
        name="user"
        size="2x"
        style={{ color: '#4b9e2a', marginLeft: '10px' }}
      />
    </IconContainer>
  );
};

export default Icons;
