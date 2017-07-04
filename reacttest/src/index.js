import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from './Header';
import Search from './Search';
import './index.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//change la balise title
document.title = "Eusko Aurkitegia";


// il faut tout mettre dans <MuiThemeProvider> sinon ça ne fonctionne pas
// si il y a plusieurs composant, il faut les mettres dans un <div>...         
const Appi = () => (
  <MuiThemeProvider>
    <div >
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={6} md={4}>
            <Search />
          </Col>
        </Row>
      </Grid>
      <FloatingActionButton >
        <ActionSearch />
      </FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

//cela va se placer dans la div id="root"
ReactDOM.render(
  <Appi />,
  document.getElementById('root')
);
