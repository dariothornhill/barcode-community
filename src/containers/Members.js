import React, { useState, useEffect, useContext } from 'react';
import { auth, firebase, db } from '../firebase';
import MembershipForm from '../components/MembershipForm';
import ProfileCard from '../components/ProfileCard';
import { AuthContext } from '../context/AuthContext';

const Members = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(AuthContext);

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
    <div className="container">
      <div className="docs-content">
        <div className="columns" style={{ padding: '30px' }}>
          <div className="column col-8 col-sm-12">
            {members ? (
              members.map(item => <ProfileCard {...item} />)
            ) : (
              <div className="empty" style={{ height: '100vh' }}>
                <div className="empty-icon">
                  <i className="icon icon-3x icon-people" />
                </div>
                <p className="empty-title h5">There appears to be no one here</p>
                <p className="empty-subtitle">Leave the computer and go find some friends</p>
              </div>
            )}
          </div>
          <div className="column col-4 col-sm-12">
            <div className="card box">
              <div className="card-body">
                <h3>Create Profile</h3>
                <span>
                  By creating a developer profile, your skills and experience will be visible to other members,
                  potential employers and investors alike
                </span>
                {currentUser ? <MembershipForm onSubmit={handleAddMember} /> : <p>Sorry but you need to login first</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
