
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Roadside Help When You Need It Most
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect with verified local mechanics in minutes. Fast, reliable roadside assistance anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
              <Link to="/request-service">
                Find a Mechanic Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white py-3 px-6 rounded-lg">
              <Link to="/how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-size-4 pattern-opacity-10"></div>
    </div>
  );
};

export default HeroSection;
