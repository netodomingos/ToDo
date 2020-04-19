import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Main from './Pages/Main/Main'

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/main/:token' component={Main} />
        </Switch>
    </Router>
  );
}
