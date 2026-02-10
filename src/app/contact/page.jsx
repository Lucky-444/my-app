"use client";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-100 via-white to-blue-100 px-6 pt-32 pb-20 overflow-hidden">
      {/* Floating Gradients */}
      <div className="absolute top-40 -left-32 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 -right-32 w-[450px] h-[450px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
          Contact Us 📞
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Have questions or need help planning your trip? We’re here for you.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-8">
          {[
            {
              icon: "📍",
              title: "Our Office",
              text: "Bangalore, India",
            },
            {
              icon: "📧",
              title: "Email Us",
              text: "support@travelgo.com",
            },
            {
              icon: "📞",
              title: "Call Us",
              text: "+91 98765 43210",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:scale-105 transition"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-3 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 text-center text-gray-500 text-sm">
        We usually respond within 24 hours ⏱️
      </div>
    </div>
  );
}
