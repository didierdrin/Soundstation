import { useState, useEffect } from 'react';
import { beatsService, Beat } from '../services/beats';

const CarouselSection = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [beats, setBeats] = useState<Beat[]>([]);
  const genres = ['Hip Hop', 'R&B', 'Pop', 'Trap', 'Lo-Fi', 'House'];

  useEffect(() => {
    if (selectedGenre) {
      beatsService.getBeatsByGenre(selectedGenre)
        .then(setBeats)
        .catch(console.error);
    }
  }, [selectedGenre]);

  return (
    <section className="h-[700px] bg-gradient-to-r from-purple-50 to-white pt-16">
      <div className="max-w-7xl mx-auto h-full px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">What's Popular</h2>
        <div className="flex gap-4 flex-wrap mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-3 rounded-full border-2 border-purple-600 
                ${selectedGenre === genre 
                  ? 'bg-purple-600 text-white' 
                  : 'text-purple-600 hover:bg-purple-600 hover:text-white'} 
                transition-colors`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beats.map((beat) => (
            <div key={beat.id} className="bg-white rounded-lg shadow-md p-4">
              {beat.imageUrl && (
                <img 
                  src={beat.imageUrl} 
                  alt={beat.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="font-semibold text-lg">{beat.title}</h3>
              <p className="text-gray-600 mb-2">{beat.producerName}</p>
              <p className="text-purple-600 font-semibold">${beat.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;