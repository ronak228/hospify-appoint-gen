
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 backdrop-blur-md bg-white/80 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-10 h-10 rounded-md bg-hospital-600 text-white flex items-center justify-center text-xl font-bold">
              H+
            </span>
            <span className="text-xl font-medium text-hospital-800">
              HealthCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-hospital-800 hover:text-hospital-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-hospital-800 hover:text-hospital-600 transition-colors">
              Services
            </a>
            <a href="#doctors" className="text-hospital-800 hover:text-hospital-600 transition-colors">
              Doctors
            </a>
            <a href="#appointment" className="text-hospital-800 hover:text-hospital-600 transition-colors">
              Appointment
            </a>
            <a href="#contact" className="text-hospital-800 hover:text-hospital-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <a 
              href="#appointment" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-hospital-600 rounded-full shadow-sm hover:bg-hospital-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-hospital-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute left-0 right-0 top-full py-3 px-4 bg-white shadow-lg space-y-3 transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <a href="#" className="block py-2 text-hospital-800 hover:text-hospital-600">Home</a>
          <a href="#services" className="block py-2 text-hospital-800 hover:text-hospital-600">Services</a>
          <a href="#doctors" className="block py-2 text-hospital-800 hover:text-hospital-600">Doctors</a>
          <a href="#appointment" className="block py-2 text-hospital-800 hover:text-hospital-600">Appointment</a>
          <a href="#contact" className="block py-2 text-hospital-800 hover:text-hospital-600">Contact</a>
          <a 
            href="#appointment" 
            className="block py-2.5 mt-3 text-center text-white bg-hospital-600 rounded-md hover:bg-hospital-700"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
