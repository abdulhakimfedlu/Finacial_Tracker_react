import React from 'react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-black">Welcome back</h3>
        <p className="text-xs text-slate-700 mt-2 mb-6">
          Please enter your details to login
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;