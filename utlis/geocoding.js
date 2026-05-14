const fetch = require("node-fetch");

async function getCoordinates(location) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "WanderlustApp/1.0",
        },
      }
    );

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.log(`Invalid response for: ${location}`);
      return null;
    }

    if (!data.length) return null;

    return {
      type: "Point",
      coordinates: [
        parseFloat(data[0].lon),
        parseFloat(data[0].lat),
      ],
    };
  } catch (err) {
    console.log("Geocoding error:", err.message);
    return null;
  }
}

module.exports = getCoordinates;