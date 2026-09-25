import React from 'react';
import { Ambulance, Shield, Home, Droplets, MapPin, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { InfoCard } from '../components/InfoCard';

export const Emergency = () => {
  const { activeRegion, rescueStatus, emergencyResources } = useApp();
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Header */}
      <div className="pb-2 border-b border-[#E3E8E2]">
        <h1 className="text-xl font-bold text-[#26332C]">
          Emergency Response
        </h1>
        <p className="text-xs text-[#66736B]">
          Current readiness of disaster quick-response units, medical squads, and relief shelters.
        </p>
      </div>

      {/* Current Focus Status Box */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#26332C]">
              Active Disaster Sector
            </span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
            Risk: High
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Region</span>
            <strong className="text-sm text-[#26332C] block mt-0.5">{activeRegion?.region}</strong>
            <span className="text-[10px] text-[#66736B]">{activeRegion?.city}</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Expected Hazard</span>
            <strong className="text-sm text-[#26332C] block mt-0.5">{activeRegion?.hazard}</strong>
            <span className="text-[10px] text-[#66736B]">Impact within {activeRegion?.expectedTime}</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Rescue Team Status</span>
            <strong className="text-sm text-emerald-700 block mt-0.5">{rescueStatus}</strong>
            <span className="text-[10px] text-[#66736B]">Assigned to coastal corridor</span>
          </div>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#26332C]">
          Emergency Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard
            icon={Ambulance}
            title="Ambulance"
            value="Ready"
            subtitle="Station 108 • ETA 12m"
            alertLevel="green"
          />

          <InfoCard
            icon={Shield}
            title="Rescue Team"
            value={rescueStatus === 'Alert Sent' ? 'Alert Sent' : 'Ready'}
            subtitle="Quick Response Unit"
            alertLevel="green"
          />

          <InfoCard
            icon={Home}
            title="Safe Shelter"
            value="Available"
            subtitle="Capacity: 1,500 People"
            alertLevel="green"
          />

          <InfoCard
            icon={Droplets}
            title="Drainage Pump"
            value="Active"
            subtitle="4,000 m³/hr capacity"
            alertLevel="green"
          />
        </div>
      </div>

      {/* Simple Table of Assets */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-[#F7F8F4]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#26332C]">
            Deployed Assets in Sector
          </h3>
        </div>

        <div className="divide-y divide-[#F7F8F4] text-xs">
          {emergencyResources.map((res) => (
            <div key={res.id} className="p-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <strong className="text-[#26332C] block">{res.name}</strong>
                <span className="text-[#66736B] text-[11px]">{res.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#66736B] text-[11px]">{res.eta || res.capacity}</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F7F8F4] text-[#26332C] border border-[#E3E8E2]">
                  {res.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
