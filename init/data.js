const sampleListings = [
// TRENDING
{
  title: "Modern Glass Villa",
  description: "Luxury villa with amazing city views.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [72.8777, 19.0760],
  },
  price: 6500,
  location: "Mumbai",
  country: "India",
},

{
  title: "Luxury Forest Cabin",
  description: "Beautiful cabin surrounded by nature.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [78.4867, 17.385],
  },
  price: 5200,
  location: "Hyderabad",
  country: "India",
},

{
  title: "Designer Penthouse",
  description: "Modern penthouse with premium facilities.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.209, 28.6139],
  },
  price: 7200,
  location: "Delhi",
  country: "India",
},

// ROOMS
{
  title: "Cozy Budget Room",
  description: "Comfortable room for solo travelers.",
  category: "Rooms",
  image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [80.2707, 13.0827],
  },
  price: 1800,
  location: "Chennai",
  country: "India",
},

{
  title: "Minimalist Bedroom",
  description: "Clean and stylish private room.",
  category: "Rooms",
  image: {
    url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [72.5714, 23.0225],
  },
  price: 2200,
  location: "Ahmedabad",
  country: "India",
},

{
  title: "Deluxe Guest Room",
  description: "Affordable room with premium comfort.",
  category: "Rooms",
  image: {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.5946, 12.9716],
  },
  price: 2500,
  location: "Bangalore",
  country: "India",
},

// ICONIC CITIES
{
  title: "Paris Skyline Apartment",
  description: "Elegant apartment in the heart of Paris.",
  category: "Iconic Cities",
  image: {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [2.3522, 48.8566],
  },
  price: 8500,
  location: "Paris",
  country: "France",
},

{
  title: "New York Luxury Loft",
  description: "Experience life in New York City.",
  category: "Iconic Cities",
  image: {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [-74.006, 40.7128],
  },
  price: 9500,
  location: "New York",
  country: "USA",
},

{
  title: "Tokyo Modern Studio",
  description: "Compact and stylish studio apartment.",
  category: "Iconic Cities",
  image: {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [139.6917, 35.6895],
  },
  price: 7900,
  location: "Tokyo",
  country: "Japan",
},

// MOUNTAINS
{
  title: "Himalayan Retreat",
  description: "Enjoy breathtaking mountain views.",
  category: "Mountains",
  image: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.1734, 31.1048],
  },
  price: 4300,
  location: "Shimla",
  country: "India",
},

{
  title: "Swiss Alpine Chalet",
  description: "Peaceful stay in the Swiss Alps.",
  category: "Mountains",
  image: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [8.2275, 46.8182],
  },
  price: 9800,
  location: "Zermatt",
  country: "Switzerland",
},

{
  title: "Wooden Mountain Cabin",
  description: "Cozy cabin surrounded by pine forests.",
  category: "Mountains",
  image: {
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [78.2676, 30.0869],
  },
  price: 3900,
  location: "Mussoorie",
  country: "India",
},
// BEACHES
{
  title: "Goa Beach House",
  description: "Relax and enjoy beautiful sea views in Goa.",
  category: "Beaches",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [73.8278, 15.4909],
  },
  price: 4500,
  location: "Goa",
  country: "India",
},

{
  title: "Maldives Ocean Villa",
  description: "Luxury villa with direct access to the ocean.",
  category: "Beaches",
  image: {
    url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [73.2207, 3.2028],
  },
  price: 15000,
  location: "Male",
  country: "Maldives",
},

{
  title: "Bali Sunset Resort",
  description: "Enjoy tropical vibes and stunning sunsets.",
  category: "Beaches",
  image: {
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [115.1889, -8.4095],
  },
  price: 9000,
  location: "Bali",
  country: "Indonesia",
},

// CASTLES
{
  title: "Scottish Castle Retreat",
  description: "Historic castle surrounded by nature.",
  category: "Castles",
  image: {
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [-3.1883, 55.9533],
  },
  price: 8500,
  location: "Edinburgh",
  country: "Scotland",
},

{
  title: "German Royal Palace",
  description: "Experience a luxurious royal lifestyle.",
  category: "Castles",
  image: {
    url: "https://images.unsplash.com/photo-1570213489059-0aac6626cade",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [10.4515, 51.1657],
  },
  price: 9200,
  location: "Berlin",
  country: "Germany",
},

{
  title: "French Heritage Castle",
  description: "Elegant architecture with classic interiors.",
  category: "Castles",
  image: {
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [2.2137, 46.2276],
  },
  price: 8900,
  location: "Lyon",
  country: "France",
},

