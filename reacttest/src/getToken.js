import fetch from 'isomorphic-fetch';

export const getToken=()=> {
        //sessionStorage.clear();
        var tk = sessionStorage.getItem('token');
        console.log('token ',tk);
        if(tk===null){
            console.log('rentre?');
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
                //sauver le token 
                sessionStorage.clear();
                sessionStorage.setItem('token', json.token);
                console.log('parsed json getToken', json)
                return json.token;
            }).then(function(body) {
                console.log(body);
            });

        }else{
        
            return tk;
        }
    }

