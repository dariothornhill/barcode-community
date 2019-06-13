import React, { useState, useEffect, useContext } from 'react';
import { auth, firebase, db } from '../firebase';
import MembershipForm from '../components/MembershipForm';
import ProfileCard from '../components/ProfileCard';
import { AuthContext } from '../context/AuthContext';

const Members = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(
    AuthContext
  );

  const [members, setMembers] = useState([]);
  useEffect(() => {
    db.collection('members')
      // .doc(threadId)
      // .collection('comments')
      .onSnapshot(function(querySnapshot) {
        var threads = [];
        querySnapshot.forEach(function(doc) {
          let post = doc.data();
          // post.threadId = doc.id;
          threads.push(post);
        });

        setMembers(threads);
      });
  }, []);
  console.log(currentUser);
  const handleAddMember = newMember => {
    newMember.creator_id = currentUser.user_id;
    console.log(newMember);
    db.collection('members').add(newMember);
  };
  return (
    <div className='container'>
      <div class='docs-content'>
        <div class='columns' style={{ padding: '30px' }}>
          <div class='column col-8 col-sm-12'>
            {members ? (
              members.map(item => <ProfileCard {...item} />)
            ) : (
              <div class='empty' style={{ height: '100vh' }}>
                <div class='empty-icon'>
                  <i class='icon icon-3x icon-people' />
                </div>
                <p class='empty-title h5'>There appears to be no one here</p>
                <p class='empty-subtitle'>
                  Leave the computer and go find some friends
                </p>
              </div>
            )}
          </div>
          <div class='column col-4 col-sm-12'>
            <div class='card box'>
              <div class='card-body'>
                <h3>Create Profile</h3>
                <span>
                  By creating a developer profile, your skills and experience
                  will be visible to other members, potential employers and
                  investors alike
                </span>
                {currentUser ? (
                  <MembershipForm onSubmit={handleAddMember} />
                ) : (
                  <p>Sorry but you need to login first</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
