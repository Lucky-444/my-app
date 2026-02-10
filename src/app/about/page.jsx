"use client";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 pt-32 pb-20 overflow-hidden">
      {/* Floating Gradients */}
      <div className="absolute top-40 -left-32 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 -right-32 w-[450px] h-[450px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Hero Section */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          About TravelGo 🌍
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          More than a travel platform — we’re your trusted companion for
          unforgettable journeys.
        </p>
      </div>

      {/* Mission Card */}
      <div className="relative mt-20 flex justify-center">
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-3xl text-center hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            To simplify travel planning by combining technology, transparency,
            and trust — making every journey smooth, affordable, and memorable.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: "💡",
            title: "Innovation",
            text: "We use modern tech to make travel planning effortless.",
          },
          {
            icon: "🤝",
            title: "Trust",
            text: "Transparent pricing and reliable partners you can count on.",
          },
          {
            icon: "🌱",
            title: "Sustainability",
            text: "Supporting responsible tourism and local communities.",
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

      {/* Story Section */}
      <div className="mt-32 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          TravelGo was born from a simple idea — travel should be exciting, not
          exhausting. Frustrated with hidden costs, complicated planning, and
          unreliable information, we set out to build a platform that travelers
          could truly trust.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {[
          { value: "50+", label: "Destinations" },
          { value: "10K+", label: "Happy Travelers" },
          { value: "500+", label: "Curated Packages" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-32 text-center text-gray-500 text-sm">
        © 2026 TravelGo · Travel with confidence ✈️
      </div>
    </div>
  );
}
