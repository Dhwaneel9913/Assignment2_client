import React, { useState } from 'react';
import axios from 'axios';







const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: ''
    // You can add more fields as needed
  });
  const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


  // Inline CSS styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: 'auto'
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
  
    axios.post('http://localhost:5000/api/employees', formData)
      .then(response => {
        console.log('Employee added:', response.data);
        setSuccessMessage('Employee successfully added!');
        // Optionally, clear the form here
        setFormData({ name: '', email: '', position: '' });
      })
      .catch(error => {
        console.error('Error adding employee:', error);
        setErrorMessage('Failed to add employee. Please try again.');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add Employee</h1>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          style={inputStyle}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          style={inputStyle}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          style={inputStyle}
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          required
        />
        <button type="submit" style={buttonStyle}>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
