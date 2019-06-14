import React, { useContext } from 'react';
import { auth, firebase, db } from '../firebase';
import CreatePostForm from '../components/CreatePostForm';
import { AuthContext } from '../context/AuthContext';

import moment from 'moment';

const Sidebar = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(AuthContext);

  const handleAddPost = newPost => {
    // const { user } = this.props;
    // Set a flag to indicate loading
    // this.setState({ addingThread: true });
    // Add a new todo from the value of the input
    db.collection('threads').add({
      title: newPost.title,
      content: newPost.content,
      createdAt: moment().format('LLL'),
      author: currentUser.userName ? currentUser.userName : currentUser.user_id,
      creator_id: currentUser.user_id,
      photoURL: currentUser.photo
      // completed: false
    });
    // Remove the loading flag and clear the input
    // this.setState({ addingThread: false, post: {} });
  };
  return (
    <div>
      <div className="card box">
        <div className="card-body">
          <h6>Create New Post</h6>
          {currentUser ? (
            <CreatePostForm onSubmit={handleAddPost} />
          ) : (
            <p>Sorry but you need to login in order to submit a post</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
