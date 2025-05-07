import { Link } from 'react-router-dom';
import { Car, Heart, Github, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-racing-500" />
              <span className="text-xl font-bold">Cars.ai</span>
            </Link>
            <p className="text-metal-400 text-sm">
              Explore the world of automobiles in stunning 3D visualization. 
              Discover everything from everyday vehicles to hypercars.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-metal-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/categories" className="text-metal-400 hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="text-metal-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/community" className="text-metal-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Car Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/categories/common" className="text-metal-400 hover:text-white transition-colors">Common Cars</Link></li>
              <li><Link to="/categories/luxury" className="text-metal-400 hover:text-white transition-colors">Luxury Cars</Link></li>
              <li><Link to="/categories/hyper" className="text-metal-400 hover:text-white transition-colors">Hyper Cars</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-metal-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-metal-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-metal-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-metal-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-metal-400 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-metal-400 text-sm">
            &copy; {currentYear} Cars.ai. All rights reserved.
          </p>
          <p className="text-metal-400 text-sm mt-2 md:mt-0">
            Made with <Heart className="inline h-4 w-4 text-racing-500" /> by the Cars.ai Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;