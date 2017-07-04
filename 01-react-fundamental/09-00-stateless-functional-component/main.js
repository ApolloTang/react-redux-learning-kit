import React from 'react';
import reactDOM from 'react-dom';


// Stateless functional component are pure function, it has no internal state.
const Item = (props) => <div>{props.item}</div>;

const List = (props) => {
  const list = (props.list) ? props.list : [];
  return (
    <div>
      { list.map( item => <Item key={item} item={item} />) }
    </div>
  );
}

class MyComponent extends React.Component {
  constructor(props) {
    super();
    this.handle_addItem = this.handle_addItem.bind(this);
    this.state = { list: [] };
  }

  handle_addItem() {
    const list_prev = this.state.list;
    const list_next = [].concat(list_prev);
    const item_new = Date.now()+'';
    list_next.push(item_new);
    this.setState({ list: list_next });
  }

  render() {
    return (
      <div>
        <button onClick={this.handle_addItem} >Add Item</button>
        <List list={this.state.list} />
      </div>
    );
  }
};

const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;



