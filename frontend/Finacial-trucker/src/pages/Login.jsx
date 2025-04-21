import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { useNavigate } from 'react-router-dom'; // Fixed import

const Login = () => {
  const [email, setemail] = useState(""); // Fixed spacing
  const [password, setpassword] = useState(""); // Fixed spacing
  const [error, seterror] = useState("null"); // Fixed spacing

  const navigate = useNavigate(); // Fixed import usage

  return (
    <AuthLayout>
      <div className="w-[70%] h-3/4 md:h-full flex flex-col justify-center"> {/* Fixed class names */}
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-2 mb-6">Please Enter Your Details to Login</p> {/* Fixed spacing */}
      </div>
    </AuthLayout>
  );
};

export default Login;