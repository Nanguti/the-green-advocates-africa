"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Handshake,
  Building2,
  Globe,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
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

const currentPartners = [
  {
    name: "Environmental Conservation Society",
    logo: "/images/partners/ecs-logo.png",
    type: "NGO",
    focus: "Environmental Protection",
    description:
      "Working together on climate change initiatives and community education programs.",
  },
  {
    name: "GreenTech Solutions",
    logo: "/images/partners/greentech-logo.png",
    type: "Corporate",
    focus: "Sustainable Technology",
    description:
      "Partnering to implement sustainable technology solutions in our community.",
  },
  {
    name: "Community Development Fund",
    logo: "/images/partners/cdf-logo.png",
    type: "Foundation",
    focus: "Community Development",
    description:
      "Supporting our community empowerment and development initiatives.",
  },
  {
    name: "Youth Empowerment Network",
    logo: "/images/partners/yen-logo.png",
    type: "Youth Organization",
    focus: "Youth Development",
    description: "Collaborating on youth education and leadership programs.",
  },
];

const partnershipTypes = [
  {
    title: "Corporate Partnership",
    icon: Building2,
    description:
      "Partner with us to implement sustainable business practices and support community initiatives.",
    benefits: [
      "CSR Impact",
      "Brand Visibility",
      "Employee Engagement",
      "Community Development",
    ],
  },
  {
    title: "NGO Collaboration",
    icon: Globe,
    description:
      "Join forces with us to amplify environmental and social impact.",
    benefits: [
      "Resource Sharing",
      "Knowledge Exchange",
      "Expanded Reach",
      "Joint Programs",
    ],
  },
  {
    title: "Community Partnership",
    icon: Users,
    description:
      "Work with us to strengthen community bonds and create lasting change.",
    benefits: [
      "Local Impact",
      "Community Trust",
      "Cultural Integration",
      "Sustainable Development",
    ],
  },
  {
    title: "Strategic Partnership",
    icon: Target,
    description: "Align your goals with our mission for maximum impact.",
    benefits: [
      "Long-term Impact",
      "Shared Resources",
      "Innovation",
      "Scalable Solutions",
    ],
  },
];

export default function Partners() {
  const [formData, setFormData] = useState({
    organization: "",
    type: "",
    email: "",
    phone: "",
    website: "",
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
            Our Partners
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Working together with organizations and individuals to create
            lasting environmental and social impact.
          </p>
        </motion.div>

        {/* Current Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">
            Current Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-400">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {partner.type} • {partner.focus}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnership Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-8 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <type.icon className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnership Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6 text-center">
            Become a Partner
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="organization">Organization Name</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Partnership Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select partnership type" />
                </SelectTrigger>
                <SelectContent>
                  {partnershipTypes.map((type) => (
                    <SelectItem key={type.title} value={type.title}>
                      {type.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Partnership Proposal</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your organization and how you'd like to partner with us"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Submit Partnership Proposal
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
