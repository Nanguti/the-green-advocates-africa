"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface HoverDropdownProps {
  label: string;
  items: DropdownItem[];
}

const HoverDropdown: React.FC<HoverDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`
          text-gray-700 dark:text-gray-300 
          hover:text-green-600 
          font-medium 
          flex 
          items-center 
          transition-colors 
          duration-200
          ${isOpen ? "text-green-600" : ""}
        `}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`
            ml-1 
            h-4 
            w-4 
            transform 
            transition-transform 
            duration-200 
            ${isOpen ? "rotate-180" : ""}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="
              absolute 
              top-full 
              left-0 
              mt-2 
              w-48 
              bg-white 
              dark:bg-gray-800 
              rounded-lg 
              shadow-lg 
              border 
              dark:border-gray-700 
              z-50
            "
          >
            <div className="py-1">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    block 
                    px-4 
                    py-2 
                    text-sm 
                    text-gray-700 
                    dark:text-gray-300 
                    hover:bg-green-50 
                    dark:hover:bg-green-900/20 
                    transition-colors 
                    duration-200
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverDropdown;
