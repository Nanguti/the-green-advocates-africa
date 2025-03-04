"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Leaf,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/greenadvocatesafrica",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/greenadvocates",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/greenadvocatesafrica",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/greenadvocatesafrica",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Get Involved", href: "/volunteer" },
  ];

  const programCategories = [
    "Climate Change",
    "Community Development",
    "Environmental Protection",
    "Social Justice",
    "Youth Empowerment",
    "Sustainability Initiatives",
  ];

  return (
    <footer className="bg-green-50 dark:bg-gray-900 border-t border-green-100 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 pt-16 pb-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-400">
                Green Advocates Africa
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering communities through environmental advocacy and
              sustainable development in Nairobi, Kenya.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Categories */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-6">
              Our Focus Areas
            </h3>
            <ul className="space-y-3">
              {programCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  Kasarani Sub-County, Clay City Ward, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  +254 700 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <a
                  href="mailto:info@greenadvocatesafrica.org"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  info@greenadvocatesafrica.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-1 border-t border-green-100 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Green Advocates Africa. All Rights
            Reserved.
            <span className="block text-sm mt-2">
              Registered Non-Profit Organization
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
