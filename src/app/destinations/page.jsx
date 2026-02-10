"use client";

import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Golden beaches, nightlife, and water adventures.",
    price: "₹12,000",
    distance: "450 km",
    rating: 4.6,
  },
  {
    id: 2,
    name: "Manali",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Snowy mountains, adventure sports & peace.",
    price: "₹15,500",
    distance: "540 km",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    description: "Royal palaces, forts and vibrant culture.",
    price: "₹9,800",
    distance: "280 km",
    rating: 4.4,
  },
  {
    id: 4,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Backwaters, greenery and calm vibes.",
    price: "₹13,200",
    distance: "620 km",
    rating: 4.7,
  },
];

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 pt-32 pb-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-300 bg-clip-text text-transparent">
          Explore Destinations 🌍
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Hand-picked destinations designed for unforgettable experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {destinations.map((place) => (
          <div
            key={place.id}
            className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-xl font-bold">
                {place.name}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm">{place.description}</p>

              <div className="mt-4 flex justify-between text-sm text-gray-700">
                <span>📍 {place.distance}</span>
                <span>⭐ {place.rating}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  {place.price}
                </span>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
                  View Trip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-24 text-center text-gray-500 text-sm">
        More destinations coming soon ✨
      </div>
    </div>
  );
}
