
import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Denver, CO",
    quote: "SwiftMechanic saved me when I broke down on a road trip. A mechanic arrived within 20 minutes and got my car running again!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    quote: "As a mechanic on the platform, I've been able to help travelers in need while growing my business. The app makes everything so easy.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Emma Rodriguez",
    location: "Miami, FL",
    quote: "I was stuck on the highway late at night. The mechanic arrived quickly and was so professional. This service is a must-have for all drivers!",
    rating: 4,
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What People Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from travelers and mechanics using our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
