import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ExternalLink, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface TempleMapProps {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function TempleMap({ name, city, state, latitude, longitude }: TempleMapProps) {
  const hasCoords = latitude !== 0 && longitude !== 0;
  const mapsUrl = hasCoords
    ? `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`
    : `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${name} ${city} ${state}`)}`;
  const directionsUrl = hasCoords
    ? `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
    : `https://www.google.com/maps/search/${encodeURIComponent(`${name} ${city} ${state}`)}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-ivory-200 bg-ivory-50 shadow-soft">
      <div className="flex items-center gap-2 border-b border-ivory-200 bg-ivory-100 px-4 py-2.5">
        <MapPin className="h-4 w-4 text-saffron-600" strokeWidth={1.5} />
        <h3 className="text-sm font-semibold text-charcoal-700">
          {name} — {city}, {state}
        </h3>
      </div>
      {hasCoords ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '280px', width: '100%' }}
          attributionControl={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              <strong>{name}</strong>
              <br />
              {city}, {state}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex h-[280px] items-center justify-center bg-ivory-100">
          <div className="text-center">
            <MapPin className="mx-auto h-8 w-8 text-charcoal-300" strokeWidth={1.5} />
            <p className="mt-2 text-sm text-charcoal-400">
              Exact coordinates not available
            </p>
            <p className="text-xs text-charcoal-300">
              Location shown approximately for {city}, {state}
            </p>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2 border-t border-ivory-200 bg-ivory-50 px-4 py-2.5">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-saffron-600 transition-colors hover:text-saffron-700"
        >
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          Open in Maps
        </a>
        <span className="text-charcoal-200">·</span>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-saffron-600 transition-colors hover:text-saffron-700"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          Get Directions
        </a>
      </div>
    </div>
  );
}
