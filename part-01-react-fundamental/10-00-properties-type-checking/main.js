import React from 'react';
import reactDOM from 'react-dom';
import PropTypes from 'prop-types';

//
// There are two type error in the following code, PropTypes will catch them
//


const Item = (props) => <div>{props.item}</div>;
Item.propTypes = {
  item: PropTypes.string
};


class List extends React.Component {
  static propTypes = {     //<------------------ Alternatively, you can declare propTypes as class's static property
    list: PropTypes.array
  }
  render() {
    const list = (Object.prototype.toString.call(this.props.list) === '[object Array]' ) ? this.props.list : [];
    return (
      <div>
        { list.map( item => <Item key={item} item={item} />) }
      </div>
    );
  }
}
// Item.propTypes = {
//   item: PropTypes.string
// };


class MyComponent extends React.Component {
  constructor(props) {
    super();
    this.handle_addItem = this.handle_addItem.bind(this);
    this.state = { list: [] };
  }

  handle_addItem() {
    const list_prev = this.state.list;
    const list_next = [].concat(list_prev);
    const item_new = Date.now();
    // const item_new = Date.now()+'';

    list_next.push(item_new);
    this.setState({
      list: list_next
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handle_addItem} >Add Item</button>
        {/* <List list={this.state.list} /> */}
        <List list={1234} />
      </div>
    );
  }
};


const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent />, reactContainer);;



