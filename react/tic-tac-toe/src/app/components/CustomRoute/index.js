import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function CustomRoute ({isPrivate, auth, path, component: Component, exact}) {
    if (isPrivate && auth)
      return <Route exact={exact} path={path} component={Component} />
    else if (isPrivate && !auth)
      return <Redirect to="/login" />
    else if(!isPrivate && !auth)
      return  <Route path={path} component={Component} />
    
    return <Redirect to="/" />
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.bool,
  auth: PropTypes.bool,
  path: PropTypes.string,
  component: PropTypes.func,
  exact: PropTypes.bool
}

export default CustomRoute;
