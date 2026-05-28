const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "openstreetmap",
};

const geocoder = NodeGeocoder(options);

const getCoordinates = async (location) => {

  try {

    const res = await geocoder.geocode(location);

    if (!res.length) return null;

    return {
      type: "Point",
      coordinates: [res[0].longitude, res[0].latitude],
    };

  } catch (err) {

    console.log(err);
    return null;
  }
};

module.exports = getCoordinates;