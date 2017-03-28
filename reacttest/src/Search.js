import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input'


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
  
  //les propriétés du composant
  state = {
    datatoken: null,
    dataSource: [],
    dataVille: [],
  };
  
  componentDidMount() {
    //avoir le token au chargement du composant
    fetch("https://api.integration.eusko.meta-it.fr/api-token-auth/", { 
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'demo', password: 'demo'})
    })
    .then(function(response) {
        return response.json() 
    })
    .then( (json) => {
        //sauver le token dans le composant
        this.setState({
           datatoken: json.token
        })
        console.log('parsed json', json)
    }).then(function(body) {
        console.log(body);
    });
    
  }// end componentDidMount
  
  

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }; 
  
  chercherVilles = (value) => {
    fetch("https://api.integration.eusko.meta-it.fr/towns/?zipcode=64220", { 
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token '+this.state.datatoken
      },
    })
    .then(function(response) {
        return response.json() 
    })
    .then( (json) => {
        var villes = [];
        json.map(function(item,i) {
            villes[i] = item.town +' ('+item.zip+')';
        });
        
        this.setState({
           dataVille: villes
        });
        
        console.log('parsed json', json)
    }).then(function(body) {
        console.log(body);
    });
  }
  
  handleChange = (value) => {
      return true;
  }
  
  render() {
    return (
      <div>
        <Paper zDepth={2} >
        token = {this.state.datatoken}
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
        <Divider />
        <AutoComplete
            hintText="Donibane garazi 64220"
            dataSource={this.state.dataVille}
            onUpdateInput={this.chercherVilles}
            filter={AutoComplete.fuzzyFilter}
            style={style}
            listStyle={{ maxHeight: 150, overflow: 'auto' }}
            floatingLabelText="Ville (CP)"
            underlineShow={false} 
            fullWidth={true}
        />
        <Divider />
        <ChipInput
            id="champville"
            defaultValue={[]}
            onChange={(chips) => this.handleChange(chips)}
            openOnFocus
            dataSource={this.state.dataVille}
            onUpdateInput={this.chercherVilles}
            hintText="Donibane garazi 64220"
            style={style}
            listStyle={{ maxHeight: 150, overflow: 'auto' }}
            floatingLabelText="Ville (CP)"
            underlineShow={false} 
            fullWidth={true}
            fullWidthInput={true}
        />
        
        <RaisedButton label="Rechercher" primary={true} style={stylebtnrecherche} />
        </Paper>
      </div>
    );
  }
}
