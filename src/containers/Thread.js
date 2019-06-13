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
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(
    AuthContext
  );

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
  }, []);

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
    <div className='container'>
      <div class='docs-content'>
        <div class='columns' style={{ padding: '30px' }}>
          <div class='column col-9 col-sm-12'>
            <Post {...post} {...comments} />
            <div class='panel comments-indent'>
              <div class='panel-header'>
                <div class='panel-title text-bold'>Add a Comment</div>
                <form>
                  <div class='input-group'>
                    <input
                      class='form-input'
                      type='text'
                      placeholder='Say Something here'
                      value={newComment}
                      onChange={e => updateComment(e.target.value)}
                    />
                    <button
                      class='btn btn-primary input-group-btn'
                      type='button'
                      onClick={handleAddComment}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div class='panel-body'>
                {comments &&
                  comments.map(item => (
                    <div class='tile'>
                      <div class='tile-icon'>
                        <figure class='avatar'>
                          <img src={item.photoURL} alt='Avatar' />
                        </figure>
                      </div>
                      <div class='tile-content'>
                        <p class='tile-title text-bold'>{item.author}</p>
                        <p class='tile-subtitle'>{item.content}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <div class='panel-footer'>
                <div class='input-group'>
                  <input class='form-input' type='text' placeholder='Hello' />
                  <button class='btn btn-primary input-group-btn'>Send</button>
                </div>
              </div> */}
            </div>
          </div>

          <div class='column col-3'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
