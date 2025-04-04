
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Swift<span className="text-secondary">Mechanic</span>
            </h3>
            <p className="text-gray-300">
              Connecting stranded travelers with reliable local mechanics in real-time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">For Travelers</h4>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition duration-200">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition duration-200">Pricing</Link></li>
              <li><Link to="/request-service" className="text-gray-300 hover:text-white transition duration-200">Request Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">For Mechanics</h4>
            <ul className="space-y-2">
              <li><Link to="/mechanic-signup" className="text-gray-300 hover:text-white transition duration-200">Join Our Network</Link></li>
              <li><Link to="/mechanic-resources" className="text-gray-300 hover:text-white transition duration-200">Resources</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-white transition duration-200">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-200">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition duration-200">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} SwiftMechanic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
