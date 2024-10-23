import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'; // Use Link from both branches
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Clients from './components/Clients';
import Employees from './components/Employees';
import Materials from './components/Materials';
import Equipment from './components/Equipment';
import './App.css'; // Ensure both branches include the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          {/* Navigation Bar for all the routes */}
          <nav>
            <Link to="/">Home</Link> {/* Add link for Home */}
            <Link to="/clients">Clients</Link>
            <Link to="/employees">Employees</Link>
            <Link to="/materials">Materials</Link>
            <Link to="/equipment">Equipment</Link>
            {/* <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> */}
          </nav>

          <Routes>
            {/* Authentication-related routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
            <Route path="/projects/:id" element={<ProtectedRoute component={ProjectDetails} />} />
            
            {/* Default route */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Routes from the development branch */}
            <Route path="/clients" element={<Clients />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
