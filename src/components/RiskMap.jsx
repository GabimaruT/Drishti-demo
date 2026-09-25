import React from 'react';
import { MapContainer, TileLayer, Polygon, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useApp } from '../context/AppContext';

// Fix Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export const RiskMap = ({ height = "420px" }) => {
  const { regions, activeRegion } = useApp();

  // Strict India geographical center
  const indiaCenter = [20.5937, 78.9629];
  const zoomLevel = 5;

  const getPolygonStyle = (severity) => {
    if (severity === 'red') {
      return {
        fillColor: '#ef4444',
        fillOpacity: 0.45,
        color: '#dc2626',
        weight: 2.5
      };
    }
    if (severity === 'orange') {
      return {
        fillColor: '#f97316',
        fillOpacity: 0.35,
        color: '#ea580c',
        weight: 2
      };
    }
    if (severity === 'yellow') {
      return {
        fillColor: '#eab308',
        fillOpacity: 0.30,
        color: '#ca8a04',
        weight: 1.5
      };
    }
    return {
      fillColor: '#22c55e',
      fillOpacity: 0.25,
      color: '#16a34a',
      weight: 1.5
    };
  };

  return (
    <div className="relative w-full bg-white border border-[#E3E8E2] rounded-xl overflow-hidden" style={{ height }}>
      {/* Top clean header */}
      <div className="px-4 py-2.5 bg-white border-b border-[#E3E8E2] flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-xs font-bold text-[#26332C] uppercase tracking-wider">
            Risk Map — India
          </span>
        </div>
        <span className="text-xs text-[#66736B]">
          Active Focus: <strong>{activeRegion?.region || 'Konkan Coast'}</strong>
        </span>
      </div>

      {/* Leaflet Map */}
      <div className="w-full h-[calc(100%-41px)] relative">
        <MapContainer
          center={indiaCenter}
          zoom={zoomLevel}
          minZoom={4}
          maxZoom={10}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Clean Light CartoDB Positron tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {/* Render Coastal Risk Polygons */}
          {regions.map((region) => {
            const style = getPolygonStyle(region.severity);

            return (
              <React.Fragment key={region.id}>
                {region.polygon && (
                  <Polygon positions={region.polygon} pathOptions={style}>
                    <Popup className="drishti-map-popup">
                      <div className="p-1 text-[#26332C]">
                        <div className="flex items-center justify-between gap-2 pb-1 border-b border-[#E3E8E2]">
                          <span className="font-bold text-sm text-[#26332C]">{region.region}</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800 uppercase">
                            {region.severity === 'red' ? 'High Risk' : region.severity}
                          </span>
                        </div>
                        <div className="mt-2 text-xs space-y-1 text-[#404c45]">
                          <p><strong>Hazard:</strong> {region.hazard}</p>
                          <p><strong>Expected:</strong> {region.expectedTime}</p>
                          <p><strong>Rainfall:</strong> {region.rainfall}</p>
                        </div>
                      </div>
                    </Popup>
                  </Polygon>
                )}

                {/* Regional Center Marker */}
                <CircleMarker
                  center={[region.lat, region.lng]}
                  radius={region.severity === 'red' ? 9 : 6}
                  pathOptions={{
                    color: region.severity === 'red' ? '#dc2626' : '#ea580c',
                    fillColor: region.severity === 'red' ? '#ef4444' : '#f97316',
                    fillOpacity: 0.9,
                    weight: 2
                  }}
                />
              </React.Fragment>
            );
          })}
        </MapContainer>

        {/* Minimal Bottom-Right Legend */}
        <div className="absolute bottom-3 right-3 z-[400] bg-white/95 backdrop-blur-sm border border-[#E3E8E2] rounded-lg p-2.5 text-xs text-[#26332C] shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#66736B] mb-1.5">
            Risk Level
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span>Severe</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span>High</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span>Moderate</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Safe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
