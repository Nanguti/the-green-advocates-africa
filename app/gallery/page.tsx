"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: "Community Clean-up Drive",
    category: "Environment",
    image: "/images/gallery/cleanup-1.jpg",
    description:
      "Community members participating in our monthly clean-up drive",
  },
  {
    id: 2,
    title: "Tree Planting Initiative",
    category: "Environment",
    image: "/images/gallery/tree-planting-1.jpg",
    description: "Volunteers planting trees in the community",
  },
  {
    id: 3,
    title: "Youth Workshop",
    category: "Education",
    image: "/images/gallery/workshop-1.jpg",
    description: "Young participants in our environmental education workshop",
  },
  {
    id: 4,
    title: "Waste Management Training",
    category: "Sustainability",
    image: "/images/gallery/waste-1.jpg",
    description: "Community members learning about proper waste segregation",
  },
  {
    id: 5,
    title: "Community Meeting",
    category: "Community",
    image: "/images/gallery/meeting-1.jpg",
    description: "Regular community consultation meeting",
  },
  {
    id: 6,
    title: "Environmental Education",
    category: "Education",
    image: "/images/gallery/education-1.jpg",
    description: "Students participating in environmental education programs",
  },
  {
    id: 7,
    title: "Recycling Initiative",
    category: "Sustainability",
    image: "/images/gallery/recycling-1.jpg",
    description: "Community members sorting recyclable materials",
  },
  {
    id: 8,
    title: "Youth Climate Action",
    category: "Environment",
    image: "/images/gallery/climate-1.jpg",
    description: "Young activists participating in climate action activities",
  },
];

const categories = [
  "All",
  "Environment",
  "Education",
  "Sustainability",
  "Community",
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our community impact through photos of our activities and
            initiatives.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search gallery..."
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
                <Filter className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                <ImageIcon className="w-12 h-12 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <ImageIcon className="w-24 h-24 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
