import React, { useState, useEffect, createContext } from 'react';
import { auth, db, provider } from '../firebase';
export const AuthContext = createContext();

export const AuthProvider = props => {
  console.log(props);
  const storedUser = JSON.parse(window.localStorage.getItem('user')) || null;
  const [currentUser, setCurrentUser] = useState(storedUser);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const handleLogin = (data, history) => {
    // console.log("log in user");
    // setCurrentUser(data);
    auth
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log('User token', token, user);

        const user_data = {
          user_id: user.uid,
          userName: user.displayName || user.uid,
          token: token,
          photo: user.photoURL,
          email: user.email
        };

        setCurrentUser(user_data);

        history.push('/');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.error('Error', error.code, error.message);
      });
  };

  const handleLogout = () => {
    // window.localStorage.removeItem('user');
    auth
      .signOut()
      .then(function() {
        console.log('signed out successfully');
      })
      .catch(function(error) {
        console.log('an error occurred signing out');
      });
    // context.destroySession();
    // props.history.push('/');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={[currentUser, setCurrentUser, handleLogin, handleLogout]}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
