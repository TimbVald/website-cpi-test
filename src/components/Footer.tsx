import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Leaf,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Nos Services", href: "#services" },
    { name: "Actualités", href: "#news" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Protection Phytosanitaire", href: "#" },
    { name: "Recherche & Innovation", href: "#" },
    { name: "Formation & Capacitation", href: "#" },
    { name: "Coopération Régionale", href: "#" },
    { name: "Surveillance des Cultures", href: "#" }
  ];

  const resources = [
    { name: "Publications Scientifiques", href: "#" },
    { name: "Guides Techniques", href: "#" },
    { name: "Base de Données", href: "#" },
    { name: "Rapports Annuels", href: "#" },
    { name: "Cartographie des Risques", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-light to-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Restez Informé des Dernières Actualités
              </h3>
              <p className="text-white/80 text-lg">
                Recevez nos newsletters et alertes phytosanitaires directement dans votre boîte mail
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
              />
              <Button className="bg-secondary hover:bg-secondary-light text-white border-none">
                S'abonner
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="CPI Logo" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-xl">CPI</h3>
                <p className="text-sm text-white/80">Union Africaine</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Le Conseil Phytosanitaire Interafricain coordonne les actions de protection 
              des cultures à travers l'Afrique pour assurer la sécurité alimentaire du continent.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Addis-Abeba, Éthiopie</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+251 11 551 7700</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@cpi-africa.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Leaf className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Leaf className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Ressources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} Conseil Phytosanitaire Interafricain (CPI) - Union Africaine. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm mr-2">Suivez-nous:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;