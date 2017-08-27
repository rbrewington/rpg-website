import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from './components/Navigation/BaseRoute';
import NavBar from './components/Navigation/NavBar';
import Pages from './components/Pages';
import menuConfig from './configs/menu.json';

global.__DEV__ =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <NavBar menuConfig={menuConfig} />
          <BaseRoute menuConfig={menuConfig} pages={Pages} />
        </div>
      </Router>
    );
  }
}

export default App;
