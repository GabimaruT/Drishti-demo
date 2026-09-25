import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_WEATHER_REGIONS, EMERGENCY_RESOURCES } from '../data/data';

const AppContext = createContext();

export const ROLES = {
  ADMIN: 'admin',
  GOVERNMENT: 'government',
  USER: 'user'
};

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('drishti_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [regions, setRegions] = useState(() => {
    const saved = localStorage.getItem('drishti_regions');
    return saved ? JSON.parse(saved) : INITIAL_WEATHER_REGIONS;
  });

  const [verificationStatus, setVerificationStatus] = useState(() => {
    return localStorage.getItem('drishti_verification_status') || 'Awaiting Verification';
  });

  const [rescueStatus, setRescueStatus] = useState(() => {
    return localStorage.getItem('drishti_rescue_status') || 'Ready';
  });

  const [emergencyResources, setEmergencyResources] = useState(() => {
    const saved = localStorage.getItem('drishti_resources');
    return saved ? JSON.parse(saved) : EMERGENCY_RESOURCES;
  });

  // Sync state to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('drishti_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('drishti_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('drishti_regions', JSON.stringify(regions));
  }, [regions]);

  useEffect(() => {
    localStorage.setItem('drishti_verification_status', verificationStatus);
  }, [verificationStatus]);

  useEffect(() => {
    localStorage.setItem('drishti_rescue_status', rescueStatus);
  }, [rescueStatus]);

  useEffect(() => {
    localStorage.setItem('drishti_resources', JSON.stringify(emergencyResources));
  }, [emergencyResources]);

  const activeRegion = regions.find(r => r.id === 'konkan-01') || regions[0];

  const login = (role) => {
    const userObj = {
      role,
      name: role === ROLES.ADMIN ? 'Administrator' : role === ROLES.GOVERNMENT ? 'Disaster Officer' : 'Citizen User'
    };
    setCurrentUser(userObj);
    return userObj;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('drishti_user');
  };

  const sendToGovernment = () => {
    setVerificationStatus('Sent to Government');
  };

  const confirmAlert = () => {
    setVerificationStatus('Confirmed');
  };

  const rejectAlert = () => {
    setVerificationStatus('Rejected');
  };

  const sendRescueAlert = () => {
    setRescueStatus('Alert Sent');
    setEmergencyResources(prev =>
      prev.map(res =>
        res.type === 'Rescue Team' ? { ...res, status: 'Alert Sent' } : res
      )
    );
  };

  const resetSystem = () => {
    localStorage.removeItem('drishti_regions');
    localStorage.removeItem('drishti_verification_status');
    localStorage.removeItem('drishti_rescue_status');
    localStorage.removeItem('drishti_resources');

    setRegions(INITIAL_WEATHER_REGIONS);
    setVerificationStatus('Awaiting Verification');
    setRescueStatus('Ready');
    setEmergencyResources(EMERGENCY_RESOURCES);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        login,
        logout,
        regions,
        activeRegion,
        verificationStatus,
        rescueStatus,
        emergencyResources,
        sendToGovernment,
        confirmAlert,
        rejectAlert,
        sendRescueAlert,
        resetSystem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
