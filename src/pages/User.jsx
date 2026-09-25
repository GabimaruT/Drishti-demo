import React from 'react';
import { AlertTriangle, CloudRain, MapPin, Zap, Ambulance, CheckCircle2, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { RiskMap } from '../components/RiskMap';
import { InfoCard } from '../components/InfoCard';

export const User = () => {
  const { activeRegion, rescueStatus, verificationStatus } = useApp();
  const { t } = useLanguage();

  const isAlertActive = verificationStatus === 'Confirmed' || verificationStatus === 'Sent to Government';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Primary Weather Alert Banner */}
      <div className="bg-white border-l-4 border-red-600 rounded-xl p-5 shadow-sm border border-[#E3E8E2]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                {t('weatherAlert')}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-red-100 text-red-800">
                High Risk
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#26332C]">
              {t('heavyRainfallExpected')}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#66736B] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#26332C]" />
                <strong>{activeRegion?.region || 'Konkan Coast'}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#26332C]" />
                {t('expectedIn')}: <strong>{activeRegion?.expectedTime || '48 minutes'}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Map */}
      <div className="space-y-2">
        <RiskMap height="400px" />
      </div>

      {/* 4 Clean Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          icon={CloudRain}
          title="Heavy Rainfall"
          value={activeRegion?.rainfall || '142 mm'}
          subtitle={`Expected in ${activeRegion?.expectedTime || '48 min'}`}
          alertLevel="red"
        />

        <InfoCard
          icon={MapPin}
          title="High Risk Region"
          value={activeRegion?.region || 'Konkan Coast'}
          subtitle={activeRegion?.city || 'Mumbai & Coastal Belt'}
          alertLevel="red"
        />

        <InfoCard
          icon={Zap}
          title="Thunderstorm"
          value={activeRegion?.thunderstormRisk || 'High Risk'}
          subtitle="Lightning hazard expected"
          alertLevel="orange"
        />

        <InfoCard
          icon={Ambulance}
          title="Rescue Team"
          value={rescueStatus === 'Alert Sent' ? 'Alert Sent' : 'Ready'}
          subtitle="Pre-positioned in sector"
          alertLevel={rescueStatus === 'Alert Sent' ? 'green' : 'green'}
        />
      </div>

      {/* WHAT YOU SHOULD DO Section */}
      <div className="bg-white border border-[#E3E8E2] rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#26332C]">
          {t('whatYouShouldDo')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#404c45]">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('tip1')}</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('tip2')}</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('tip3')}</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('tip4')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
