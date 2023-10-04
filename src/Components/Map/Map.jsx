import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import icon from "../../assets/icons/map-pin-line.svg"

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [32, 32], 
});

function Map() {
  return (
    <div className="map-container">
      <MapContainer
        center={[6.20951249495493, -75.57264281813593]}
        zoom={20}
        scrollWheelZoom={false}
        className="mapa"
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />{" "}
      
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[6.20951249495493, -75.57264281813593]}
          icon={customIcon}
        >
          <Popup>
            Tecnotics <br /> Soluciones Corporativas
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
