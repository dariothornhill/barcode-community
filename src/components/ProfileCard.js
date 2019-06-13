import React from 'react';
import moment from 'moment';

const ProfileCard = props => {
  // console.log(props);
  const {
    profile_name,
    profile_projects,
    profile_website,
    content,
    profile_photo
  } = props;
  return (
    <div class='post' key={props.creator_id}>
      <div style={{ paddingBottom: '1em' }}>
        <figure
          class='avatar avatar-lg float-left'
          style={{ marginRight: '1em' }}
        >
          <img src={profile_photo} alt='Avatar' />
        </figure>

        <div>
          <b>{profile_name}</b>
          <span class='link'>{profile_website}</span>
        </div>
      </div>
      <div class='clearfix' />

      {/* <span class='text-bold'>Projects</span> */}
      <div class='divider' data-content='Projects' />
      <p>{profile_projects}</p>

      {/* <span class='text-bold'>A little about yourself</span> */}
      <div class='divider' data-content='A little about yourself' />
      <p>{content}</p>

      {/* <p class='post_info'>
        <b>{comments ? comments.length : 0} comments</b>
        <a href={`/thread/${threadId}`} class='btn float-right'>
          Reply
        </a>
      </p> */}
    </div>
  );
};

export default ProfileCard;
