const sampleListings = [
{
title: "Mountain Retreat in Manali",
description: "Beautiful mountain cabin with valley views.",
image: {
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [77.1734, 31.1048],
},
price: 1800,
location: "Manali",
country: "India",
},

{
title: "Luxury Villa Goa",
description: "Beachside villa with private pool.",
image: {
url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [73.8278, 15.4909],
},
price: 4200,
location: "Goa",
country: "India",
},

{
title: "Modern Apartment Delhi",
description: "Stylish apartment in city center.",
image: {
url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [77.1025, 28.7041],
},
price: 2200,
location: "Delhi",
country: "India",
},

{
title: "Lake View Cottage",
description: "Relaxing cottage with lake scenery.",
image: {
url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [79.4591, 29.3919],
},
price: 2600,
location: "Nainital",
country: "India",
},

{
title: "Desert Camp Rajasthan",
description: "Traditional desert stay experience.",
image: {
url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [70.9083, 26.9157],
},
price: 1500,
location: "Jaisalmer",
country: "India",
},

{
title: "Houseboat Kerala",
description: "Peaceful backwater houseboat stay.",
image: {
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [76.3388, 9.4981],
},
price: 3400,
location: "Alleppey",
country: "India",
},

{
title: "Snow Cabin Shimla",
description: "Wooden cabin surrounded by snow.",
image: {
url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [77.1734, 31.1048],
},
price: 2800,
location: "Shimla",
country: "India",
},

{
title: "Forest Treehouse",
description: "Adventure stay inside forest.",
image: {
url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [76.132, 11.6854],
},
price: 3100,
location: "Wayanad",
country: "India",
},

{
title: "Penthouse Mumbai",
description: "Luxury skyline penthouse.",
image: {
url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [72.8777, 19.076],
},
price: 5500,
location: "Mumbai",
country: "India",
},

{
title: "Tea Garden Resort",
description: "Beautiful tea plantation resort.",
image: {
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [88.2636, 27.041],
},
price: 2400,
location: "Darjeeling",
country: "India",
},

{
title: "Beach Hut Puri",
description: "Simple peaceful beach hut.",
image: {
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [85.8312, 19.8135],
},
price: 1200,
location: "Puri",
country: "India",
},

{
title: "Luxury Palace Udaipur",
description: "Royal palace experience.",
image: {
url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [73.7125, 24.5854],
},
price: 6200,
location: "Udaipur",
country: "India",
},

{
title: "Hilltop Villa Mussoorie",
description: "Peaceful villa on hilltop.",
image: {
url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [78.0747, 30.4598],
},
price: 3300,
location: "Mussoorie",
country: "India",
},

{
title: "Camping Dome Rishikesh",
description: "Luxury camping under stars.",
image: {
url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [78.2676, 30.0869],
},
price: 1700,
location: "Rishikesh",
country: "India",
},

{
title: "Studio Apartment Bangalore",
description: "Affordable modern studio apartment.",
image: {
url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [77.5946, 12.9716],
},
price: 1400,
location: "Bangalore",
country: "India",
},

{
title: "River Side Cottage",
description: "Nature cottage beside river.",
image: {
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [77.3152, 32.0107],
},
price: 2100,
location: "Kasol",
country: "India",
},

{
title: "Modern Loft Hyderabad",
description: "Minimal stylish loft.",
image: {
url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [78.4867, 17.385],
},
price: 2700,
location: "Hyderabad",
country: "India",
},

{
title: "Village Farm Stay",
description: "Authentic countryside experience.",
image: {
url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [75.3412, 31.1471],
},
price: 1100,
location: "Punjab",
country: "India",
},

{
title: "Island Resort Andaman",
description: "Luxury island getaway.",
image: {
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [92.6586, 11.7401],
},
price: 7100,
location: "Andaman",
country: "India",
},

{
title: "Historic Haveli Jaipur",
description: "Traditional haveli stay.",
image: {
url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
filename: "listingimage",
},
geometry: {
type: "Point",
coordinates: [75.7873, 26.9124],
},
price: 2900,
location: "Jaipur",
country: "India",
},
];

module.exports = { data: sampleListings };
