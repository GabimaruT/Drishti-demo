import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudRain, UserCheck, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useApp, ROLES } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

export const Login = () => {
  const { login } = useApp();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    login(role);
    if (role === ROLES.ADMIN) {
      navigate('/admin');
    } else if (role === ROLES.GOVERNMENT) {
      navigate('/government');
    } else {
      navigate('/user');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F4] flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-md text-center space-y-6">
        {/* Brand */}
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#26332C] text-white flex items-center justify-center mx-auto shadow-sm">
            <CloudRain className="w-6 h-6 text-emerald-300" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#26332C]">
            DRISHTI
          </h1>
          <p className="text-sm font-semibold text-[#404c45]">
            Predict. Verify. Protect.
          </p>
          <p className="text-xs text-[#66736B]">
            Early warning for severe weather events
          </p>
        </div>

        {/* Section title */}
        <div className="pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#66736B] block">
            CHOOSE ACCESS
          </span>
        </div>

        {/* 3 Role Selection Cards */}
        <div className="space-y-3">
          {/* Admin Card */}
          <button
            onClick={() => handleSelectRole(ROLES.ADMIN)}
            className="w-full bg-white hover:bg-[#FAFBF8] border border-[#E3E8E2] hover:border-[#26332C] rounded-2xl p-5 text-left transition-all duration-200 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F8F4] border border-[#E3E8E2] flex items-center justify-center text-[#26332C] group-hover:bg-[#26332C] group-hover:text-white transition">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#26332C]">ADMIN</h3>
                <p className="text-xs text-[#66736B]">Platform Management</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#66736B] group-hover:text-[#26332C] group-hover:translate-x-0.5 transition" />
          </button>

          {/* Government Official Card */}
          <button
            onClick={() => handleSelectRole(ROLES.GOVERNMENT)}
            className="w-full bg-white hover:bg-[#FAFBF8] border border-[#E3E8E2] hover:border-[#26332C] rounded-2xl p-5 text-left transition-all duration-200 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F8F4] border border-[#E3E8E2] flex items-center justify-center text-[#26332C] group-hover:bg-[#26332C] group-hover:text-white transition">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#26332C]">GOVERNMENT OFFICIAL</h3>
                <p className="text-xs text-[#66736B]">Verify & Respond</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#66736B] group-hover:text-[#26332C] group-hover:translate-x-0.5 transition" />
          </button>

          {/* User Card */}
          <button
            onClick={() => handleSelectRole(ROLES.USER)}
            className="w-full bg-white hover:bg-[#FAFBF8] border border-[#E3E8E2] hover:border-[#26332C] rounded-2xl p-5 text-left transition-all duration-200 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F8F4] border border-[#E3E8E2] flex items-center justify-center text-[#26332C] group-hover:bg-[#26332C] group-hover:text-white transition">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#26332C]">USER</h3>
                <p className="text-xs text-[#66736B]">Weather Warnings</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#66736B] group-hover:text-[#26332C] group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* Minimal subtle note */}
        <p className="text-[11px] text-[#85948b] pt-4">
          DRISHTI Early Warning System • Select a role to proceed
        </p>
      </div>
    </div>
  );
};
