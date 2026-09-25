import React from 'react';
import { Send, CheckCircle2, RotateCcw, Activity, ShieldCheck, MapPin, Clock, CloudRain, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { RiskMap } from '../components/RiskMap';

export const Admin = () => {
  const { 
    activeRegion, 
    verificationStatus, 
    sendToGovernment, 
    rescueStatus, 
    resetSystem 
  } = useApp();
  const { t } = useLanguage();

  const isSent = verificationStatus === 'Sent to Government' || verificationStatus === 'Confirmed';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E3E8E2]">
        <div>
          <h1 className="text-xl font-bold text-[#26332C]">
            {t('adminHeader')}
          </h1>
          <p className="text-xs text-[#66736B]">
            Manage incoming weather predictions and forward verified hazards to authorities.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetSystem}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#66736B] hover:text-[#26332C] bg-white border border-[#E3E8E2] px-3 py-1.5 rounded-lg transition"
            title="Reset system state to default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset State</span>
          </button>
        </div>
      </div>

      {/* Incoming Prediction Card */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-5 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F7F8F4]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#66736B]">
              {t('incomingPredictions')}
            </span>
            <h2 className="text-base font-bold text-[#26332C] mt-0.5">
              {activeRegion?.region} ({activeRegion?.city})
            </h2>
          </div>

          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
            verificationStatus === 'Confirmed'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : verificationStatus === 'Sent to Government'
              ? 'bg-blue-50 text-blue-800 border-blue-200'
              : 'bg-amber-50 text-amber-800 border-amber-200'
          }`}>
            Status: {verificationStatus}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Hazard</span>
            <span className="font-bold text-sm text-[#26332C] block mt-0.5">{activeRegion?.hazard}</span>
            <span className="text-[10px] text-red-700 font-semibold">{activeRegion?.rainfall} expected</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Time to Impact</span>
            <span className="font-bold text-sm text-[#26332C] block mt-0.5">{activeRegion?.expectedTime}</span>
            <span className="text-[10px] text-[#66736B]">Convective cell arrival</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Risk Level</span>
            <span className="font-bold text-sm text-red-700 block mt-0.5">Severe (Red Zone)</span>
            <span className="text-[10px] text-[#66736B]">Coastal lowlands vulnerable</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#F7F8F4]">
          <p className="text-xs text-[#66736B]">
            Forwarding will place this prediction on the Government Official dashboard for review.
          </p>

          <button
            onClick={sendToGovernment}
            disabled={isSent}
            className={`px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition shadow-sm ${
              isSent
                ? 'bg-[#F7F8F4] text-[#66736B] border border-[#E3E8E2] cursor-not-allowed'
                : 'bg-[#26332C] hover:bg-[#1a231e] text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSent ? '✓ Sent to Government' : t('sendToGovtBtn')}</span>
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="space-y-2">
        <RiskMap height="400px" />
      </div>

      {/* System Status Summary */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-[#26332C]">{t('systemStatus')}</span>
        </div>
        <span className="text-[#66736B]">
          Atmospheric Observation Feeds: <strong>Radar, Satellite, Lightning Sensor Array Active</strong>
        </span>
      </div>
    </div>
  );
};
