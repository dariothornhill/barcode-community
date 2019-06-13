import React, { useContext, useEffect, useState } from 'react';
import { auth, firebase, db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

import moment from 'moment';

import Post from '../components/Post';
import Empty from '../components/Empty';
import CreatePostForm from '../components/CreatePostForm';
import Sidebar from './Sidebar';
import { comment } from 'postcss-selector-parser';

const Thread = props => {
  console.log(props);
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(AuthContext);

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, updateComment] = useState('');

  const threadId = props.match.params.threadId;

  useEffect(() => {
    db.collection('threads')
      .doc(threadId)
      .onSnapshot(function(doc) {
        // console.log('Current data: ', doc.data());
        setPost(doc.data());
      });

    db.collection('threads')
      .doc(threadId)
      .collection('comments')
      .onSnapshot(function(querySnapshot) {
        var comments = [];
        querySnapshot.forEach(function(doc) {
          comments.push(doc.data());
        });
        // console.log('Current cities in CA: ', cities.join(', '));
        setComments(comments);
      });
  }, [threadId]);

  const handleAddComment = e => {
    e.preventDefault();
    console.log(newComment);
    // Set a flag to indicate loading
    // this.setState({ addingThread: true });
    // Add a new todo from the value of the input
    db.collection('threads')
      .doc(threadId)
      .collection('comments')
      .add({
        // title: newPost.title,
        content: newComment,
        createdAt: moment().format('LLL'),
        author: currentUser.userName,
        photoURL: currentUser.photo
        // completed: false
      });

    updateComment('');
    // Remove the loading flag and clear the input
    // this.setState({ addingThread: false, post: {} });
  };

  console.log(post);
  return (
    <div className="container">
      <div className="docs-content">
        <div className="columns" style={{ padding: '30px' }}>
          <div className="column col-9 col-sm-12">
            <Post {...post} {...comments} />
            <div className="panel comments-indent">
              <div className="panel-header">
                <div className="panel-title text-bold">Add a Comment</div>
                <form>
                  <div className="input-group">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Say Something here"
                      value={newComment}
                      onChange={e => updateComment(e.target.value)}
                    />
                    <button className="btn btn-primary input-group-btn" type="button" onClick={handleAddComment}>
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="panel-body">
                {comments &&
                  comments.map(item => (
                    <div className="tile">
                      <div className="tile-icon">
                        <figure className="avatar">
                          <img src={item.photoURL} alt="Avatar" />
                        </figure>
                      </div>
                      <div className="tile-content">
                        <p className="tile-title text-bold">{item.author}</p>
                        <p className="tile-subtitle">{item.content}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <div className='panel-footer'>
                <div className='input-group'>
                  <input className='form-input' type='text' placeholder='Hello' />
                  <button className='btn btn-primary input-group-btn'>Send</button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="column col-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
