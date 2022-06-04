import Geocode from "react-geocode";

export const getAddress = (lat, lng) => {
  Geocode.setApiKey(`${import.meta.env.VITE_MAPS_API}`);
  Geocode.setLanguage("en");

  return Geocode.fromLatLng(lat, lng).then(
    (response) => {
      return response.results[0].formatted_address;
    },
    (error) => {
      console.error(error);
    }
  );
}