import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

function Map() {
  return (
    <div className="map-container">
      <MapContainer
        center={[6.20951249495493, -75.57264281813593]}
        zoom={20}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.20951249495493, -75.57264281813593]}>
          <Popup>
            Tecnotics <br /> Soluciones Corporativas
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
