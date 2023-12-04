import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewEmployee = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error('Error fetching employee:', error));
  }, [id]);

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default ViewEmployee;
