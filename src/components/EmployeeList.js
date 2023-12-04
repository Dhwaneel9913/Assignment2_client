import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(employee => employee._id !== id));
      })
      .catch(error => console.error('Error deleting employee:', error));
  };

  // Inline CSS styles
  const listStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonStyle = {
    padding: '5px 10px',
    margin: '0 5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FFA500',
    color: 'white'
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white'
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee List</h1>
      <ul style={listStyle}>
        {employees.map(employee => (
          <li key={employee._id} style={listItemStyle}>
            <div>{employee.name} - {employee.position}</div>
            <div>
              <Link to={`/view-employee/${employee._id}`} style={{ textDecoration: 'none' }}>
                <button style={viewButtonStyle}>View</button>
              </Link>
              <Link to={`/edit-employee/${employee._id}`} style={{ textDecoration: 'none' }}>
                <button style={editButtonStyle}>Edit</button>
              </Link>
              <button style={deleteButtonStyle} onClick={() => handleDelete(employee._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;