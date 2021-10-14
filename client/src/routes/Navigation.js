import React from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Custom Components
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';
import AppoinmentBooking from '../containers/AppoinmentBooking';
import Treatment from '../containers/Treatment';

const Navigation = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/signup' render={() => <Signup />} />
          <Route exact path='/signin' render={() => <Signin />} />
          <Route exact path='/' render={() => <Dashboard />} />
          <Route
            exact
            path='/appoinmentbooking'
            render={() => <AppoinmentBooking />}
          />
          <Route exact path='/treatment' render={() => <Treatment />} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
