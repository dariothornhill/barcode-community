import React from 'react';
import moment from 'moment';

const Post = props => {
  // console.log(props);
  const { title, content, comments, author, createdAt, threadId } = props;
  return (
    <div className="post" key={props.threadId}>
      <div>
        {props.isEditable && (
          <div className="float-right">
            <span style={{ padding: '1em' }} onClick={props.onEdit}>
              <i className="icon icon-edit" />
            </span>
            <span onClick={props.onDelete}>
              <i className="icon icon-delete" />
            </span>
          </div>
        )}

        <b>{title}</b>
        <span className="link">
          posted {moment(createdAt).fromNow()} by <b>{author}</b>
        </span>
      </div>
      <p>{content}</p>

      <p className="post_info">
        <b>{comments ? comments.length : 0} comments</b>
        <a href={`/thread/${threadId}`} className="btn float-right">
          Reply
        </a>
      </p>
    </div>
  );
};

export default Post;
