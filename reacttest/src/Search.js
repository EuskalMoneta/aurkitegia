import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


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
  state = {
    dataSource: [],
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
        <Divider />
        <AutoComplete
            hintText="Donibane garazi 64220"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            style={style}
            floatingLabelText="Ville (CP)"
            underlineShow={false} 
            fullWidth={true}
        />
        
        <RaisedButton label="Rechercher" primary={true} style={stylebtnrecherche} />
        </Paper>
      </div>
    );
  }
}
