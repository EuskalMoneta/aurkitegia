import React from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';

import {getToken} from '../getToken';


const RechercheVilles = React.createClass({
        
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: true,
                        dataVille: [],
                        valueVille: [],
		};
	},
        
        componentDidMount() { 
            
        },
        
	onChange (value) {
		this.setState({
			value: value,
		});
	},
	
	getVilles (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}
                
              return fetch("https://api.integration.eusko.meta-it.fr/villes-prestataires/?langue=fr", { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+getToken()
                },
              })
              .then( (response) => response.json() )
              .then( (json) => {
                  //console.log('res brute ', json)
                  var villes = [];
                  json.map(function(item) {
                      var obj = {};
                      obj.value = item.id;
                      obj.label = item.nom +' ('+item.code_postal+')';
                      villes.push(obj);
                  });
                  console.log('parsed villes 2', villes)

                  return { options: villes};
              });
	},
	
	render () {
		

		return (
			<div className="section">
				<Select.Async 
                                    searchPromptText="Tapez pour rechercher"
                                    loadingPlaceholder="Chargement"
                                    placeholder="Villes et villages"
                                    floatingLabelText="Lieux"
                                    className="newselect"
                                    multi={true} 
                                    value={this.state.value} 
                                    onChange={this.onChange} 
                                    valueKey="value" 
                                    labelKey="label" 
                                    loadOptions={this.getVilles} 
                                     />
				
			</div>
		);
	}
});

module.exports = RechercheVilles;
