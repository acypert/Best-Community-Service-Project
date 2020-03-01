import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Services from './views/Services';
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
import Register from "./views/Register";
import Registered from "./views/Registered";
import Rentals from "./views/Rentals";
import Events from "./views/Events";
import Donation from "./views/Donation";
import DonationThanks from "./views/DonationThanks";
import PaidServices from "./views/PaidServices";
import BookedService from "./views/BookedService";
import BookedEvent from "./views/BookedEvent";
import BookedRental from "./views/BookedRental";
import FreeServices from "./views/FreeServices";

const routing = (
    <Router>
        <MenuHeader/>
        {/*<App />*/}

        <Switch>
            <Redirect exact path={"/"} to={"/services"}/>
            <Redirect exact path={"/home"} to={"/services"}/>
            {/*<Route exact path={"/home"} component={}*/}
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/services"} component={Services} />
            <Route exact path={"/paidservices"} component={PaidServices} />
            <Route exact path={"/freeservices"} component={FreeServices} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/registered"} component={Registered} />
            <Route exact path={"/rentals"} component={Rentals} />
            <Route exact path={"/events"} component={Events} />
            <Route exact path={"/donation"} component={Donation} />
            <Route exact path={"/thanksforyourdonation"} component={DonationThanks} />
            <Route exact path={"/bookedservice"} component={BookedService} />
            <Route exact path={"/bookedevent"} component={BookedEvent} />
            <Route exact path={"/bookedrental"} component={BookedRental} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
