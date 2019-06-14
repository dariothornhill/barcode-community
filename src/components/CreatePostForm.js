import React, { useState } from 'react';

const Form = props => {
  // console.log(props);
  const [fields, setfielddata] = useState({
    title: '',
    content: ''
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = e => {
    setErrors({ ...errors, [e.target.name]: '' });
    setfielddata({ ...fields, [e.target.name]: e.target.value });
  };

  const handleBlur = e => {
    // console.log(e.target.value);
    if (e.target.value.length < 10) {
      setErrors({
        ...errors,
        [e.target.name]: 'Field must be at least 10 characters long'
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit(fields);
    setfielddata({});
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit} autoComplete="off">
      <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
        <input
          className="form-input"
          type="text"
          placeholder="Type Title"
          name="title"
          value={fields.title}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.title && <p className="form-input-hint">{errors.title}</p>}
      </div>
      <div className={`form-group ${errors.content ? 'has-error' : ''}`}>
        <textarea
          className="form-input"
          placeholder="Type content"
          name="content"
          value={fields.content}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.content && <p className="form-input-hint">{errors.content}</p>}
      </div>
      <button type="submit" className="btn btn-primary" disabled={errors.title || errors.content}>
        Submit
      </button>
    </form>
  );
};

export default Form;
