import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import {Screen} from './screen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/manhinh' component={Screen} />
        </Switch>
        
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
