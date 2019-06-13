import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './context/AuthContext';
import Nav from './components/Nav';
import Login from './containers/Login';
import Home from './containers/Home';
import Thread from './containers/Thread';
import Members from './containers/Members';

const About = () => {
  return (
    <div class='empty' style={{ height: '100vh' }}>
      <div class='empty-icon'>
        <i class='icon icon-3x icon-search' />
      </div>
      <p class='empty-title h5'>What is Barcode?</p>
      <p class='empty-subtitle'>
        Barcode is an inclusive community of software developers who meet
        regularly in order to learn, share and collaborate
      </p>
      {/* <div class='empty-action input-group input-inline'>
        <input class='form-input' type='text' placeholder='' />
        <button class='btn btn-primary input-group-btn'>Search</button>
      </div> */}
    </div>
  );
};
// const Members = () => {
//   return (
//     <div class='empty' style={{ height: '100vh' }}>
//       <div class='empty-icon'>
//         <i class='icon icon-3x icon-people' />
//       </div>
//       <p class='empty-title h5'>There appears to be no one left</p>
//       <p class='empty-subtitle'>Leave the computer and go find some friends</p>
//       {/* <div class='empty-action input-group input-inline'>
//         <input class='form-input' type='text' placeholder='' />
//         <button class='btn btn-primary input-group-btn'>Search</button>
//       </div> */}
//     </div>
//   );
// };

const App = () => {
  return (
    <div className='App'>
      <Router>
        <div>
          <AuthProvider>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />

              <Route exact path='/about' component={About} />
              <Route exact path='/members' component={Members} />
              <Route exact path='/thread/:threadId' component={Thread} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
};

export default App;
