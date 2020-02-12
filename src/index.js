import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./views/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import MenuHeader from "./views/MenuHeader";

const routing = (
    <Router>
        <MenuHeader/>
        {/*<App />*/}

        <Switch>
            <Redirect exact path={"/"} to={"/home"}/>
            {/*<Route exact path={"/home"} component={}*/}
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/home"} component={App} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
