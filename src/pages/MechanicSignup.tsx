
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const MechanicSignup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application received!",
      description: "We'll review your information and contact you soon.",
    });
  };

  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">Join Our Mechanic Network</h1>
              <p className="text-xl text-gray-600">
                Help travelers in need while growing your business with SwiftMechanic
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply</h3>
                <p className="text-gray-600">
                  Fill out the application with your information and qualifications
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Verify</h3>
                <p className="text-gray-600">
                  Complete our verification process including background check
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Earning</h3>
                <p className="text-gray-600">
                  Get approved and start receiving service requests in your area
                </p>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Mechanic Application</CardTitle>
                <CardDescription>
                  Please provide your information to join our mechanic network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="New York" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="NY" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" min="0" placeholder="5" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialties">Specialties (comma-separated)</Label>
                    <Input id="specialties" placeholder="Engine repair, Transmission, Electrical systems" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Certifications</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert1" />
                        <Label htmlFor="cert1" className="font-normal">ASE Certified</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert2" />
                        <Label htmlFor="cert2" className="font-normal">AAA Approved</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert3" />
                        <Label htmlFor="cert3" className="font-normal">I-CAR Certified</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert4" />
                        <Label htmlFor="cert4" className="font-normal">Manufacturer Certified</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="about">About Yourself</Label>
                    <textarea 
                      id="about" 
                      className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md"
                      placeholder="Tell us about your experience, skills, and why you want to join our platform"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms" className="font-normal text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                      </Label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MechanicSignup;
