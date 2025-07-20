import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar, MapPin, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1558715585-9b706788d173?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjdWJhbiUyMHNhbHNhJTIwZGFuY2luZ3xlbnwwfHx8b3JhbmdlfDE3NTIyNzgxMzN8MA&ixlib=rb-4.1.0&q=85"
          alt="Salsa dancing silhouette"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-red-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-yellow-400 rounded-full opacity-25 animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-6xl md:text-8xl font-bold text-orange-600 mb-4 drop-shadow-lg">
              Salsa Flubb'
            </h1>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              Cours de Salsa Cubaine - Montpellier
            </p>
          </div>
          
          {/* Season Banner */}
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 mb-12 shadow-2xl border-0 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="mr-3 h-8 w-8" />
              <h2 className="text-3xl font-bold">Rentrée 2025-2026</h2>
            </div>
            <p className="text-xl opacity-90">
              Découvrez la passion de la salsa cubaine avec nos cours adaptés à tous les niveaux
            </p>
          </Card>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Music className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dansez avec le coeur</h3>
              <p className="text-gray-600">Apprenez la salsa en profondeur pour danser avec le coeur</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Plusieurs Lieux</h3>
              <p className="text-gray-600">Cours dans différents studios autour de Montpellier</p>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Calendar className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tous Niveaux</h3>
              <p className="text-gray-600">Du débutant complet au danseur confirmé</p>
            </Card>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('planning').scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir le Planning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;