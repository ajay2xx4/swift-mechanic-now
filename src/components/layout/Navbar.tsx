
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-3 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            Swift<span className="text-secondary">Mechanic</span>
          </span>
        </Link>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col gap-4 md:hidden">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </Link>
                <Link to="/mechanic-signup" onClick={() => setIsMenuOpen(false)}>
                  Join as Mechanic
                </Link>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline">
                    <Link to="/login">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition duration-200">
                Home
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition duration-200">
                How It Works
              </Link>
              <Link to="/mechanic-signup" className="text-gray-700 hover:text-primary transition duration-200">
                Join as Mechanic
              </Link>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="outline">
                <Link to="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
