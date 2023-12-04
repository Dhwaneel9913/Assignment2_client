import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/view-employee/:id" element={<ViewEmployee />} />
        <Route path="/view-employee/:id" element={<ViewEmployee />} />




      </Routes>
    </Router>
  );
}

export default App;
