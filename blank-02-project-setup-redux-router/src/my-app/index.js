import React from 'react';
import { render } from 'react-dom';

import MyDomain from './containers/my-domain';

import style from './style.less';
const MyApp = (props) => {
  return (
    <div className={`my-app ${style['module-style']}`}>
      <div>My App</div>
      <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
      <div className="layout">
        <div className="myDomain-workspace">
          <MyDomain myDomain={'myDomain ownProps'} />
        </div>
      </div>
    </div>
  );
};

// const MyApp = () => <div>MyApp</div>
export default MyApp;
