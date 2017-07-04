import _ from 'lodash';
import React from 'react';
import reactDOM from 'react-dom';

{/* ------------------------------------------------------------------------------

  Component are meant to be modularized composable unit, with properties (props)
  passed in at its interface.

                 ┌─────────────────────┐
                 │                     │               ┌──────────────┐
                 │                     │               │              │
  ──── props ───▶│   <MyComponent />   │──── props ───▶│   <Item />   │
                 │                     │               │              │
                 │                     │               └──────────────┘
                 └─────────────────────┘

  Every time properties are push into a compoenent the virtual DOM
  performs its diffing algorithm to generate optimized instructions
  for fast DOM mutation.

-------------------------------------------------------------------------------- */}


class Item extends React.Component {
  constructor(props) {
    super(props);
    console.log('Item.Constructor(): this.props: ', this.props);
  }
  render() {
    return ( <div>{this.props.item}</div>);
  }
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('MyComponent.Constructor(): this.props: ', this.props);
  }
  render() {
    console.log('MyComponent.render(): props: ', this.props);
    return (
      <div> { this.props.list.map(
          item => <Item key={_.uniqueId()} item={item} />)
      }</div>
    );
  }
}


const reactContainer = document.getElementById('react-container');
reactDOM.render(<MyComponent list={['I','love','react', '!']} />, reactContainer);;
                                  // ^^^^^^^^^^^^^^^----- props is pushed in from top level component


