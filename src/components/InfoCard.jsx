import React from 'react';

export const InfoCard = ({ icon: Icon, title, value, subtitle, alertLevel }) => {
  const getBadgeStyle = () => {
    if (alertLevel === 'red') return 'bg-red-50 text-red-700 border-red-200';
    if (alertLevel === 'orange') return 'bg-orange-50 text-orange-700 border-orange-200';
    if (alertLevel === 'green') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    return 'bg-[#F7F8F4] text-[#26332C] border-[#E3E8E2]';
  };

  return (
    <div className="bg-white border border-[#E3E8E2] rounded-xl p-4 transition-all hover:border-[#cbd4ca] flex flex-col justify-between">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-[#F7F8F4] border border-[#E3E8E2] flex items-center justify-center text-[#26332C] shrink-0">
            <Icon className="w-5 h-5 text-[#26332C]" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <span className="text-xs font-medium text-[#66736B] block truncate">
            {title}
          </span>
          <span className="text-base font-bold text-[#26332C] block mt-0.5">
            {value}
          </span>
        </div>
      </div>

      {subtitle && (
        <div className="mt-3 pt-2 border-t border-[#F7F8F4] flex items-center justify-between text-xs text-[#66736B]">
          <span>{subtitle}</span>
          {alertLevel && (
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${getBadgeStyle()}`}>
              {alertLevel.toUpperCase()}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
