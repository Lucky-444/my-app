"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ✈️ TravelGo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/destinations" className={linkClass("/destinations")}>
            Destinations
          </Link>

          <Link href="/packages" className={linkClass("/packages")}>
            Packages
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* CTA */}
          <Link
            href="/book"
            className={`px-5 py-2 rounded-full transition ${
              pathname === "/book"
                ? "bg-blue-500 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
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
          <div className="flex flex-col px-6 py-4 gap-4 font-medium">
            <Link
              href="/"
              className={linkClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/destinations"
              className={linkClass("/destinations")}
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>

            <Link
              href="/packages"
              className={linkClass("/packages")}
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>

            <Link
              href="/about"
              className={linkClass("/about")}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={linkClass("/contact")}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/book"
              className="bg-blue-500 text-white text-center py-2 rounded-full"
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
