import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './context/AuthContext';
import Nav from './components/Nav';
import Login from './containers/Login';
import Landing from './containers/Landing';
import Home from './containers/Home';
import Thread from './containers/Thread';
import Members from './containers/Members';

const About = () => {
  return (
    <div className='empty' style={{ height: '100vh' }}>
      <div className='empty-icon'>
        <i className='icon icon-3x icon-search' />
      </div>
      <p className='empty-title h5'>What is Barcode?</p>
      <p className='empty-subtitle'>
        Barcode is an inclusive community of software developers who meet regularly in order to learn, share and
        collaborate
      </p>
      {/* <div className='empty-action input-group input-inline'>
        <input className='form-input' type='text' placeholder='' />
        <button className='btn btn-primary input-group-btn'>Search</button>
      </div> */}
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Router>
        <div>
          <AuthProvider>
            {/* <Nav /> */}
            <Switch>
              <Route exact path='/' component={Landing} />
              {/* <Route exact path='/home' component={Home} />
              <Route exact path='/login' component={Login} />

              <Route exact path='/about' component={About} />
              <Route exact path='/members' component={Members} />
              <Route exact path='/thread/:threadId' component={Thread} /> */}
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
};

export default App;
