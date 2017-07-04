import React from 'react';
import reactDOM from 'react-dom';

class MyComponent extends React.Component {

  // A component must have one and only one root node (not more)

  render() {
    return (
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    );
  }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
