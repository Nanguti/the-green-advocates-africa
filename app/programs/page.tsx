"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Climate Change Advocacy",
    description:
      "Raising awareness about climate change impacts and promoting sustainable solutions in our community.",
    icon: "🌍",
    category: ["Environment", "Community"],
  },
  {
    title: "Clean Up Exercises",
    description:
      "Organizing community clean-up drives to maintain a healthy and clean environment.",
    icon: "🧹",
    category: ["Environment", "Community"],
  },
  {
    title: "Tree Growing",
    description:
      "Initiating tree planting campaigns to combat deforestation and promote biodiversity.",
    icon: "🌳",
    category: ["Environment", "Sustainability"],
  },
  {
    title: "Community Engagements",
    description:
      "Facilitating community discussions and workshops on environmental issues.",
    icon: "👥",
    category: ["Community", "Education"],
  },
  {
    title: "Public Participations",
    description:
      "Encouraging community involvement in environmental decision-making processes.",
    icon: "🗣️",
    category: ["Community", "Governance"],
  },
  {
    title: "Waste Management",
    description:
      "Promoting proper waste disposal and recycling practices in the community.",
    icon: "♻️",
    category: ["Environment", "Sustainability"],
  },
  {
    title: "GBV Protection",
    description:
      "Advocating for gender-based violence prevention and support services.",
    icon: "🛡️",
    category: ["Social Justice", "Community"],
  },
  {
    title: "Human Rights Advocacy",
    description: "Protecting and promoting human rights within our community.",
    icon: "⚖️",
    category: ["Social Justice", "Community"],
  },
  {
    title: "Education Promotion",
    description:
      "Supporting educational initiatives and access to quality education.",
    icon: "📚",
    category: ["Education", "Community"],
  },
  {
    title: "Food Security",
    description:
      "Implementing sustainable agriculture and food security programs.",
    icon: "🌾",
    category: ["Sustainability", "Community"],
  },
  {
    title: "Youth Empowerment",
    description: "Providing opportunities and support for youth development.",
    icon: "🌟",
    category: ["Education", "Community"],
  },
  {
    title: "Government & Governance",
    description:
      "Engaging with local government to promote good governance and community development.",
    icon: "🏛️",
    category: ["Governance", "Community"],
  },
  {
    title: "Networking & Opportunities",
    description:
      "Creating platforms for community networking and economic opportunities.",
    icon: "🤝",
    category: ["Community", "Opportunities"],
  },
  {
    title: "Charity Events",
    description:
      "Organizing charitable activities to support vulnerable community members.",
    icon: "❤️",
    category: ["Community", "Social Justice"],
  },
  {
    title: "Capacity Building",
    description:
      "Providing training and resources to strengthen community capabilities.",
    icon: "💪",
    category: ["Education", "Community"],
  },
  {
    title: "Mental Health Advocacy",
    description: "Promoting mental health awareness and support services.",
    icon: "🧠",
    category: ["Health", "Community"],
  },
  {
    title: "Youth Mentorship",
    description:
      "Offering mentorship programs for young people's personal development.",
    icon: "👨‍🏫",
    category: ["Education", "Community"],
  },
  {
    title: "Pad Drive Initiatives",
    description:
      "Providing menstrual hygiene products and education to support women and girls.",
    icon: "🩸",
    category: ["Health", "Social Justice"],
  },
];

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Extract unique categories
  const categories = [
    ...new Set(programs.flatMap((program) => program.category)),
  ];

  // Filter programs based on search and category
  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.some((cat) => program.category.includes(cat)))
  );

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

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
            Our Programs
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to create
            positive change in our community.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategories.includes(category) ? "default" : "outline"
                }
                size="sm"
                onClick={() => toggleCategory(category)}
                className="flex items-center gap-2"
              >
                {selectedCategories.includes(category) && (
                  <X className="w-4 h-4" />
                )}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <AnimatePresence>
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="transform transition-all duration-300"
                >
                  <Card className="h-full hover:shadow-lg">
                    <CardHeader>
                      <div className="text-4xl mb-2">{program.icon}</div>
                      <CardTitle className="text-green-700 dark:text-green-400">
                        {program.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {program.category.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{program.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-gray-500"
            >
              <p className="text-2xl mb-4">No programs found</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategories([]);
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
