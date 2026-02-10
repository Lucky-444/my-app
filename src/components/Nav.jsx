"use client";

import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ✈️ TravelGo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/destinations" className="hover:text-blue-600 transition">
            Destinations
          </Link>
          <Link href="/packages" className="hover:text-blue-600 transition">
            Packages
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/book"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/destinations" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
            <Link href="/packages" onClick={() => setIsOpen(false)}>
              Packages
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link
              href="/book"
              className="bg-blue-600 text-white text-center py-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
