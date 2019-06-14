import React from 'react';

const ActionModal = props => {
  return (
    <div className={`modal modal-sm ${props.active ? 'active' : ''}`}>
      <a href="#close" className="modal-overlay" aria-label="Close" onClick={props.handleClose} />
      <div className="modal-container">
        <div className="modal-header">
          <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={props.handleClose} />
          <div className="modal-title text-bold">{props.title}</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <p>{props.content}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={props.handleClose} style={{ marginRight: '1em' }}>
            {' '}
            Cancel
          </button>
          <button className="btn btn-primary" onClick={props.handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
