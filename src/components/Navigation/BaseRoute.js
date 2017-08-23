import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';

const BaseRoute = ({ menuConfig, pages }) => {
  return (
    <div>
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
    </div>
  );
};

export default BaseRoute;
