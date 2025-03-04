"use client";

import { motion } from "framer-motion";
import { Users, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Doe",
    role: "Executive Director",
    image: "/images/team/john-doe.jpg",
    bio: "Environmental advocate with over 15 years of experience in community development and sustainability.",
    email: "john@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Program Director",
    image: "/images/team/jane-smith.jpg",
    bio: "Leading our environmental education and community engagement initiatives.",
    email: "jane@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
  {
    name: "Michael Johnson",
    role: "Community Coordinator",
    image: "/images/team/michael-johnson.jpg",
    bio: "Working with local communities to implement sustainable development projects.",
    email: "michael@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/michaeljohnson",
    twitter: "https://twitter.com/michaeljohnson",
  },
  {
    name: "Sarah Wilson",
    role: "Environmental Specialist",
    image: "/images/team/sarah-wilson.jpg",
    bio: "Expert in climate change mitigation and environmental conservation strategies.",
    email: "sarah@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/sarahwilson",
    twitter: "https://twitter.com/sarahwilson",
  },
  {
    name: "David Brown",
    role: "Youth Programs Manager",
    image: "/images/team/david-brown.jpg",
    bio: "Empowering young people through environmental education and leadership development.",
    email: "david@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/davidbrown",
    twitter: "https://twitter.com/davidbrown",
  },
  {
    name: "Lisa Chen",
    role: "Research Coordinator",
    image: "/images/team/lisa-chen.jpg",
    bio: "Conducting research on environmental issues and sustainable development solutions.",
    email: "lisa@greenadvocatesafrica.org",
    linkedin: "https://linkedin.com/in/lisachen",
    twitter: "https://twitter.com/lisachen",
  },
];

export default function Team() {
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
            Our Team
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals working to create positive
            environmental and social change in our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative">
                <Users className="w-16 h-16 text-green-600 dark:text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
