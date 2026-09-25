import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CloudRain, Languages, LogOut } from 'lucide-react';
import { useApp, ROLES } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { currentUser, logout } = useApp();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  if (!currentUser && location.pathname === '/') {
    return null; // Don't show navbar on login screen if user is selecting role
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!currentUser) return '/';
    if (currentUser.role === ROLES.ADMIN) return '/admin';
    if (currentUser.role === ROLES.GOVERNMENT) return '/government';
    return '/user';
  };

  return (
    <header className="bg-white border-b border-[#E3E8E2] sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to={getDashboardPath()} className="flex items-center gap-2 text-decoration-none">
          <div className="w-8 h-8 rounded-lg bg-[#26332C] text-white flex items-center justify-center">
            <CloudRain className="w-4 h-4 text-emerald-300" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide text-[#26332C] block leading-tight">
              DRISHTI
            </span>
            <span className="text-[10px] text-[#66736B] tracking-wider uppercase block leading-none">
              Predict. Verify. Protect.
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        {currentUser && (
          <nav className="flex items-center gap-1 sm:gap-6 text-sm font-medium text-[#66736B]">
            <Link
              to={getDashboardPath()}
              className={`hover:text-[#26332C] px-2 py-1 rounded transition ${
                location.pathname === getDashboardPath() ? 'text-[#26332C] font-semibold bg-[#F7F8F4]' : ''
              }`}
            >
              {t('navDashboard')}
            </Link>
            <Link
              to="/emergency"
              className={`hover:text-[#26332C] px-2 py-1 rounded transition ${
                location.pathname === '/emergency' ? 'text-[#26332C] font-semibold bg-[#F7F8F4]' : ''
              }`}
            >
              {t('navEmergency')}
            </Link>
            <Link
              to="/alerts"
              className={`hover:text-[#26332C] px-2 py-1 rounded transition ${
                location.pathname === '/alerts' ? 'text-[#26332C] font-semibold bg-[#F7F8F4]' : ''
              }`}
            >
              {t('navAlerts')}
            </Link>
          </nav>
        )}

        {/* Language & User Session */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center gap-1 text-xs border border-[#E3E8E2] rounded-lg px-2 py-1 bg-[#F7F8F4]">
            <Languages className="w-3.5 h-3.5 text-[#66736B]" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-[#26332C] font-medium outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>
          </div>

          {/* Logout */}
          {currentUser && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#66736B] hover:text-red-700 border border-[#E3E8E2] hover:border-red-200 px-3 py-1.5 rounded-lg transition bg-white"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('logout')}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
