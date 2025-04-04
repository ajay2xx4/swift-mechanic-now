
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How SwiftMechanic Works</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects stranded travelers with reliable local mechanics in minutes
            </p>
          </div>
          
          {/* For Travelers */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">For Travelers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="/placeholder.svg" alt="Request Service" className="rounded-md w-full h-auto" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">1. Request Service</h3>
                <p className="text-lg text-gray-700 mb-6">
                  When you're stranded, open the app and share your location, vehicle details, and the issue you're experiencing. Our intelligent system will immediately start searching for available mechanics nearby.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>Takes less than 2 minutes</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>Photo upload capability for better diagnosis</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  <span>Emergency prioritization available</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">2. Get Matched with a Mechanic</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Available mechanics in your area will receive your request. You'll be able to see their profiles, including ratings, reviews, and estimated arrival times before accepting.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>View mechanic qualifications and specialties</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>Transparent pricing information</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  <span>Read past customer reviews</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="/placeholder.svg" alt="Mechanic Matching" className="rounded-md w-full h-auto" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="/placeholder.svg" alt="Track Service" className="rounded-md w-full h-auto" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">3. Track Service & Pay</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Once connected, you can track your mechanic's arrival in real-time. After the service is complete, pay securely through the app and rate your experience to help other travelers.
                </p>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>Real-time ETA and location tracking</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="mr-2">✓</span>
                  <span>In-app messaging with your mechanic</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* For Mechanics */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">For Mechanics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-secondary font-bold text-2xl mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Join Our Network</h3>
                <p className="text-gray-600 mb-4">
                  Sign up, complete our verification process, and showcase your skills and qualifications to build trust with travelers.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Fill out your profile completely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Submit required documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Complete background verification</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-secondary font-bold text-2xl mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Receive Job Requests</h3>
                <p className="text-gray-600 mb-4">
                  Set your availability and service area. Receive real-time notifications when travelers nearby need assistance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>View request details before accepting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Set your own schedule and work area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Accept jobs that match your skills</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-secondary font-bold text-2xl mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Grow Your Business</h3>
                <p className="text-gray-600 mb-4">
                  Provide excellent service, earn great reviews, and get paid quickly for your work through our secure payment system.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Set your own rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Weekly direct deposits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Build a reputation with reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-orange-600">
                <Link to="/signup">Sign Up as Traveler</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/mechanic-signup">Join as Mechanic</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
