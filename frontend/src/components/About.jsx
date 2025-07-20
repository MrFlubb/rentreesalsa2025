import { Card } from './ui/card';
import { Button } from './ui/button';
import { Heart, Award, Users, Globe } from 'lucide-react';
import { aboutContent } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">{aboutContent.title}</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-orange-200 shadow-2xl">
                <div className="relative overflow-hidden rounded-lg group">
                  <img 
                    src={aboutContent.image}
                    alt="Professeur de salsa"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </Card>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg">
                <div className="space-y-6">
                  {aboutContent.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-orange-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="h-8 w-8 text-orange-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">10</p>
                    <p className="text-sm text-gray-600">Années d'expérience</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-red-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">200+</p>
                    <p className="text-sm text-gray-600">Élèves formés</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Globe className="h-8 w-8 text-yellow-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">Montpellier</p>
                    <p className="text-sm text-gray-600">Des cours dans ta ville</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">100%</p>
                    <p className="text-sm text-gray-600">Passion</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Me Contacter
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;