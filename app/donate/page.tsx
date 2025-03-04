"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Leaf, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const impactStories = [
  {
    title: "Tree Planting Success",
    description:
      "Your donations helped us plant over 1000 trees in the community",
    icon: Leaf,
    impact: "1000+ trees planted",
  },
  {
    title: "Youth Education",
    description: "Supporting environmental education for young people",
    icon: Users,
    impact: "500+ students reached",
  },
  {
    title: "Climate Action",
    description: "Implementing sustainable solutions in our community",
    icon: Globe,
    impact: "10+ projects completed",
  },
];

const donationOptions = [
  {
    amount: 500,
    description: "Support a tree planting initiative",
    icon: Leaf,
  },
  {
    amount: 1000,
    description: "Fund youth education programs",
    icon: Users,
  },
  {
    amount: 2000,
    description: "Contribute to climate action projects",
    icon: Globe,
  },
  {
    amount: 5000,
    description: "Make a major impact",
    icon: Heart,
  },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Your donation helps us create lasting environmental and social
            impact in our community.
          </p>
        </motion.div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            >
              <story.icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {story.description}
              </p>
              <div className="text-green-600 dark:text-green-400 font-semibold">
                {story.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Options */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 text-center">
              Choose Your Donation Amount
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {donationOptions.map((option) => (
                <motion.button
                  key={option.amount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedAmount === option.amount
                      ? "border-green-600 bg-green-50 dark:bg-green-900/30"
                      : "border-gray-200 dark:border-gray-700 hover:border-green-600"
                  }`}
                >
                  <option.icon className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <div className="font-semibold text-green-800 dark:text-green-400">
                    KES {option.amount}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {option.description}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full"
                />
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={!selectedAmount && !customAmount}
              >
                Donate Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Your donation is secure and tax-deductible. We accept all major
              credit cards and mobile money.
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
