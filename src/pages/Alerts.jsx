import React from 'react';
import { Bell, AlertTriangle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

export const Alerts = () => {
  const { regions, verificationStatus } = useApp();
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Header */}
      <div className="pb-2 border-b border-[#E3E8E2]">
        <h1 className="text-xl font-bold text-[#26332C]">
          Weather Alerts
        </h1>
        <p className="text-xs text-[#66736B]">
          Active and recent disaster warnings across monitored sectors.
        </p>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {regions.map((reg) => (
          <div
            key={reg.id}
            className="bg-white border border-[#E3E8E2] rounded-xl p-5 shadow-sm space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#F7F8F4]">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  reg.severity === 'red' ? 'bg-red-600' :
                  reg.severity === 'orange' ? 'bg-orange-500' :
                  reg.severity === 'yellow' ? 'bg-yellow-500' : 'bg-emerald-500'
                }`}></div>
                <h3 className="text-sm font-bold text-[#26332C]">
                  {reg.hazard} Warning
                </h3>
              </div>

              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                reg.severity === 'red' ? 'bg-red-50 text-red-700 border-red-200' :
                reg.severity === 'orange' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                {reg.severity.toUpperCase()} RISK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#404c45]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#66736B]" />
                <span>Region: <strong>{reg.region}</strong> ({reg.city})</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#66736B]" />
                <span>Expected in: <strong>{reg.expectedTime}</strong></span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#66736B]" />
                <span>Status: <strong>{reg.id === 'konkan-01' ? verificationStatus : 'Monitoring'}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
