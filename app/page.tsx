"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Globe, Leaf, Users, Award } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);

  const activities = [
    {
      title: "Climate Change Advocacy",
      icon: Globe,
      description:
        "Raising global awareness and driving local action against climate change.",
    },
    {
      title: "Community Empowerment",
      icon: Users,
      description:
        "Building resilient communities through education and participation.",
    },
    {
      title: "Sustainable Development",
      icon: Leaf,
      description:
        "Implementing green solutions for long-term environmental health.",
    },
    {
      title: "Human Rights Protection",
      icon: Award,
      description:
        "Advocating for social justice and equitable community development.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950 dark:via-gray-900 
      dark:to-blue-950 min-h-screen"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-50 dark:opacity-30">
        <div
          className="absolute top-0 left-0 w-64 h-64 bg-green-200/50 dark:bg-green-900/30 rounded-full blur-3xl 
        animate-blob"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-3xl 
        animate-blob animation-delay-2000"
        ></div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-16 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600
             to-blue-600 dark:from-green-400 dark:to-blue-400"
            >
              Transforming Communities
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Empowering communities through environmental advocacy, climate
              action, and sustainable development in Nairobi, Kenya.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="/programs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 
                transition-colors flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Our Programs</span>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold
                 hover:bg-green-600 hover:text-white transition-colors flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Get Involved</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-green-200/50 dark:bg-green-900/30 rounded-2xl blur-xl"></div>
            <div
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-green-100
             dark:border-green-900"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10+", label: "Years Active" },
                  { number: "5000+", label: "Community Members" },
                  { number: "20+", label: "Active Programs" },
                  { number: "50+", label: "Sustainable Initiatives" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-green-50 dark:bg-green-900/30 p-4 rounded-xl"
                  >
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Activities Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
              Our Core Activities
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We are dedicated to creating sustainable change through focused,
              impactful initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center">
                  <activity.icon className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-green-50 dark:bg-green-950/50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Located in Kasarani Sub-County, Clay City Ward, Nairobi, Kenya. We
            are committed to creating lasting environmental and social impact.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors 
            inline-flex items-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Connect With Us</span>
          </motion.a>
        </section>
      </main>
    </div>
  );
}
