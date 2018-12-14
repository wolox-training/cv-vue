import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomRoute from 'app/components/CustomRoute'
import Navbar from 'app/components/Navbar';
import Game from 'app/screens/App/components/Game';
import Login from 'app/screens/App/components/Login';

const Routes = (props) => {
  console.log(props, 'props on algo')
  return (
    <Router>
      <>
      <Navbar />
      <Switch>
        <CustomRoute path="/" component={Game} isPrivate auth={ props.isLogged }/>
        <CustomRoute path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      </>
    </Router>
  )
}

const mapStateToProps = ( { general : { isLogged } } ) => ({
  isLogged
});

export default connect(mapStateToProps)(Routes);
