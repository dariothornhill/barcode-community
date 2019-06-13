import React, { useState, useEffect, useContext } from 'react';
import { auth, firebase, db } from '../firebase';
import MembershipForm from '../components/MembershipForm';
import ProfileCard from '../components/ProfileCard';
import { AuthContext } from '../context/AuthContext';

const Members = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(AuthContext);

  const [members, setMembers] = useState([]);
  const [hasProfile, setHasProfile] = useState(false);

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
    const email = currentUser && 'email' in currentUser ? currentUser.email : false;
    db.collection('members')
      .doc(email)
      .get()
      .then(x => setHasProfile(x.exists));
  }, [currentUser, setMembers, setHasProfile]);

  const handleAddMember = newMember => {
    newMember.creator_id = currentUser.user_id;
    console.log(newMember);
    db.collection('members')
      .doc(currentUser.email)
      .set(newMember)
      .then(x => {
        setHasProfile(true);
      });
  };
  const handleDeleteMember = () => {
    db.collection('members')
      .doc(currentUser.email)
      .delete()
      .then(() => {
        setHasProfile(false);
      });
  };

  return (
    <div className="container">
      <div class="docs-content">
        <div class="columns" style={{ padding: '30px' }}>
          <div class="column col-8 col-sm-12">
            {members ? (
              members.map(item => <ProfileCard {...item} key={item.creator_id} />)
            ) : (
              <div class="empty" style={{ height: '100vh' }}>
                <div class="empty-icon">
                  <i class="icon icon-3x icon-people" />
                </div>
                <p class="empty-title h5">There appears to be no one here</p>
                <p class="empty-subtitle">Leave the computer and go find some friends</p>
              </div>
            )}
          </div>
          <div class="column col-4 col-sm-12">
            <div class="card box">
              <div class="card-body">
                <h3>{hasProfile === false ? 'Create' : 'Update'} Profile</h3>
                <span>
                  By creating a developer profile, your skills and experience will be visible to other members,
                  potential employers and investors alike
                </span>
                {currentUser ? <MembershipForm onSubmit={handleAddMember} /> : <p>Sorry but you need to login first</p>}
                {currentUser && hasProfile ? (
                  <button type="submit" class="btn btn-secondary" onClick={handleDeleteMember}>
                    Delete Profile {console.log(currentUser && hasProfile)}
                  </button>
                ) : (
                  ''
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
