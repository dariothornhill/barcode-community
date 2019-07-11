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
  const [profileInfo, setProfileInfo] = useState({});

  // let profileInfo;

  useEffect(() => {
    db.collection('members')
      .get()
      .then(function(querySnapshot) {
        var members = [];
        querySnapshot.forEach(function(doc) {
          let profile = doc.data();
          profile.memberId = doc.id;
          if (profile.email === currentUser.email) {
            setProfileInfo(profile);
          }
          members.push(profile);
        });
        setMembers(members);
      })
      .then(() => {
        // let obj = members.find(o => o.email === currentUser.email);
        // console.log(members, obj);
        // setProfile(members.find(o => o.email == currentUser.email));
      });

    // console.log(members, obj);
  }, []);

  const handleAddMember = newMember => {
    newMember.creator_id = currentUser.user_id;
    newMember.user_email = currentUser.email; //Assuming that the user may login using a different email than their preferred work email

    db.collection('members')
      .add(newMember)
      .then(x => {
        // setHasProfile(true);
      });
  };

  const handleDeleteMember = member => {
    db.collection('members')
      .doc(member.memberId)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
        // setHasProfile(false);
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
                {/* {console.log(members.find(o => o.email === 'currentUser.email'))} */}
                {/* {console.log(profileInfo)} */}
                {currentUser ? (
                  <MembershipForm
                    profile={profileInfo ? profileInfo : {}}
                    onSubmit={handleAddMember}
                  />
                ) : (
                  <p>Sorry but you need to login first</p>
                )}
              </div>
            </div>
          </div>
          <ConfirmModal
            title='Remove Profile?'
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
