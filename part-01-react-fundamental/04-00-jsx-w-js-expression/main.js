import React from 'react';
import reactDOM from 'react-dom';


class MyComponent extends React.Component {

  // JXS can contain js expression

  render() {
    return (
      <div>
        { /* This is a comment */ }
        { true ? <b>true</b> : null }
        <hr />
        { false ? null : <div>false</div> }
        <br />
        { `1 + 1 = ${1+1} ` }
      </div>
    );
  }
}

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);
