
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Network?</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Travelers</h3>
              <p className="mb-6">Get peace of mind knowing help is just a few taps away whenever you need it.</p>
              <Button asChild size="lg" className="bg-secondary hover:bg-orange-600">
                <Link to="/signup">
                  Sign Up as Traveler
                </Link>
              </Button>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Mechanics</h3>
              <p className="mb-6">Grow your business by helping travelers in need. Set your own hours and rates.</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/mechanic-signup">
                  Join as Mechanic
                </Link>
              </Button>
            </div>
          </div>
          
          <p className="text-blue-100">
            Questions? <Link to="/contact" className="underline hover:text-white">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
