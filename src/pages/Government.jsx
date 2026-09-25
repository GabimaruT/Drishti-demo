import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Send, Ambulance, MapPin, Clock, CloudRain, Zap, Droplets } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { RiskMap } from '../components/RiskMap';

export const Government = () => {
  const { 
    activeRegion, 
    verificationStatus, 
    confirmAlert, 
    rejectAlert, 
    rescueStatus, 
    sendRescueAlert 
  } = useApp();
  const { t } = useLanguage();

  const isConfirmed = verificationStatus === 'Confirmed';
  const isRejected = verificationStatus === 'Rejected';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#E3E8E2]">
        <div>
          <h1 className="text-xl font-bold text-[#26332C]">
            {t('govtHeader')}
          </h1>
          <p className="text-xs text-[#66736B]">
            Review incoming disaster predictions and authorize public warning dissemination.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-white text-[#26332C] border-[#E3E8E2]">
            Status: <strong>{verificationStatus}</strong>
          </span>
        </div>
      </div>

      {/* Confirmation Required Alert Bar */}
      {!isConfirmed && !isRejected && (
        <div className="bg-white border-l-4 border-amber-500 rounded-xl p-5 shadow-sm border border-[#E3E8E2] space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {t('confirmationRequired')}
                </span>
                <p className="text-sm font-semibold text-[#26332C] mt-0.5">
                  Severe weather predicted in <strong>{activeRegion?.region}</strong>. Please review before issuing public alert.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={confirmAlert}
              className="px-5 py-2.5 rounded-lg bg-[#26332C] hover:bg-[#1a231e] text-white font-bold text-xs flex items-center gap-2 transition shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('confirmAlertBtn')}</span>
            </button>

            <button
              onClick={rejectAlert}
              className="px-4 py-2.5 rounded-lg bg-white hover:bg-[#F7F8F4] text-[#66736B] hover:text-red-700 border border-[#E3E8E2] font-semibold text-xs transition"
            >
              <span>{t('rejectBtn')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Confirmed Feedback Banner */}
      {isConfirmed && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between gap-3 text-emerald-900 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{t('alertConfirmedMsg')}</span>
          </div>
          <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">
            Active Warning
          </span>
        </div>
      )}

      {/* Rejected Feedback Banner */}
      {isRejected && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between gap-3 text-red-900 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span>Alert rejected by Government Authority. Public warning is held back.</span>
          </div>
          <button
            onClick={confirmAlert}
            className="text-xs text-red-700 underline font-bold"
          >
            Re-Confirm
          </button>
        </div>
      )}

      {/* Map View */}
      <div className="space-y-2">
        <RiskMap height="400px" />
      </div>

      {/* Prediction Details Card */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#F7F8F4]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#26332C]">
            Prediction Summary
          </h3>
          <span className="text-xs text-[#66736B]">
            Region: <strong className="text-[#26332C]">{activeRegion?.region}</strong> ({activeRegion?.city})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Heavy Rainfall</span>
            <span className="font-bold text-sm text-[#26332C] block mt-0.5">{activeRegion?.rainfall}</span>
            <span className="text-[10px] text-[#66736B]">Expected in {activeRegion?.expectedTime}</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Thunderstorm Hazard</span>
            <span className="font-bold text-sm text-amber-700 block mt-0.5">{activeRegion?.thunderstormRisk}</span>
            <span className="text-[10px] text-[#66736B]">High lightning activity</span>
          </div>

          <div className="p-3 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <span className="text-[#66736B] block text-[11px]">Flood & Waterlogging</span>
            <span className="font-bold text-sm text-red-700 block mt-0.5">{activeRegion?.floodRisk} Risk</span>
            <span className="text-[10px] text-[#66736B]">Low-lying areas vulnerable</span>
          </div>
        </div>
      </div>

      {/* Rescue Response Action Section */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#F7F8F4]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#26332C] flex items-center gap-2">
            <Ambulance className="w-4 h-4 text-[#26332C]" />
            <span>{t('rescueResponse')}</span>
          </h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${
            rescueStatus === 'Alert Sent' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-amber-50 text-amber-800 border-amber-200'
          }`}>
            Rescue Team: {rescueStatus}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#66736B] max-w-md">
            Alert disaster response squads, emergency medical ambulances, and municipal drainage units in {activeRegion?.region}.
          </p>

          <button
            onClick={sendRescueAlert}
            className={`px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition shadow-sm ${
              rescueStatus === 'Alert Sent'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-default'
                : 'bg-[#26332C] hover:bg-[#1a231e] text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{rescueStatus === 'Alert Sent' ? '✓ Alert Sent to Rescue Team' : t('sendRescueAlertBtn')}</span>
          </button>
        </div>

        {rescueStatus === 'Alert Sent' && (
          <p className="text-xs text-emerald-700 font-medium pt-1">
            ✓ {t('rescueAlertSentMsg')}
          </p>
        )}
      </div>
    </div>
  );
};
