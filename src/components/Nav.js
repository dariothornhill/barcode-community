import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Nav = () => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(
    AuthContext
  );

  return (
    <header className='navbar' style={{ padding: '10px 30px' }}>
      <section className='navbar-section'>
        <Link className='btn btn-link' to='/'>
          Home
        </Link>
        <Link className='btn btn-link' to='/members'>
          Members
        </Link>
        <Link className='btn btn-link' to='/about'>
          About
        </Link>
      </section>
      <section className='navbar-center' />
      <section className='navbar-section'>
        {currentUser ? (
          <div>
            {`Welcome back, ${currentUser.userName}  `}
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link className='btn btn-link' to='/login'>
            Login
          </Link>
        )}
      </section>
    </header>
  );
};

export default Nav;
