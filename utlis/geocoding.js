const axios = require("axios");

const getCoordinates = async (location) => {
  try {

    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${process.env.MAPTILER_API_KEY}`;

    const response = await axios.get(url);

    const coordinates = response.data.features[0].geometry.coordinates;

    return {
      type: "Point",
      coordinates: coordinates,
    };

  } catch (err) {
    console.log("GEOCODING ERROR:", err);
    return null;
  }
};

module.exports = getCoordinates;