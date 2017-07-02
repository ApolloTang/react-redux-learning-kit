import React, {Component} from 'react';

import { Route, Switch, Link, Redirect } from 'react-router-dom';

import style from './style.less';
class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`langindPage ${style['module-style']}`} >
              Not found
            </div>
        );
    }
}

export default Layout;

