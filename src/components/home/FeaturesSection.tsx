
import React from 'react';
import { MapPin, Clock, Shield, Star } from "lucide-react";

const features = [
  {
    icon: <MapPin size={24} className="text-secondary" />,
    title: "GPS-Based Mechanic Search",
    description: "Locate nearby mechanics with real-time availability, ratings, and transparent pricing."
  },
  {
    icon: <Clock size={24} className="text-secondary" />,
    title: "Real-Time Updates",
    description: "Track your mechanic's arrival with live ETA updates and service progress notifications."
  },
  {
    icon: <Shield size={24} className="text-secondary" />,
    title: "Verified Professionals",
    description: "Every mechanic is thoroughly vetted with ID verification, skill assessment, and workshop credentials."
  },
  {
    icon: <Star size={24} className="text-secondary" />,
    title: "Ratings & Reviews",
    description: "Make informed decisions based on detailed reviews and ratings from other travelers."
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How SwiftMechanic Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect stranded travelers with skilled mechanics through our innovative platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1">
              <div className="mb-4 inline-block p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
