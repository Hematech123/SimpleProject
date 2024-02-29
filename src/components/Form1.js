// MyFormComponent.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form1= () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If validation passes, navigate to the Welcome component
      history.push('/welcome');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="container mt-5">
      <h1>Bootstrap Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="exampleInputName"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="exampleInputEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="exampleInputPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
