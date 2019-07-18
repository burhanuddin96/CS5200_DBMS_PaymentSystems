import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export default ({component: C, props: cProps, ...rest}) => {
    const isLoggedIn = cProps.isAuthenticated;
    return <Route {...rest}
                  render={props =>
                      isLoggedIn ? (
                          <C {...props} { ...cProps} />
                      ) : (
                          <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
                      )} />;
}
