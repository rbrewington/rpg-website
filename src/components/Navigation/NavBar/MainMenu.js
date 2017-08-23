import React from 'react';
import { NavLink } from 'react-router-dom';
import glamorous from 'glamorous';

const MenuItemsContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignSelf: 'stretch',
});

const MenuItem = glamorous(NavLink, {
  rootEl: 'a',
  forwardProps: [
    'to',
    'replace',
    'activeClassName',
    'activeStyle',
    'exact',
    'strict',
    'isActive',
    'location',
  ],
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignSelf: 'stretch',
  alignItems: 'center',
  fontSize: '1rem',
  color: '#ffffff',
  textDecoration: 'none',
  padding: '0 11px',

  // ':hover': { backgroundColor: '#4b9e2a', color: '#ffffff' },
});

const MainMenu = ({ menuConfig }) => {
  return (
    <MenuItemsContainer>
      {Object.keys(menuConfig).map(key => {
        const menuItem = menuConfig[key];
        return (
          <MenuItem
            key={key}
            to={process.env.PUBLIC_URL + menuItem.location}
            activeStyle={{
              color: '#4b9e2a',
              borderBottom: '5px solid #4b9e2a',
              borderTop: '5px solid transparent',
            }}
          >
            {menuItem.text}
          </MenuItem>
        );
      })}
    </MenuItemsContainer>
  );
};

export default MainMenu;
