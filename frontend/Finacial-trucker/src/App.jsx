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
  return (
    <Router>
      <div className="min-h-screen bg-gray-100"> HOME SWEET HOME
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<DashboardHome />} />
          <Route path="/income" element={<Income />} />
          <Route path="/Expense" element={<Expense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
const root=()=>{
  //checks if token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");
  //redirects to dashboard if not authenticated
  return isAuthenticated ? (
    <Navigate to ="/Dashboard" />
  ) : (
    <Navigate to ="/login" />
  );
}