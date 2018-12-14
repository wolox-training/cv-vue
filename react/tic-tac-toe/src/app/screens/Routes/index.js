import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomRoute from 'app/components/CustomRoute'
import App from 'app/screens/App'
import Login from 'app/screens/App/components/Login';
import { tokenExist } from '../App/utils';

class Routes extends Component {
  componentDidMount() {
    tokenExist(this.props)
  }

  render (){
    return (
      <Router>
        <>
        <Switch>
          <CustomRoute path="/login" exact component={Login} auth={this.props.isLogged}/>
          <CustomRoute path="/" component={App} isPrivate auth={this.props.isLogged}/>
          <Redirect to="/" />
        </Switch>
        </>
      </Router>
    )
  }
}

const mapStateToProps = ( { general : { isLogged } } ) => ({
  isLogged
});

export default connect(mapStateToProps)(Routes);
