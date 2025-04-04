
import React from 'react';

const steps = [
  {
    number: "1",
    title: "Request Assistance",
    description: "Submit your vehicle details, location, and issue through our easy-to-use app.",
    color: "bg-blue-500"
  },
  {
    number: "2",
    title: "Get Matched",
    description: "Our system quickly connects you with available mechanics in your area.",
    color: "bg-secondary"
  },
  {
    number: "3",
    title: "Track Service",
    description: "Follow your mechanic's arrival in real-time and communicate through the app.",
    color: "bg-green-500"
  },
  {
    number: "4",
    title: "Pay Securely",
    description: "Once service is complete, pay through our secure platform and leave a review.",
    color: "bg-purple-500"
  }
];

const HowItWorksSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Simple, Fast & Secure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting roadside assistance has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10 transform translate-x-[-50%]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
