import React from 'react';
import {connect} from 'react-redux';

import {mapStoreToProps, mapDispatchToProps} from './selector';

import style from './style.less';
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handle_addStuff = () => {
    this.props.dispatch_someAction( new Date() );
  }

  render() {
    return (
      <div className={`my-domain ${style['module-style']}`}>
        <div>My Domain</div>

        <pre><code>
          { JSON.stringify(this.props.ownProps, null, 4) }
        </code></pre>

        <button onClick={this.handle_addStuff}>Do Something</button>

        <pre><code>
          { JSON.stringify(this.props.myDomain, null, 4) }
        </code></pre>

      </div>
    )
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(MyComponent);
