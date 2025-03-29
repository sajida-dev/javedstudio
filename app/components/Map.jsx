import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OpenStreetMap = () => {
    return (
        <MapContainer center={[31.5204, 74.3587]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.5204, 74.3587]}>
                <Popup>Javed Studio Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default OpenStreetMap;
