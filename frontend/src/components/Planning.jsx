import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, MapPin, Users } from 'lucide-react';
import { salsaClasses } from '../data/mock';

const Planning = () => {
  const getDayColor = (day) => {
    const colors = {
      'Lundi': 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300',
      'Mardi': 'bg-gradient-to-br from-red-100 to-red-200 border-red-300',
      'Mercredi': 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300'
    };
    return colors[day] || 'bg-gray-100';
  };
  
  const getLevelColor = (level) => {
    const colors = {
      'Débutant': 'bg-green-500 hover:bg-green-600',
      'Intermédiaire': 'bg-orange-500 hover:bg-orange-600',
      'Avancé': 'bg-red-500 hover:bg-red-600',
      'Débutant & Inter': 'bg-blue-500 hover:bg-blue-600'
    };
    return colors[level] || 'bg-gray-500';
  };

  return (
    <section id="planning" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">Planning des Cours</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choisissez le créneau qui vous convient le mieux parmi nos différents lieux et niveaux
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {salsaClasses.map((classItem) => (
            <Card 
              key={classItem.id} 
              className={`${getDayColor(classItem.day)} p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2`}
            >
              {/* Day Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{classItem.day}</h3>
                <Badge className="bg-white text-gray-700 px-3 py-1 text-sm font-medium">
                  {classItem.venue}
                </Badge>
              </div>
              
              {/* Classes */}
              <div className="space-y-4 mb-6">
                {classItem.classes.map((cls, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="text-lg font-semibold text-gray-800">{cls.time}</span>
                      </div>
                      <Badge className={`${getLevelColor(cls.level)} text-white px-3 py-1 transition-colors duration-200`}>
                        {cls.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Location */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">{classItem.venue}</p>
                    <p className="text-sm text-gray-600">{classItem.address}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-orange-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-orange-600" />
            Niveaux des cours
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Badge className="bg-green-500 text-white mr-3">Débutant</Badge>
              <span className="text-sm text-gray-600">Aucune expérience requise</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-orange-500 text-white mr-3">Intermédiaire</Badge>
              <span className="text-sm text-gray-600">Bases acquises</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-red-500 text-white mr-3">Avancé</Badge>
              <span className="text-sm text-gray-600">Niveau confirmé</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-blue-500 text-white mr-3">Débutant & Inter</Badge>
              <span className="text-sm text-gray-600">Cours mixte</span>
            </div>
          </div>
        </div>
      </div>

<div className="max-w-4xl mx-auto mt-12 p-6 bg-red-700 rounded-xl shadow-md border border-red-800 text-center text-white transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-red-800">
  <h2 className="text-2xl font-bold mb-4">Ritmo Corazón</h2>
  <p className="mb-6">
    Un programme de 6 mois pour transformer complètement ta danse. Musicalité, rythme, nouvelles passes, style, guidage clair, fluidité avec un suivi personnalisé.
  </p>
  <a
    href="https://www.ritmocorazon.fr"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition"
  >
    En savoir plus
  </a>
</div>




    </section>

    
  );
};



export default Planning;