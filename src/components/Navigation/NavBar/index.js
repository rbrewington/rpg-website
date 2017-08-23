import React from 'react';
import glamorous from 'glamorous';
import Icons from './Icons';
import Logo from './Logo';
import MainMenu from './MainMenu';

const NavBarContainer = glamorous.div({
  backgroundColor: '#000000',
  padding: '0 80px 0 60px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  height: '65px',
});

const NavBar = props => {
  return (
    <NavBarContainer>
      <Logo />
      <MainMenu {...props} />
      <Icons />
    </NavBarContainer>
  );
};

export default NavBar;
