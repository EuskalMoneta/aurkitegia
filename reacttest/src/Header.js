import React from 'react';

import AppBar from 'material-ui/AppBar';
import './App.css';

/*const App = () => {
  return (<div className="App">Hello World!</div>);
};

export default App;*/

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const MyAwesomeReactComponent = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default MyAwesomeReactComponent;