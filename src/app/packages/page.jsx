"use client";

import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Goa Getaway",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    duration: "3 Nights / 4 Days",
    price: "₹18,999",
    type: "Budget",
    includes: ["Hotel", "Breakfast", "Sightseeing"],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Manali Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    duration: "5 Nights / 6 Days",
    price: "₹28,500",
    type: "Premium",
    includes: ["Resort", "Meals", "Adventure Sports"],
    rating: 4.8,
  },
  {
    id: 3,
    title: "Royal Rajasthan",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    duration: "6 Nights / 7 Days",
    price: "₹35,000",
    type: "Luxury",
    includes: ["Heritage Hotel", "All Meals", "Local Guide"],
    rating: 4.7,
  },
  {
    id: 4,
    title: "Kerala Escape",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    duration: "4 Nights / 5 Days",
    price: "₹22,800",
    type: "Premium",
    includes: ["Houseboat", "Breakfast", "Transfers"],
    rating: 4.6,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-white to-blue-100 px-6 pt-32 pb-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
          Travel Packages 🎒
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Choose a package that matches your travel style and budget.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-4 left-4 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold text-gray-800">
                {pkg.type}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>

              <p className="text-sm text-gray-600 mt-1">⏱ {pkg.duration}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {pkg.includes.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center text-sm text-gray-700">
                <span>⭐ {pkg.rating}</span>
                <span className="text-lg font-bold text-purple-600">
                  {pkg.price}
                </span>
              </div>

              <button className="mt-5 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:scale-105 transition">
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-24 text-center text-gray-500 text-sm">
        Custom packages available on request ✨
      </div>
    </div>
  );
}
