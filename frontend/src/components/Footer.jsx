import { Card } from './ui/card';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Salsa Flubb'</h3>
            <p className="text-orange-100 mb-6">
              Cours de salsa cubaine authentique dans la région de Montpellier. 
              Apprenez la salsa en profondeur dans une ambiance chaleureuse et conviviale.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.socialMedia.facebook}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.socialMedia.instagram}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.socialMedia.youtube}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#planning" 
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Planning
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Qui suis-je ?
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-orange-100 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-orange-100 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-orange-100 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-orange-100 text-sm">
                  Montpellier et environs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-orange-100 mb-2">
            © 2025 Salsa Flubb' - Tous droits réservés
          </p>
          <p className="text-orange-200 text-sm flex items-center justify-center">
            Fait avec <Heart className="h-4 w-4 mx-1 text-pink-300" /> pour la salsa cubaine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;