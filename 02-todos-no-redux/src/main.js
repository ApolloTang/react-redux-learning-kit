import React from 'react';
import {render} from 'react-dom';

import style from 'main.less';
import fonts from 'common/fonts/';

import App from 'todo-app/';
const rootContainer = document.getElementById("root-container");
render( <App />, rootContainer);
