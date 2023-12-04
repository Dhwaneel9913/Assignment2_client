import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeStyles.css'; 



const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            <Link to={`/view-employee/${employee._id}`}>
            <button className="viewButton">View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
