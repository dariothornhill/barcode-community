import React from 'react';

const Empty = props => {
  const { title } = props;
  return (
    <div class='empty'>
      <div class='empty-icon'>
        <i class='icon icon-people' />
      </div>
      <p class='empty-title h5'>There are no {title}s</p>
      <p class='empty-subtitle'>
        Use the form to right to create the first {title}
      </p>
      {/* <div class='empty-action'>
        <button class='btn btn-primary'>Send a message</button>
      </div> */}
    </div>
  );
};

export default Empty;
