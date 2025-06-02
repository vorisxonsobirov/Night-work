import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

// Настройка иконки
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MyLocationButton = ({ setPosition }) => {
  const map = useMap();

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const newPosition = [latitude, longitude];
          setPosition(newPosition);
          map.flyTo(newPosition, 15);
        },
        (err) => {
          alert('Ошибка при получении местоположения');
          console.error(err);
        }
      );
    } else {
      alert('Геолокация не поддерживается');
    }
  };

  return (
    <button className="locate-btn" onClick={locateMe}>
      📍 Найти меня
    </button>
  );
};

const Map = () => {
  const [position, setPosition] = useState([40.517001, 70.951587]); // по умолчанию твоя ссылка

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Вы находитесь здесь</Popup>
        </Marker>
        <MyLocationButton setPosition={setPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;
