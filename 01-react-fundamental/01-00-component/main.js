import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {
  constructor() {
    console.log(Date.now(), 'MyComponent has instantiated');
    super();
  }

  componentWillMount() {
    console.log(Date.now(), 'componentWillMount', );
    debugger;              // Pause here to check component is NOT in the DOM
  }

  componentDidMount() {
    debugger;              // Pause here to check component is in the DOM
    console.log(Date.now(), 'componentDidMount', );
  }

  render() {
    console.log(Date.now(), 'render');
    return (
      <div>Component</div>
    );
  }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer, ()=>{console.log('Done !');});


