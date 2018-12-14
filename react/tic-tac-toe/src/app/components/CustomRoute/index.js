import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function CustomRoute ({isPrivate, auth, path, component: Component, exact}) {
  console.log({isPrivate, auth, path, Component}, 'values')
    // if (!auth && isPrivate) {
    //   return <Redirect to='/login' />;
    // }
    // return <Component {...props} />
    if (isPrivate && auth){
      return <Route exact={!!exact} path={path} component={Component} />
    }
    else if (isPrivate && !auth) {
      console.log('Second')
      return <Redirect to="/login" />
    }
    else if(!isPrivate && !auth)
    return  <Route path={path} component={Component} />
    
      console.log('Third')
    return <Redirect to="/" />
}

export default CustomRoute;
