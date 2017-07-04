import React from 'react';
import reactDOM from 'react-dom';

class MyComponent extends React.Component {

  // JXS is transpile into JS behind the scene

  render() {
    return React.createElement(
      "div", null,
      React.createElement( "div", null, "a" ),
      React.createElement( "div", null, "b" ),
      React.createElement( "div", null, "c" ),
      React.createElement( "div", null, "d" )
    );
  }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
