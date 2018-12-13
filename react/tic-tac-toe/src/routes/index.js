import React from 'react';
import App from '../app/screens/App'
import Login from '../app/screens/App/components/Login'
import { BrowserRouter as Router, Route, history} from 'react-router-dom'

const RoutesApp = () => {
  return (
    <Router forceRefresh={false}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default RoutesApp;
