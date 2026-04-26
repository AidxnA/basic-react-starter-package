import React, {useEffect, useState} from 'react';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  AdvancedMarker // Imported from the library
} from '@vis.gl/react-google-maps';

const RouteDirection = () => (
  <APIProvider apiKey="AIzaSyCQRFI2oJRZBCxDXtVsS4p2tJ9wOgUDT4Y">
    <Map
      defaultCenter={{lat: 43.65, lng: -79.38}}
      defaultZoom={12}
      mapId="ee3543e3977e140d1924eed7" 
      gestureHandling={'greedy'}
      fullscreenControl={false}>
      <Directions />
    </Map>
  </APIProvider>
);

function Directions() {
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [polyline, setPolyline] = useState(null);

  const selectedRoute = routes[routeIndex];
  const leg = selectedRoute?.legs[0];

  // 1. Fetch the route data
  useEffect(() => {
    if (!routesLib || !map) return;

    const svc = new routesLib.DirectionsService();
    
    svc.route({
      origin: '100 Front St, Toronto ON',
      destination: '500 College St, Toronto ON',
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true
    }).then(response => {
      setRoutes(response.routes);
    }).catch(e => console.error("Directions request failed", e));
  }, [routesLib, map]);

  // 2. Handle Polyline lifecycle manually
  useEffect(() => {
    if (!selectedRoute || !map) return;

    // Clean up previous polyline
    if (polyline) polyline.setMap(null);

    const newPolyline = new google.maps.Polyline({
      path: selectedRoute.overview_path,
      strokeColor: "#4285F4",
      strokeOpacity: 0.8,
      strokeWeight: 6,
      map: map
    });

    setPolyline(newPolyline);

    return () => newPolyline.setMap(null);
  }, [selectedRoute, map]);

  if (!leg) return null;

  return (
    <>
      {/* 3. Use AdvancedMarker components for the pins */}
      <AdvancedMarker 
        position={leg.start_location} 
        title={'Start'} 
      />
      <AdvancedMarker 
        position={leg.end_location} 
        title={'End'} 
      />

      {/* UI Panel */}
      <div className="directions-panel" style={panelStyle}>
        <h2>{selectedRoute.summary}</h2>
        <p><strong>From:</strong> {leg.start_address.split(',')[0]}</p>
        <p><strong>To:</strong> {leg.end_address.split(',')[0]}</p>
        <p>Distance: {leg.distance?.text} | Duration: {leg.duration?.text}</p>

        <hr />
        <h3>Select Route</h3>
        {routes.map((route, index) => (
          <button 
            key={index} 
            onClick={() => setRouteIndex(index)}
            style={{
              display: 'block',
              margin: '5px 0',
              width: '100%',
              padding: '8px',
              fontWeight: index === routeIndex ? 'bold' : 'normal',
              border: index === routeIndex ? '2px solid #4285F4' : '1px solid #ccc',
              cursor: 'pointer'
            }}
          >
            {route.summary || `Route ${index + 1}`}
          </button>
        ))}
      </div>
    </>
  );
}

const panelStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  zIndex: 1,
  maxWidth: '250px'
};

export default RouteDirection;