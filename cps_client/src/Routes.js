import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login'
import NotFound from './components/NotFound/NotFound';

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
    </Switch>;