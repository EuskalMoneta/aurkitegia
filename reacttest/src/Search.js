import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import RechercheCategories from './components/RechercheCategories';
import RechercheVilles from './components/RechercheVilles';


import ActionSearch from 'material-ui/svg-icons/action/search';

import {getToken} from './getToken';


const stylebtnrecherche= {
  marginBottom: 10,
};


/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class Search extends Component {
  
  constructor(props){
      super(props);
      //avoir le token avant le chargement total du composant
      getToken();
  }
  
  
  render() {
    return (
      <div>
        <Paper zDepth={2} className="cont_search">
        
        <h3>Où utiliser mes Eusko</h3>

        <div className="cont_formsearch">
            <TextField
                floatingLabelText="Mots clés"
                id="motcles" 
                className="motcles"
                fullWidth={true}
            />

            <RechercheCategories />

            <RechercheVilles  />

            <RaisedButton label=" Rechercher" primary={true} style={stylebtnrecherche} icon={<ActionSearch />} />
        </div>
        </Paper>
      </div>
    );
  }
}
