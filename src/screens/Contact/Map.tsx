import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { LatLngTuple } from "leaflet";

const Map = () => {
  const darkMode = useSelector((state: RootState) => state.theme);

  const location: LatLngTuple = [36.547993380527124, 53.0467722859122];

  const customIcon = icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776000.png",
    iconSize: [50, 50],
  });

  return (
    <div
      className=" mb-20   mx-auto h-[550px] rounded-lg z-10 "
      data-aos="fade-left"
    >
      <MapContainer center={location} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={
            darkMode
              ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />

        <Marker
          position={[36.547993380527124, 53.0467722859122]}
          icon={customIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
