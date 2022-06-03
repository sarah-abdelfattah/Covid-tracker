import React, { useState, useEffect, useRef } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={props.location}
    center={{ lat: props.location.lat, lng: props.location.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.location.lat, lng: props.location.lng }} />}
  </GoogleMap>
))