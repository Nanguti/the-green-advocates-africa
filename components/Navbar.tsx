"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import MobileMenu from "./MobileMenu";
import HoverDropdown from "./HoverDropdown";

const programItems = [
  { label: "All Programs", href: "/programs" },
  { label: "Environment", href: "/programs#environment" },
  { label: "Community", href: "/programs#community" },
  { label: "Education", href: "/programs#education" },
];

const getInvolvedItems = [
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Partners", href: "/partners" },
];

const mediaItems = [
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="text-green-600 w-8 h-8" />
          <span className="text-xl font-bold text-green-800 dark:text-green-400">
            Green Advocates Africa
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-green-700 dark:text-green-400 font-medium hover:text-green-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600"
          >
            About
          </Link>
          <HoverDropdown label="Programs" items={programItems} />
          <HoverDropdown label="Get Involved" items={getInvolvedItems} />
          <HoverDropdown label="Media" items={mediaItems} />
          <Link
            href="/team"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600"
          >
            Team
          </Link>
          <Link
            href="/resources"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-green-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
