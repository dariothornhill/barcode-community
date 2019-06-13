import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Form from '../components/Form';

const Login = props => {
  const [currentUser, setCurrentUser, handleLogin] = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      props.history.push('/');
    }
  }, []);

  const handleSubmit = data => {
    handleLogin(data, props.history);
    // props.history.push('/');
  };
  return (
    <div class='empty' style={{ height: '100vh' }}>
      <div class='empty-icon'>
        <i class='icon icon-3x icon-people' />
      </div>
      <p class='empty-title h5'>Login</p>
      <p class='empty-subtitle'>
        In order to join our awesome community, you must first prove you're
        worthy with a Github account.
      </p>
      <div class='empty-action input-group input-inline'>
        <button class='btn' onClick={handleSubmit}>
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
