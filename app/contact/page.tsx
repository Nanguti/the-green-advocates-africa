"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kasarani Sub-County, Clay City Ward
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: info@greenadvocatesafrica.org
                    <br />
                    Phone: +254 XXX XXX XXX
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
