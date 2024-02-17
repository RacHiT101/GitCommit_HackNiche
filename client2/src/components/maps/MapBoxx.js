import * as React from "react";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  Source,
  Layer,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Truck from "../images/th.jpg";
import Instructions from "./Instructions";

const MapBoxx = () => {
  const [viewState, setViewState] = React.useState({
    longitude: 72.837242,
    latitude: 19.107559,
    zoom: 14.5,
    pitch: 50,
  });

  const [start, setStart] = React.useState([72.837242, 19.107559]);
  const [end, setEnd] = React.useState([72.837242, 19.10222]);
  const [coords, setCoords] = React.useState([]);
  const [steps, setSteps] = React.useState([]);

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoicHJpeWFua2FhMjUwMyIsImEiOiJjbHNwamhtZDYwcXBmMm1rNWtyaGtubjRvIn0.FBiEVIjZkWXy5IA937O-xQ`,
      { method: "GET" }
    );

    const data = await response.json();
    const step = data.routes[0].legs[0].steps;
    setSteps(step);
    const coords = data.routes[0].geometry.coordinates;
    console.log(step);
    setCoords(coords);
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coords,
        },
      },
    ],
  };
  const endPoint = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: start,
        },
      },
    ],
  };
  const linestyle = {
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "blue",
      "line-width": 4,
      "line-opacity": 0.75,
    },
  };
  const endCircle = {
    type: "circle",
    source: {
      type: "geojson",
      data: start,
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#f30",
      // "line-opacity": 0.75
    },
  };

  const GeolocateControlRef = React.useRef();

  React.useEffect(() => {
    // getRoute();
  }, []);

  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicHJpeWFua2FhMjUwMyIsImEiOiJjbHNwamhtZDYwcXBmMm1rNWtyaGtubjRvIn0.FBiEVIjZkWXy5IA937O-xQ"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "screen", height: 650 }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        <Source id="routeSource" type="geojson" data={geojson}>
          <Layer {...linestyle} />
        </Source>
        <Source id="endSource" type="geojson" data={endPoint}>
          <Layer {...endCircle} />
        </Source>
        <Marker longitude={end[0]} latitude={end[1]} anchor="bottom" />
        {/* <img src={Truck} width={70} height={70} alt="Mark" /> */}
        {/* </Marker> */}
        <GeolocateControl
          onGeolocate={(e) => setStart([e.coords.longitude, e.coords.latitude])}
          ref={GeolocateControlRef}
        />
        {/* <NavigationControl /> */}
      </Map>

      <div>
        {steps.reverse().map((item, i) => {
          return (
            <div className="absolute scroll-m-0 rounded-lg m-5 max-w-content top-0 bottom-1/5 p-5 bg-white overflow-y-scroll font-sans">
              <Instructions no_={i + 1} step={item.maneuver.instruction} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapBoxx;
