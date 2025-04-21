import React from 'react';
import Card_2 from "../assets/images/Card_2.png";
import { LuTrandingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-full md:w-[60vw] px-8 md:px-12 pt-8 pb-12 flex flex-col bg-white">
        <h2 className="text-lg font-medium text-black mb-8">Expense Trucker</h2>
        <div className="flex-1 flex items-center justify-center"> {/* Added justify-center */}
          {children}
        </div>
      </div>

      Right Section
      <div className="hidden md:block w-[40vw] bg-gradient-to-br from-purple-500 to-indigo-600 overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600/30 absolute -top-7 -left-5" />
        <div className="w-48 h-56 border-[20px] border-fuchsia-600/30 absolute top-[30%] -right-[100px]" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500/30 absolute -bottom-7 -left-5" />
        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrandingUpDown />}
            label="Track your expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img
          src={Card_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-ig shadow-blue-400/15"
          alt="Card"
        />
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[30px]">{value}</span>
      </div>
    </div>
  );
};

export default AuthLayout;