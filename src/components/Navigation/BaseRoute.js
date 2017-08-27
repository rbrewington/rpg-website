import React from 'react';
import glamorous from 'glamorous';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';

const BodyContainer = glamorous.div({
  width: '1280px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  boxShadow: '0px 2px 4px rgba(132, 132, 132, 0.5)',
  height: 'calc(100% - 65px)',
});

const BaseRoute = ({ menuConfig, pages }) => {
  return (
    <BodyContainer>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      {Object.keys(menuConfig).map(key => {
        const menuItem = menuConfig[key];
        const Component = pages[menuItem.component];

        if (!Component) {
          // no route will be built if no component provided
          if (global.__DEV__) {
            console.error(
              'BaseRoute: Expected each menu item to have a component.',
              'Make sure that you provided the component name in the config and that there is a component definition in the pages object.'
            );
          }
          return null;
        }

        return (
          <Route
            key={key}
            path={process.env.PUBLIC_URL + menuItem.location}
            component={Component}
          />
        );
      })}
    </BodyContainer>
  );
};

export default BaseRoute;
