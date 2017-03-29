import React from 'react';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';


const RechercheVilles = React.createClass({
        
	propTypes: {
		label: React.PropTypes.string,
	},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: true,
                        datatoken: 'fad83a6cff075748070fef5d2226b0110796d58c',
                        dataVille: [],
                        valueVille: [],
		};
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

		/*return fetch(`https://api.github.com/search/users?q=${input}`)
		.then((response) => response.json())
		.then((json) => {
                    console.log('cest commenT?', json.items);
			return { options: json.items };
		});*/
              return fetch("https://api.integration.eusko.meta-it.fr/towns/?zipcode=64120", { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+this.state.datatoken
                },
              })
              .then( (response) => response.json() )
              .then( (json) => {
                  var villes = [];
                  json.map(function(item,i) {
                      var obj = {};
                      obj.value = item.id;
                      obj.label = item.town +' ('+item.zip+')';
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
