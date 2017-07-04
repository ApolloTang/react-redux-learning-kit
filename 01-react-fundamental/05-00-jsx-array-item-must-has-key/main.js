import _ from 'lodash';
import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

  // JXS's array item must have key attribute with unique value

  render() {
    return (
      <div>
        {[
          <div key={_.uniqueId()} >one</div>,
          <div key={_.uniqueId()} >two</div>,
          <div key={_.uniqueId()} >three</div>,
          React.createElement('div', {key:_.uniqueId()}, 'four')
        ]}
      </div>
    );
  }

}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