// FARMS
{
  title: "Organic Farm Stay",
  description: "Reconnect with nature and fresh food.",
  category: "Farms",
  image: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [78.4867, 17.3850],
  },
  price: 2600,
  location: "Hyderabad",
  country: "India",
},

{
  title: "Countryside Cottage Farm",
  description: "Peaceful farm stay with greenery all around.",
  category: "Farms",
  image: {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [75.8577, 22.7196],
  },
  price: 2400,
  location: "Indore",
  country: "India",
},

{
  title: "Rustic Farm Escape",
  description: "Perfect weekend getaway in the countryside.",
  category: "Farms",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.4126, 23.2599],
  },
  price: 2800,
  location: "Bhopal",
  country: "India",
},

// ARCTIC
{
  title: "Arctic Igloo Resort",
  description: "Unique glass igloo experience under the stars.",
  category: "Arctic",
  image: {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [24.9384, 60.1699],
  },
  price: 11000,
  location: "Helsinki",
  country: "Finland",
},

{
  title: "Northern Lights Cabin",
  description: "Watch the aurora from your cozy cabin.",
  category: "Arctic",
  image: {
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [18.9553, 69.6492],
  },
  price: 12500,
  location: "Tromsø",
  country: "Norway",
},

{
  title: "Snowy Arctic Lodge",
  description: "A magical winter experience in Lapland.",
  category: "Arctic",
  image: {
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [25.7294, 66.5039],
  },
  price: 11800,
  location: "Rovaniemi",
  country: "Finland",
},
// CASINOS
{
  title: "Vegas Casino Resort",
  description: "Luxury resort near world-famous casinos.",
  category: "Casinos",
  image: {
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [-115.1398, 36.1699],
  },
  price: 14000,
  location: "Las Vegas",
  country: "USA",
},

{
  title: "Macau Grand Hotel",
  description: "Premium stay with entertainment and gaming.",
  category: "Casinos",
  image: {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [113.5439, 22.1987],
  },
  price: 12500,
  location: "Macau",
  country: "China",
},

{
  title: "Monte Carlo Luxury Suite",
  description: "Elegant accommodation in Monaco.",
  category: "Casinos",
  image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [7.4246, 43.7384],
  },
  price: 16000,
  location: "Monte Carlo",
  country: "Monaco",
},

// SWIMMING POOL
{
  title: "Poolside Paradise Resort",
  description: "Relax in a beautiful infinity pool.",
  category: "Swimming Pool",
  image: {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [73.8567, 18.5204],
  },
  price: 6500,
  location: "Pune",
  country: "India",
},

{
  title: "Luxury Pool Villa",
  description: "Private pool with premium amenities.",
  category: "Swimming Pool",
  image: {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [72.8777, 19.0760],
  },
  price: 8500,
  location: "Mumbai",
  country: "India",
},

{
  title: "Tropical Pool Retreat",
  description: "Perfect getaway with relaxing vibes.",
  category: "Swimming Pool",
  image: {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [115.1889, -8.4095],
  },
  price: 9800,
  location: "Bali",
  country: "Indonesia",
},

// RIVER
{
  title: "River View Cottage",
  description: "Wake up to peaceful river scenery.",
  category: "River",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [88.3639, 22.5726],
  },
  price: 3200,
  location: "Kolkata",
  country: "India",
},

{
  title: "Lakeside Wooden Cabin",
  description: "Beautiful cabin near flowing waters.",
  category: "River",
  image: {
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [78.2676, 30.0869],
  },
  price: 3900,
  location: "Rishikesh",
  country: "India",
},

{
  title: "Amazon River Retreat",
  description: "Experience nature and adventure together.",
  category: "River",
  image: {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [-60.0217, -3.1190],
  },
  price: 7500,
  location: "Manaus",
  country: "Brazil",
},

// BONUS TRENDING
{
  title: "Skyline Penthouse",
  description: "Premium penthouse with stunning views.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.1025, 28.7041],
  },
  price: 9000,
  location: "Delhi",
  country: "India",
},

{
  title: "Modern Luxury Loft",
  description: "Spacious loft with elegant interiors.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [72.8777, 19.0760],
  },
  price: 7800,
  location: "Mumbai",
  country: "India",
},

{
  title: "Designer Smart Home",
  description: "Contemporary home with premium comfort.",
  category: "Trending",
  image: {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    filename: "listingimage",
  },
  geometry: {
    type: "Point",
    coordinates: [77.5946, 12.9716],
  },
  price: 8200,
  location: "Bangalore",
  country: "India",
}
];
module.exports = { data: sampleListings };