import React from 'react';

const Empty = props => {
  const { title } = props;
  return (
    <div className="empty">
      <div className="empty-icon">
        <i className="icon icon-people" />
      </div>
      <p className="empty-title h5">There are no {title}s</p>
      <p className="empty-subtitle">Use the form to right to create the first {title}</p>
      {/* <div className='empty-action'>
        <button className='btn btn-primary'>Send a message</button>
      </div> */}
    </div>
  );
};

export default Empty;
