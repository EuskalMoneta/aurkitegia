import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import RechercheVilles from './components/RechercheVilles';

import ActionSearch from 'material-ui/svg-icons/action/search';

import {getToken} from './getToken';

const style = {
  marginLeft: 20,
};
const stylebtnrecherche= {
  marginBottom: 10,
};


/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  
  constructor(props){
      super(props);
      //avoir le token avant le chargement total du composant
      getToken();
  }
  
  //les propriétés du composant
  state = {
    datatoken: null,
    dataSource: [],
    dataVille: [],
    valueVille: [],
  };
  
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }; 
  
  
  render() {
    return (
      <div>
        <Paper zDepth={2} >
        <TextField
            floatingLabelText="Mot clés"
            hintText="Journal"
            id="motcles" 
            style={style}
            underlineShow={false} 
            fullWidth={true}
        />
        <Divider />
        <AutoComplete
            hintText="Boulangerie, bar ..."
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            floatingLabelText="Catégorie"
            style={style}
            underlineShow={false} 
            fullWidth={true}
        />
        <RechercheVilles  />
        
        
        <RaisedButton label=" Rechercher" primary={true} style={stylebtnrecherche} icon={<ActionSearch />} />
        </Paper>
      </div>
    );
  }
}
