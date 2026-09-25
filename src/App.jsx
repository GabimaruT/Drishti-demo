import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';

// Components
import { Navbar } from './components/Navbar';

// Pages
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { Government } from './pages/Government';
import { User } from './pages/User';
import { Emergency } from './pages/Emergency';
import { Alerts } from './pages/Alerts';

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[#F7F8F4] text-[#26332C]">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/government" element={<Government />} />
                <Route path="/user" element={<User />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;
