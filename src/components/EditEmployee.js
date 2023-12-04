import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';











const EditEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    position: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();


  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => console.error('Error fetching employee data:', error));
  }, [id]);

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };



  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/employees/${id}`, employeeData)
      .then(() => {
        navigate('/employees'); // Redirect to the employee list page
      })
      .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <div className="container">
    <h1>Edit Employee</h1>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          name="name"
          value={employeeData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          value={employeeData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="position"
          value={employeeData.position}
          onChange={handleChange}
          placeholder="Position"
          required
        />
        {/* Add other inputs as necessary */}
        <button type="submit" style={{ width: '100px', padding: '5px' }}>Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
