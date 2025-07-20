import { Card } from './ui/card';
import { Button } from './ui/button';
import { Play, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { useState } from 'react';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-4">Témoignages</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez les expériences de nos élèves et leur progression dans l'univers de la salsa
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Témoignages Vidéo</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.videos.map((video) => (
                <Card 
                  key={video.id}
                  className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                        <Play className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Written Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Avis Google</h3>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <Quote className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-600 italic">
                  Découvrez les avis de nos élèves sur Google Reviews
                </p>
              </div>
              
              {/* Elfsight Google Reviews Widget */}
              <div className="elfsight-app-99d2507d-9034-406f-add9-e15167429175" data-elfsight-app-lazy></div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Rejoignez l'aventure !</h3>
              <p className="text-xl mb-6 opacity-90">
                Venez vivre votre propre expérience de la salsa cubaine
              </p>
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Commencer mes cours
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;