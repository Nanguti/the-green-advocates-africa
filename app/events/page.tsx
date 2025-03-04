"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = {
  upcoming: [
    {
      title: "Community Clean-up Drive",
      date: "April 15, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Kasarani Sub-County",
      participants: "100+",
      category: "Environment",
      description:
        "Join us for our monthly community clean-up drive. We'll be focusing on waste collection and recycling education.",
      image: "/images/events/cleanup.jpg",
    },
    {
      title: "Youth Climate Summit",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center",
      participants: "200+",
      category: "Education",
      description:
        "A day of learning and action for young climate activists. Workshops, discussions, and practical activities.",
      image: "/images/events/youth-summit.jpg",
    },
    {
      title: "Tree Planting Day",
      date: "April 25, 2024",
      time: "8:00 AM - 1:00 PM",
      location: "Clay City Ward",
      participants: "150+",
      category: "Environment",
      description:
        "Help us plant 500 trees in our community. All materials and refreshments provided.",
      image: "/images/events/tree-planting.jpg",
    },
  ],
  past: [
    {
      title: "Environmental Workshop",
      date: "March 10, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Hall",
      participants: "80+",
      category: "Education",
      description:
        "Successful workshop on sustainable living practices and environmental conservation.",
      image: "/images/events/workshop.jpg",
    },
    {
      title: "Waste Management Training",
      date: "March 5, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Training Center",
      participants: "120+",
      category: "Sustainability",
      description:
        "Community training session on proper waste segregation and recycling techniques.",
      image: "/images/events/waste-training.jpg",
    },
  ],
};

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

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
            Events & Activities
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join us in our upcoming events and see highlights from our past
            activities.
          </p>
        </motion.div>

        <Tabs
          defaultValue="upcoming"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-8">
            {events.upcoming.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                    {/* Add actual image here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">
                      {event.title}
                    </h2>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-5 h-5 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-5 h-5 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users className="w-5 h-5 mr-2" />
                        {event.participants} participants
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {event.description}
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Register Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            {events.past.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                    {/* Add actual image here */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">
                      {event.title}
                    </h2>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-5 h-5 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-5 h-5 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users className="w-5 h-5 mr-2" />
                        {event.participants} participants
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
