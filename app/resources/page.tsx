"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Download, Book, Video, FileImage, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    title: "Educational Materials",
    icon: Book,
    resources: [
      {
        title: "Environmental Conservation Guide",
        description:
          "A comprehensive guide to environmental conservation practices",
        type: "PDF",
        size: "2.5 MB",
        downloadUrl: "/resources/environmental-guide.pdf",
      },
      {
        title: "Climate Change Fact Sheet",
        description: "Key facts and information about climate change",
        type: "PDF",
        size: "1.2 MB",
        downloadUrl: "/resources/climate-change-facts.pdf",
      },
      {
        title: "Sustainable Living Handbook",
        description: "Tips and practices for sustainable living",
        type: "PDF",
        size: "3.1 MB",
        downloadUrl: "/resources/sustainable-living.pdf",
      },
    ],
  },
  {
    title: "Video Resources",
    icon: Video,
    resources: [
      {
        title: "Tree Planting Tutorial",
        description: "Step-by-step guide to proper tree planting",
        type: "Video",
        size: "45 MB",
        downloadUrl: "/resources/tree-planting.mp4",
      },
      {
        title: "Waste Management Workshop",
        description: "Learn about effective waste management practices",
        type: "Video",
        size: "62 MB",
        downloadUrl: "/resources/waste-management.mp4",
      },
    ],
  },
  {
    title: "Infographics",
    icon: FileImage,
    resources: [
      {
        title: "Environmental Impact Infographic",
        description: "Visual representation of environmental impact",
        type: "Image",
        size: "1.8 MB",
        downloadUrl: "/resources/environmental-impact.png",
      },
      {
        title: "Climate Action Timeline",
        description: "Timeline of climate action initiatives",
        type: "Image",
        size: "2.1 MB",
        downloadUrl: "/resources/climate-timeline.png",
      },
    ],
  },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resourceCategories.map((category) => ({
    ...category,
    resources: category.resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

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
            Resources
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Access educational materials, guides, and resources to learn more
            about environmental conservation and sustainable development.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {filteredResources.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <category.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-400">
                  {category.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: resourceIndex * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {resource.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
