import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left side - Flash info */}
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 px-3 py-1 rounded-md text-sm font-bold">
              PHYTO FLASH
            </div>
            <div className="hidden md:block text-sm">
              <span className="font-semibold text-green-300">PROTECTION PHYTOSANITAIRE</span>
              <span className="mx-2">•</span>
              <span>Surveillance des cultures</span>
              <span className="mx-2">•</span>
              <span>Lutte intégrée</span>
              <span className="mx-2">•</span>
              <span>Formation technique</span>
            </div>
          </div>

          {/* Right side - Contact and social */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+251 11 646 2348</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@iapsc.africa</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;