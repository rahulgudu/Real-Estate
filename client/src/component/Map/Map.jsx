import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMaker from "../GeoCoderMarker/GeoCoderMaker";
const Map = () => {
  return (
    <MapContainer center={[53.35, 18.8]} zoom={1} scrollWheelZoom={false} style={{
        height: "40vh",
        width: "100%",
        msrginTop: "20px",
        zIndex: 0,
    }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMaker  />
    </MapContainer>
  );
};

export default Map;
