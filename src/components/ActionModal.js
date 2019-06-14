import React from 'react';

const ActionModal = props => {
  return (
    <div class={`modal modal-sm ${props.active ? 'active' : ''}`}>
      <a
        href='#close'
        class='modal-overlay'
        aria-label='Close'
        onClick={props.handleClose}
      />
      <div class='modal-container'>
        <div class='modal-header'>
          <a
            href='#close'
            class='btn btn-clear float-right'
            aria-label='Close'
            onClick={props.handleClose}
          />
          <div class='modal-title text-bold'>{props.title}</div>
        </div>
        <div class='modal-body'>
          <div class='content'>
            <p>{props.content}</p>
          </div>
        </div>
        <div class='modal-footer'>
          <button
            class='btn'
            onClick={props.handleClose}
            style={{ marginRight: '1em' }}
          >
            {' '}
            Cancel
          </button>
          <button class='btn btn-primary' onClick={props.handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
