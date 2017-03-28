import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Search from './Search';
import './index.css';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

document.title = "Eusko Aurkitegia";

// il faut tout mettre dans <MuiThemeProvider> sinon ça ne fonctionne pas
// si il y a plusieurs composant, il faut les mettres dans un <div>...         
const Appi = () => (
  <MuiThemeProvider>
    <div>
    <MyAwesomeReactComponent />
    <App />
    <Search />
    </div>
  </MuiThemeProvider>
);

//cela va se placer dans la div id="root"
ReactDOM.render(
  <Appi />,
  document.getElementById('root')
);
