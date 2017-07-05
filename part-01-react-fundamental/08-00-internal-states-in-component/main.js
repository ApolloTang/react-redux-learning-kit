import _ from 'lodash';
import React from 'react';
import reactDOM from 'react-dom';

{/* -----------------------------------------------------------------------------

    This is an example of how to use internal state of React component
    Here the internal state is a list, and the component convert this list into
    a presentation element in dom.

    A button is available to add more item into the list.

------------------------------------------------------------------------------- */}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.item}</div>
    );
  }
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handle_addItem = this.handle_addItem.bind(this);  // [1]
    this.state = {                                         // [2]
      list: [ 1234567890, 1234567891, 1234567892, 1234567893 ]
    };
  }
  handle_addItem() {
    const list_prev = this.state.list;
    const list_next = [].concat(list_prev);                // [3]
    const item_new = Date.now()+'';
    list_next.push(item_new);
    this.setState({                                        // [4]
      list: list_next
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handle_addItem} >Add Item</button>
        {
          this.state.list.map(
            item => <Item key={_.uniqueId()} item={item} />
          )
        }
      </div>
    );
  }

};

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;



{/* -----------------------------------------------------------------------------

    [1] In non life cycle method, 'this' in React Class ES6 syntex
        is lexical scope, you have to manually bind 'this' to your
        method.

    [2] • 'this.state' is this component internal state.
        • *NeverEver* set 'this.state' directly.
        • You can only change 'this.state' via 'this.setState()'.
        • Calling 'this.setState()' will trigger render().

    [3] Clone the array, and push into the clone rather then mutate internal state

    [4] Calling 'this.setState()' to trigger reder().

------------------------------------------------------------------------------- */}
