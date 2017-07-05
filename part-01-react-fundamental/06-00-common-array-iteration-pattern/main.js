import _ from 'lodash';
import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

  // With array iteration

  render() {
    return (
      <div>
        {
          ['a','b','c','d'].map( item => {
            const key = _.uniqueId();
            console.log(`key: ${key}, item: ${item}`);
            return(
              <div key={key} >{item}</div>
            );
          })
        }
      </div>
    );
  }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
