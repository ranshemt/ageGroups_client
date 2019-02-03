/** index.js
* @ this file renders the 'main' component
* @
*/
//React
import React from 'react'
//DOM-specific methods
import ReactDOM from 'react-dom'
//React router DOM bindings
import {BrowserRouter as Router} from 'react-router-dom'
//load the app faster
import * as serviceWorker from './serviceWorker'
//css
import './index.css';
//
//my router
import myReactRouter from './router/router'
//
//render
ReactDOM.render(
    <Router>
        <myReactRouter/>
    </Router>, document.getElementById('root')
)
//
serviceWorker.unregister();
