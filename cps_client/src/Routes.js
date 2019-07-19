import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import NotFound from './components/NotFound/NotFound';
import AuthRoute from './AuthRoute';

export default ({ authProps }) =>
    <Switch>
        <AuthRoute path="/home" exact component={Home} props={ authProps }/>
        <Route path="/login" exact
               render={(props) => <Login {...props} props={ authProps }/>}/>
        <Route path="/register" exact component={Register}/>
        <Route component={NotFound} />
    </Switch>;