import React, { useContext, useEffect, useState } from 'react';
import { auth, firebase, db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

import moment from 'moment';

import Post from '../components/Post';
import Empty from '../components/Empty';
import CreatePostForm from '../components/CreatePostForm';

import Sidebar from './Sidebar';

const Home = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(
    AuthContext
  );

  const [threads, setThreads] = useState([]);
  // const [newPost, updatePost] = useState({});
  // console.log(process.env.REACT_APP_APIKEY);

  useEffect(() => {
    db.collection('threads')
      // .doc(threadId)
      // .collection('comments')
      .onSnapshot(function(querySnapshot) {
        var threads = [];
        querySnapshot.forEach(function(doc) {
          let post = doc.data();
          post.threadId = doc.id;
          threads.push(post);
        });

        setThreads(threads);
      });
  }, []);

  console.log(threads);
  return (
    <div className='container'>
      <div class='docs-content'>
        <div class='columns' style={{ padding: '30px' }}>
          <div class='column col-9 col-sm-12'>
            {threads ? (
              threads
                .sort(function(a, b) {
                  var dateA = new Date(a.createdAt),
                    dateB = new Date(b.createdAt);
                  return dateB - dateA;
                })
                .map(item => <Post {...item} />)
            ) : (
              <Empty title='threads' />
            )}
          </div>

          <div class='column col-3'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
