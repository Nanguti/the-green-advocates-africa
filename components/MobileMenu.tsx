"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[150]"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-xl z-[200]"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                <span className="text-xl font-bold text-green-800 dark:text-green-400">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <Link
                  href="/"
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  onClick={onClose}
                >
                  About
                </Link>

                {/* Programs Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("programs")}
                    className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  >
                    Programs
                    {openDropdown === "programs" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openDropdown === "programs" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2">
                          {programItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-gray-600 dark:text-gray-400 hover:text-green-600 py-2"
                              onClick={onClose}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Get Involved Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("getInvolved")}
                    className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  >
                    Get Involved
                    {openDropdown === "getInvolved" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openDropdown === "getInvolved" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2">
                          {getInvolvedItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-gray-600 dark:text-gray-400 hover:text-green-600 py-2"
                              onClick={onClose}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Media Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown("media")}
                    className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  >
                    Media
                    {openDropdown === "media" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openDropdown === "media" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2">
                          {mediaItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-gray-600 dark:text-gray-400 hover:text-green-600 py-2"
                              onClick={onClose}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/team"
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  onClick={onClose}
                >
                  Team
                </Link>
                <Link
                  href="/resources"
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  onClick={onClose}
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-600 py-2"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
