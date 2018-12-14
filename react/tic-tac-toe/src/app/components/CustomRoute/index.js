import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const whatRender = () => {

}

function CustomRoute ({isPrivate, auth, path, component, exact}) {
    if ( (isPrivate && auth) || (!isPrivate && !auth) )
      return <Route path={path} component={component} exact={exact} />
    else if (isPrivate && !auth) 
      return <Redirect to="/login" />
    return <Redirect to="/" />
}

export default CustomRoute;
