import React, { useState, useEffect, useContext } from 'react';
import { auth, firebase, db } from '../firebase';

import MembershipForm from '../components/MembershipForm';
import ProfileCard from '../components/ProfileCard';
import ConfirmModal from '../components/ActionModal';

import { AuthContext } from '../context/AuthContext';

const Members = props => {
  const [currentUser, setCurrentUser, handleLogin, handleLogout] = useContext(
    AuthContext
  );
  const [memberModal, setMemberModal] = useState({
    isModalOpen: false,
    member: {},
    isEditing: false
  });

  const [members, setMembers] = useState([]);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    db.collection('members').onSnapshot(function(querySnapshot) {
      var members = [];
      querySnapshot.forEach(function(doc) {
        let post = doc.data();
        post.memberId = doc.id;
        members.push(post);
      });
      setMembers(members);
    });

    // console.log(currentUser);
    const email =
      currentUser && 'email' in currentUser ? currentUser.email : false;
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

  const handleDeleteMember = member => {
    console.log(member);
    // toggleModal(true);
    db.collection('members')
      .doc(currentUser.email)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
        setHasProfile(false);
      })
      .catch(function(error) {
        console.error('Error removing document: ', error);
      });

    handleMemberModal({});
  };

  const handleMemberModal = member => {
    setMemberModal({ isModalOpen: !memberModal.isModalOpen, member });
  };

  const handleEditModal = member => {
    setMemberModal({
      isModalOpen: !memberModal.isModalOpen,
      member,
      isEditing: true
    });
  };

  return (
    <div className='container'>
      <div className='docs-content'>
        <div className='columns' style={{ padding: '30px' }}>
          <div className='column col-8 col-sm-12'>
            {members ? (
              <div className='columns'>
                {members.map(item => (
                  <div className='column col-6'>
                    <ProfileCard
                      {...item}
                      isEditable={
                        currentUser
                          ? currentUser.user_id === item.creator_id
                          : false
                      }
                      onEdit={() => handleEditModal(item)}
                      onDelete={() => handleMemberModal(item)}
                      key={item.creator_id}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className='empty' style={{ height: '100vh' }}>
                <div className='empty-icon'>
                  <i className='icon icon-3x icon-people' />
                </div>
                <p className='empty-title h5'>
                  There appears to be no one here
                </p>
                <p className='empty-subtitle'>
                  Leave the computer and go find some friends
                </p>
              </div>
            )}
          </div>
          <div className='column col-4 col-sm-12'>
            <div className='card box'>
              <div className='card-body'>
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
                {currentUser && hasProfile ? (
                  <button
                    type='submit'
                    class='btn btn-secondary'
                    onClick={handleDeleteMember}
                  >
                    Delete Profile {console.log(currentUser && hasProfile)}
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <ConfirmModal
            title='Confirm Modal'
            content='Are you sure that you want to remove that?'
            active={memberModal.isModalOpen}
            handleConfirm={() => handleDeleteMember(memberModal.member)}
            handleClose={() => handleMemberModal({})}
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
