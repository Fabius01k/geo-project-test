import { GeoIPServiceSDK } from "./sdk";

const geoIPClient = new GeoIPServiceSDK('http://localhost:3000');

const clientIP = '77.51.199.15';
geoIPClient.getLocationByIP(clientIP)
  .then((location) => {
    console.log(location);
  })
  .catch((error) => {
    console.error(error.message);
  });