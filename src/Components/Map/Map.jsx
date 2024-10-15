import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

export default function Map() {
  const position = [14.477229398286791, 120.89302533233052];
  const zoomLevel = 15; 
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.leafletElement.openPopup();
    }
  }, []); 

  return (
    <MapContainer center={position} zoom={zoomLevel} style={{ height: "500px", width: "100%", borderRadius: "10px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} ref={markerRef}>
        <Popup>
          <div>

          <img src="noona.png" style={{width: "100px"}}/>
          </div>
          Noona&apos;s Noodles
         
        </Popup>
      </Marker>
    </MapContainer>
  );
}
