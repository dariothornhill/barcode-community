import React, { useState } from 'react';

const Form = props => {
  console.log(props);
  const [fields, setfielddata] = useState({ name: '', password: '' });

  const handleFieldChange = e => {
    setfielddata({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(fields);
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="col-3 col-sm-12">
          <label className="form-label">Name</label>
        </div>
        <div className="col-6 col-sm-12">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            name="name"
            value={fields.name}
            onChange={e => handleFieldChange(e)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-3 col-sm-12">
          <label className="form-label">Password</label>
        </div>
        <div className="col-6 col-sm-12">
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            name="password"
            value={fields.password}
            onChange={e => handleFieldChange(e)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Form;
