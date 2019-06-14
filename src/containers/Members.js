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
  }, []);
  // console.log(currentUser);

  const handleAddMember = newMember => {
    newMember.creator_id = currentUser.user_id;
    console.log(newMember);
    db.collection('members').add(newMember);
  };

  const handleDeleteMember = member => {
    console.log(member);
    // toggleModal(true);
    db.collection('members')
      .doc(member.memberId)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
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
      <div class='docs-content'>
        <div class='columns' style={{ padding: '30px' }}>
          <div class='column col-8 col-sm-12'>
            {members ? (
              <div class='columns'>
                {members.map(item => (
                  <div class='column col-6'>
                    <ProfileCard
                      {...item}
                      isEditable={
                        currentUser
                          ? currentUser.user_id === item.creator_id
                          : false
                      }
                      onEdit={() => handleEditModal(item)}
                      onDelete={() => handleMemberModal(item)}
                    />
                  </div>
                ))}
              </div>
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
