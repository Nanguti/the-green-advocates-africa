"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">
            About The Green Advocates Africa
          </h1>

          <div className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Green Advocates Africa is a community-based organization
                (CBO) and non-profit organization dedicated to creating a
                sustainable future through environmental advocacy, climate
                action, and community development. Based in Kasarani Sub-County,
                Clay City Ward, Nairobi, Kenya, we work tirelessly to empower
                communities and protect our environment.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a world where communities are empowered to take
                action against climate change, where environmental protection is
                a shared responsibility, and where sustainable development
                creates opportunities for all. Through our various programs and
                initiatives, we strive to make this vision a reality.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
                Our Leadership
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Founded by Johnstone Imbote, The Green Advocates Africa brings
                together passionate individuals committed to making a
                difference. Our team combines expertise in environmental
                science, community development, and advocacy to create lasting
                impact.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
                Our Impact
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Through our diverse range of programs and initiatives, we have
                made significant strides in:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Promoting environmental awareness and education</li>
                <li>Implementing sustainable waste management solutions</li>
                <li>Supporting community development initiatives</li>
                <li>
                  Advocating for climate action and environmental protection
                </li>
                <li>Empowering youth through education and mentorship</li>
                <li>Fostering community engagement and participation</li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
