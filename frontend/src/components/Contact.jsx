import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { contactInfo, salsaClasses } from '../data/mock';
import { useState } from 'react';

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    // In a real app, this would open the location in a map
    const address = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const uniqueLocations = salsaClasses.reduce((acc, classItem) => {
    const exists = acc.find(item => item.venue === classItem.venue);
    if (!exists) {
      acc.push(classItem);
    }
    return acc;
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">Contact</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Prêt à commencer votre aventure salsa ? Contactez-moi pour toute information !
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <Mail className="h-6 w-6 text-orange-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <Phone className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Téléphone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                    <MessageCircle className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Réseaux Sociaux</p>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href={contactInfo.socialMedia.facebook}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a 
                          href={contactInfo.socialMedia.instagram}
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a 
                          href={contactInfo.socialMedia.youtube}
                          className="text-pink-600 hover:text-red-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Youtube className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(`mailto:aurelien@salsa-flubb.com?subject=Demande d'information - Cours de Salsa&body=Bonjour Aurelien,%0D%0A%0D%0AJe suis intéressé(e) par vos cours de salsa.%0D%0A%0D%0ACordialement,`, '_blank')}
                  >
                    Envoyer un Email
                  </Button>
                </div>
              </Card>
            </div>

            {/* Locations */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Nos Lieux de Cours</h3>
                
                <div className="space-y-4">
                  {uniqueLocations.map((location) => (
                    <div 
                      key={location.id}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => handleLocationClick(location)}
                    >
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{location.venue}</h4>
                          <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-orange-600 border-orange-300 hover:bg-orange-50"
                          >
                            Voir sur la carte
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;