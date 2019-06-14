import React, { useContext, useEffect, useState } from 'react';
import { auth, firebase, db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

import moment from 'moment';

import Post from '../components/Post';
import Empty from '../components/Empty';
import ConfirmModal from '../components/ActionModal';

import Sidebar from './Sidebar';

const Home = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(AuthContext);

  const [threads, setThreads] = useState([]);
  const [postModal, setPostModal] = useState({
    isModalOpen: false,
    post: {},
    isEditing: false
  });
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

  const handleDeletePost = data => {
    console.log(data);
    // toggleModal(true);
    db.collection('threads')
      .doc(data.threadId)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
      })
      .catch(function(error) {
        console.error('Error removing document: ', error);
      });

    handlePostModal({});
  };

  const handlePostModal = post => {
    setPostModal({ isModalOpen: !postModal.isModalOpen, post });
  };

  const handleEditModal = member => {
    setPostModal({
      isModalOpen: !postModal.isModalOpen,
      member,
      isEditing: true
    });
  };

  console.log(threads);
  return (
    <div className="container">
      <div className="docs-content">
        <div className="columns" style={{ padding: '30px' }}>
          <div className="column col-9 col-sm-12">
            {threads ? (
              threads
                .sort(function(a, b) {
                  var dateA = new Date(a.createdAt),
                    dateB = new Date(b.createdAt);
                  return dateB - dateA;
                })
                .map(item => (
                  <Post
                    {...item}
                    isEditable={
                      currentUser
                        ? currentUser.user_id === item.creator_id
                        : false
                    }
                    onEdit={() => handleEditModal(item)}
                    onDelete={() => handlePostModal(item)}
                  />
                ))
            ) : (
              <Empty title="threads" />
            )}
          </div>

          <div className="column col-3">
            <Sidebar />
          </div>
          <ConfirmModal
            title='Confirm Modal'
            content='Are you sure that you want to remove that?'
            active={postModal.isModalOpen}
            handleConfirm={() => handleDeletePost(postModal.post)}
            handleClose={() => handlePostModal({})}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
