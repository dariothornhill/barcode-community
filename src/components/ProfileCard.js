import React from 'react';
import moment from 'moment';

const ProfileCard = props => {
  // console.log(props);
  const { profile_name, profile_projects, profile_website, content, profile_photo } = props;
  return (
    <div className="post" key={props.creator_id}>
      <div style={{ paddingBottom: '1em' }}>
        <figure className="avatar avatar-lg float-left" style={{ marginRight: '1em' }}>
          <img src={profile_photo} alt="Avatar" />
        </figure>

        <div>
          <b>{profile_name}</b>
          <span className="link">{profile_website}</span>
        </div>
      </div>
      <div className="clearfix" />

      {/* <span className='text-bold'>Projects</span> */}
      <div className="divider" data-content="Projects" />
      <p>{profile_projects}</p>

      {/* <span className='text-bold'>A little about yourself</span> */}
      <div className="divider" data-content="A little about yourself" />
      <p>{content}</p>

      {/* <p className='post_info'>
        <b>{comments ? comments.length : 0} comments</b>
        <a href={`/thread/${threadId}`} className='btn float-right'>
          Reply
        </a>
      </p> */}
    </div>
  );
};

export default ProfileCard;
