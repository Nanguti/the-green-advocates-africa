"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/news", label: "News" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

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
            className="fixed inset-0 bg-black/50 z-40"
          />
          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="mt-12 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      item.label === "Donate"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
