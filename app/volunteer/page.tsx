"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Leaf, Book, Briefcase, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const volunteerOpportunities = [
  {
    title: "Environmental Education",
    icon: Book,
    description:
      "Help teach children and adults about environmental conservation",
    commitment: "2-4 hours/week",
    location: "Community Centers",
    skills: ["Teaching", "Environmental Knowledge", "Communication"],
  },
  {
    title: "Tree Planting",
    icon: Leaf,
    description: "Participate in tree planting and maintenance activities",
    commitment: "4-6 hours/week",
    location: "Various Locations",
    skills: ["Physical Work", "Teamwork", "Environmental Knowledge"],
  },
  {
    title: "Community Outreach",
    icon: Users,
    description:
      "Engage with community members about environmental initiatives",
    commitment: "3-5 hours/week",
    location: "Kasarani Sub-County",
    skills: ["Communication", "Community Engagement", "Organization"],
  },
  {
    title: "Event Coordination",
    icon: Briefcase,
    description: "Help organize environmental events and workshops",
    commitment: "5-8 hours/week",
    location: "Office & Community",
    skills: ["Event Planning", "Organization", "Leadership"],
  },
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    experience: "",
    interests: "",
    availability: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join our team of passionate volunteers and make a difference in your
            community.
          </p>
        </motion.div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <opportunity.icon className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {opportunity.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{opportunity.commitment}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{opportunity.location}</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-green-800 dark:text-green-400 mb-2">
                  Required Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {opportunity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 text-center">
            Volunteer Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Previous Volunteer Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Areas of Interest</Label>
              <Select
                value={formData.interests}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, interests: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your interests" />
                </SelectTrigger>
                <SelectContent>
                  {volunteerOpportunities.map((opportunity) => (
                    <SelectItem
                      key={opportunity.title}
                      value={opportunity.title}
                    >
                      {opportunity.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability">Availability</Label>
              <Textarea
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="Please specify your available days and times"
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Submit Application
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
