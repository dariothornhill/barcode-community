import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Form from '../components/Form';

const Login = props => {
  const [currentUser, setCurrentUser, handleLogin] = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      props.history.push('/');
    }
  }, [currentUser, props.history]);

  const handleSubmit = data => {
    handleLogin(data, props.history);
    // props.history.push('/');
  };
  return (
    <div className="empty" style={{ height: '100vh' }}>
      <div className="empty-icon">
        <i className="icon icon-3x icon-people" />
      </div>
      <p className="empty-title h5">Login</p>
      <p className="empty-subtitle">
        In order to join our awesome community, you must first prove you're worthy with a Github account.
      </p>
      <div className="empty-action input-group input-inline">
        <button className="btn" onClick={handleSubmit}>
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
