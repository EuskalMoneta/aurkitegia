import React from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';

import {getToken} from '../getToken';

var createReactClass = require('create-react-class');

const RechercheVilles = createReactClass({
        
	//propTypes: {
	//	label: React.PropTypes.string,
	//},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: true,
                        options: [],
		};
	},
        
        componentDidMount() {
            //this.setState('options', this.getVilles)
            this.setState((prevState) => {
                return {options:  this.getVilles};
            });

        },
        
	onChange (value) {
		this.setState({
			value: value,
		});
	},
	
	getVilles (input) {
		//if (!input) {
		//	return Promise.resolve({ options: [] });
		//}
                
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
                  Object.keys(json).forEach(function(item) {
                      var obj = {};
                      obj.value = json[item].id;
                      obj.label = json[item].nom +' ('+json[item].code_postal+')';
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
                                    multi={this.state.multi} 
                                    value={this.state.value} 
                                    onChange={this.onChange} 
                                    valueKey="value" 
                                    labelKey="label" 
                                    loadOptions={this.getVilles} 
                                    menuContainerStyle={{ zIndex: 4 }} 
                                     />
				
			</div>
		);
	}
});

module.exports = RechercheVilles;
