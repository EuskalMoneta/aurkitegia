import React from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';

import {getToken} from '../getToken';


const RechercheCategories = React.createClass({
        
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: true,
                        options: [],
		};
	},
        
        componentDidMount() { 
            //this.setState('options', this.getCategories)
            this.setState((prevState) => {
                return {options:  this.getCategories};
            });
        },
        
	onChange (value) {
		this.setState({
			value: value,
		});
	},
	
	getCategories (input) {
		//if (!input) {
		//	return Promise.resolve({ options: [] });
		//}
                
              return fetch("https://api.integration.eusko.meta-it.fr/categories-prestataires/?langue=fr", { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+getToken()
                },
              })
              .then( (response) => response.json() )
              .then( (json) => {
                  console.log('res brute ', json)
                  var categ = [];
                  json.map(function(item) {
                      var obj = {};
                      obj.value = item.id;
                      obj.label = item.nom;
                      categ.push(obj);
                  });
                  console.log('parsed categories', categ)

                  return { options: categ};
              });
	},
        
	
	render () {
		

		return (
			<div className="section">
				<Select.Async 
                                    searchPromptText="Tapez pour rechercher"
                                    loadingPlaceholder="Chargement"
                                    placeholder="Categories"
                                    className="newselect"
                                    multi={this.state.multi} 
                                    value={this.state.value} 
                                    onChange={this.onChange} 
                                    valueKey="value" 
                                    labelKey="label" 
                                    loadOptions={this.getCategories} 
                                    menuContainerStyle={{ zIndex: 50000 }} 
                                     />
				
			</div>
		);
	}
});

module.exports = RechercheCategories;

