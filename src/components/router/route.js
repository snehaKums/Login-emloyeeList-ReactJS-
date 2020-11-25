import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "../LoginForm/LoginForm";
import Dashboard from "../Dashboard/dashboard";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Login-emloyeeList-ReactJS-" exact component={Login} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}