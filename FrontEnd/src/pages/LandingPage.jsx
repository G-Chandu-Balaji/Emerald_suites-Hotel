import { motion } from "framer-motion";
import { Star, MapPin, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 shadow-xl py-4 px-8 flex justify-between items-center border-b border-yellow-600/20">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-wide text-yellow-400"
        >
          Emerald Suites
        </motion.h1>
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 rounded-xl px-6 py-2 text-md text-black font-semibold shadow-xl">
            Explore as Guest
          </button>
          <button className="bg-white text-black hover:bg-gray-200 rounded-xl px-6 py-2 text-md font-semibold shadow-xl">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white p-6 max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
            Hotel Emerald Suites
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-90 leading-relaxed text-yellow-200">
            Luxury. Elegance. A Class Beyond.
          </p>
          <button className="rounded-2xl px-10 py-5 text-xl bg-yellow-500 text-black hover:bg-yellow-400 shadow-2xl font-semibold">
            Book Your Stay
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-neutral-900">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Star className="w-12 h-12 text-yellow-400" />,
              title: "Premium Comfort",
              desc: "Luxurious rooms with timeless elegance and modern features.",
            },
            {
              icon: <MapPin className="w-12 h-12 text-yellow-400" />,
              title: "Prime Location",
              desc: "Located where convenience meets sophistication.",
            },
            {
              icon: <Phone className="w-12 h-12 text-yellow-400" />,
              title: "24/7 Concierge",
              desc: "World-class service available at any hour.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-3xl shadow-2xl bg-neutral-950/70 backdrop-blur-xl border border-yellow-700/30 hover:scale-105 transition-transform duration-300 p-10 text-center flex flex-col items-center gap-6"
            >
              <div>{f.icon}</div>
              <h3 className="text-3xl font-semibold text-yellow-300">
                {f.title}
              </h3>
              <p className="text-yellow-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-neutral-900 to-black">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-100 to-yellow-400 bg-clip-text text-transparent">
          Explore Our Luxury Suites
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              img: "https://images.unsplash.com/photo-1600585154154-71213ecf5c51",
              title: "Royal Deluxe Suite",
              desc: "A refined blend of elegance, space, and luxury.",
            },
            {
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              title: "Executive Gold Suite",
              desc: "Perfect for high-profile guests seeking premium comfort.",
            },
            {
              img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
              title: "Imperial Family Suite",
              desc: "Spacious, luxurious, and crafted for unforgettable stays.",
            },
          ].map((room, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-2xl bg-neutral-950/60 border border-yellow-700/40 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-3 text-yellow-300">
                  {room.title}
                </h3>
                <p className="text-yellow-100/70">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-200 py-12 text-center border-t border-yellow-700/30">
        <p className="text-lg opacity-80">
          © 2025 Hotel Emerald Suites. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
