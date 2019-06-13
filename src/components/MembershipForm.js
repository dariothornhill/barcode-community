import React, { useState } from 'react';

const MembershipForm = props => {
  // console.log(props);
  const [fields, setfielddata] = useState({});
  const [errors, setErrors] = useState({});
  const [collection, setCollection] = useState([]);
  const [newLearnObjective, setLearnObjective] = useState('');

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

  const handleAddCollection = data => {
    // console.log(data);
    // setCollection({ ...collection, data });
    setCollection(collection => collection.concat(data));
    // console.log(collection);
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit} autoComplete="off">
      <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
        <label>Full Name</label>
        <input
          className="form-input"
          type="text"
          placeholder="What is your full name?"
          name="profile_name"
          value={fields.name}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.title && <p className="form-input-hint">{errors.title}</p>}
      </div>
      <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
        <label>Email</label>
        <input
          className="form-input"
          type="text"
          placeholder="What is your email?"
          name="email"
          value={fields.email}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.title && <p className="form-input-hint">{errors.title}</p>}
      </div>
      <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
        <label>Your website</label>
        <input
          className="form-input"
          type="text"
          placeholder="What's your website?"
          name="profile_website"
          value={fields.website}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.title && <p className="form-input-hint">{errors.title}</p>}
      </div>
      <div className={`form-group ${errors.content ? 'has-error' : ''}`}>
        <label>What projects are you working on?</label>
        <textarea
          className="form-input"
          placeholder="Please keep to under 1000 words"
          name="profile_projects"
          value={fields.projects}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.content && <p className="form-input-hint">{errors.content}</p>}
      </div>
      <div className={`form-group ${errors.content ? 'has-error' : ''}`}>
        <label>Tell us about yourself</label>
        <textarea
          className="form-input"
          placeholder="Please keep to under 1000 words"
          name="content"
          value={fields.biography}
          onChange={e => handleFieldChange(e)}
          onBlur={e => handleBlur(e)}
        />
        {errors.content && <p className="form-input-hint">{errors.content}</p>}
      </div>
      <div className="form-group">
        <label>What skills/tech do you want to learn?</label>
        <div className="input-group">
          <input type="text" className="form-input" placeholder="" onChange={e => setLearnObjective(e.target.value)} />
          <button
            type="button"
            className="btn btn-primary input-group-btn"
            onClick={() => handleAddCollection(newLearnObjective)}>
            Add to List
          </button>
        </div>
        {collection.length > 0 && (
          <ul className="menu" style={{ width: '100vw', textAlign: 'left' }}>
            <li className="divider" data-content="Want to Learn" />
            {collection.map(item => (
              <li className="menu-item">{item}</li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={errors.title || errors.content}>
        Save Profile
      </button>
    </form>
  );
};

export default MembershipForm;
