import React from 'react';
import moment from 'moment';

const Post = props => {
  // console.log(props);
  const { title, content, comments, author, createdAt, threadId } = props;
  return (
    <div class='post' key={props.threadId}>
      <div>
        <b>{title}</b>
        <span class='link'>
          posted {moment(createdAt).fromNow()} by <b>{author}</b>
        </span>
      </div>
      <p>{content}</p>

      <p class='post_info'>
        <b>{comments ? comments.length : 0} comments</b>
        <a href={`/thread/${threadId}`} class='btn float-right'>
          Reply
        </a>
      </p>
    </div>
  );
};

export default Post;
