"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Calendar, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Community Tree Planting Initiative Success",
    date: "March 15, 2024",
    category: "Environment",
    excerpt:
      "Our recent tree planting drive saw over 500 community members come together to plant 1000 trees...",
    image: "/images/news/tree-planting.jpg",
  },
  {
    title: "Youth Climate Action Workshop",
    date: "March 10, 2024",
    category: "Education",
    excerpt:
      "We organized a successful workshop empowering young people to take climate action...",
    image: "/images/news/youth-workshop.jpg",
  },
  {
    title: "New Waste Management Program Launched",
    date: "March 5, 2024",
    category: "Sustainability",
    excerpt:
      "Our new waste management initiative aims to reduce community waste by 50%...",
    image: "/images/news/waste-management.jpg",
  },
  // Add more news items as needed
];

const categories = [
  "All",
  "Environment",
  "Education",
  "Sustainability",
  "Community",
  "Events",
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = newsItems.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, success stories, and
            community impact.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                <Tag className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                {/* Add actual image here */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  Read More →
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
