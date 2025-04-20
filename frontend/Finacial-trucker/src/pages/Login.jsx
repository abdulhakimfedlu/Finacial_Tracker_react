import React from 'react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-2">Welcome back</h3>
          <p className="text-sm text-slate-700 mb-6">
            Please enter your details to login
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;