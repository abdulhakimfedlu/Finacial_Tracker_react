import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

// Import your components
import Home from './pages/Home'; // Main Home page
import Login from './pages/Login'; // Login page
import SignUp from './pages/SignUp'; // SignUp page (imported correctly)
import DashboardHome from './pages/Dashboard/Home'; // Dashboard Home page
import Income from './pages/Dashboard/Income'; // Income page
import Expense from './pages/Dashboard/Expense'; // Expense page

function App() {
  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> 
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <DashboardHome /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/income" 
            element={isAuthenticated ? <Income /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/expense" 
            element={isAuthenticated ? <Expense /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;