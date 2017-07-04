import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
    
const App = () => {
  return (
          <div>
          <div className="App">Liste resultats!</div>
  
            <FloatingActionButton >
              <ActionSearch />
            </FloatingActionButton>
          </div>
          );
};

export default App;

