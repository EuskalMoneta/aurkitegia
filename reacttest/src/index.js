import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

import history from './history';

import Header from './Header';
import Search from './Search';
import Listeresultat from './Listeresultat';
import Prestataire from './Prestataire';
import './index.css';




// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//change la balise title
document.title = "Eusko Aurkitegia";


//Definir les routes possibles

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/resultat' component={Listeresultat}/>
      <Route path='/prestataire/:number' component={Prestataire}/>
    </Switch>
  </main>
)


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
          
            <Main />
            
          </Col>
        </Row>
      </Grid>
    </div>
  </MuiThemeProvider>
);

//cela va se placer dans la div id="root"
//BrowserRouter sert à mettre en place le système de routes
ReactDOM.render((
  <Router history={history}>
    <Appi />
  </Router>
  ),
  document.getElementById('root')
);
