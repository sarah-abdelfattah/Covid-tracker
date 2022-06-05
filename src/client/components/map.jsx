import React, { useState, useEffect, useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MapContainer, TileLayer, useMap, Popup, Circle } from 'react-leaflet'

const colors = ['#D32D41', '#43a445', '#7E909A']

const renderData = (data, type) => data?.map((record, index) => (
  <Circle
    key={index}
    center={[record.lat, record.lng]}
    pathOptions={{
      color: colors[type],
      fillColor: colors[type],
    }}
    fillOpacity={0.5}
    radius={record?.records?.length * 5000}
  >
    <Popup>
      <div className="popup">
        <p className="popupTitle">{record.country}</p>
        <p className="popupCases"> {record?.records?.length} {record?.records[0].type}</p>
      </div>
    </Popup>
  </Circle>
))

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export const GoogMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={props.location}
    center={{ lat: props.location.lat, lng: props.location.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.location.lat, lng: props.location.lng }} />}
  </GoogleMap>
))

export const Maps = ({ location, filteredData, diagnosisType }) => {
  return <MapContainer
    center={[location.lat, location.lng]} zoom={4}
    scrollWheelZoom={false}
    className="dashboardMap"
  >
    <ChangeView center={[location.lat, location.lng]} zoom={4} />
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {renderData(filteredData[diagnosisType], diagnosisType)}
  </MapContainer>
}