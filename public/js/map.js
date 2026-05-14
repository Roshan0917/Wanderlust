const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: coordinates,
  zoom: 9
});

new maplibregl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(new maplibregl.Popup()
  .setHTML(
      `<h4>${listingTitle}</h4><p>Exact Location will be provided after booking</p>`
    )
)
  .addTo(map);