import React from 'react';

//import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

import history from './history';

var createReactClass = require('create-react-class');

const Header = createReactClass({
        
    _handleClick(e) {
        
        //this.context.router.push('/')
        //this.context.router.push('/');
        //browserHistory.push('/');
        history.push('/');
        //this.refs.leftNav.toggle();
    },
    
    render() {
        return (
            <AppBar
                title="Annuaire Eusko"
                onTitleTouchTap={this._handleClick}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
});

module.exports = Header;
//export default Header;