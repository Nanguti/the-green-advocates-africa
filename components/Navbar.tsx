"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu } from "lucide-react";
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
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
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
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
