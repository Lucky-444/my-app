"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen  overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* Gradient Blobs */}
      <div className="absolute top-40 -left-32 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-72 right-0 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-1/2 w-[450px] h-[450px] bg-pink-400/20 rounded-full blur-3xl -translate-x-1/2 animate-pulse" />

      {/* Main Content */}
      <div className="relative pt-40 px-6 flex flex-col items-center text-center">
        {/* Hero */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          Travel Smarter & Explore Deeper
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl animate-slide-up">
          TravelGo is your modern travel companion — discover destinations, plan
          journeys, and create unforgettable memories with ease.
        </p>

        {/* CTA using Link */}
        <Link
          href="/destinations"
          className="mt-10 inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-12 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
        >
          Start Exploring ✈️
        </Link>

        {/* Motto */}
        <div className="mt-24 bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-3xl hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold text-blue-600">Our Motto</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Making travel simple, affordable, and unforgettable for everyone.
          </p>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {[
            {
              icon: "🌍",
              title: "Discover Places",
              text: "Explore curated destinations with trusted reviews and insights.",
            },
            {
              icon: "🧭",
              title: "Plan Journeys",
              text: "Smart itineraries and flexible travel packages.",
            },
            {
              icon: "✈️",
              title: "Travel Confidently",
              text: "Transparent pricing and reliable travel experiences.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pb-10 text-gray-500 text-sm">
          © 2026 TravelGo · Designed for explorers 🌍
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
