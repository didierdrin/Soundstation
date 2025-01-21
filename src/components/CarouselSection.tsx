import { useState, useEffect } from 'react';
import { beatsService, Beat } from '../services/beats';

const CarouselSection = () => {
  const [beats, setBeats] = useState<Beat[]>([]);

  useEffect(() => {
    // Fetch beats with the genre "Carousel"
    beatsService.getBeatsByGenre('Carousel')
      .then((fetchedBeats) => {
        console.log('Fetched beats with genre Carousel:', fetchedBeats); // Debug log
        setBeats(fetchedBeats);
      })
      .catch((error) => {
        console.error('Error fetching beats:', error);
      });
  }, []);

  return (
    <section className="h-[700px] bg-gradient-to-r from-purple-50 to-white pt-16">
      <div className="max-w-7xl mx-auto h-full px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Carousel</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beats.length > 0 ? (
            beats.map((beat) => (
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
            ))
          ) : (
            <p className="text-gray-600">No beats available for the carousel.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;



// import { useState, useEffect } from 'react';
// import { beatsService, Beat } from '../services/beats';

// const CarouselSection = () => {

//     const [beats, setBeats] = useState<Beat[]>([]);

//   useEffect(() => {
//     // Fetch beats with the genre "Carousel"
//     beatsService.getBeatsByGenre('Carousel')
//       .then((fetchedBeats) => {
//         console.log('Fetched beats with genre Carousel:', fetchedBeats); // Debug log
//         setBeats(fetchedBeats);
//       })
//       .catch((error) => {
//         console.error('Error fetching beats:', error);
//       });
//   }, []);


//   return (
//     <section className="h-[700px] bg-gradient-to-r from-purple-50 to-white pt-16">
//       <div className="max-w-7xl mx-auto h-full px-4 py-12">
//         <h2 className="text-3xl font-bold mb-8">What's Popular</h2>
//         <div className="flex gap-4 flex-wrap mb-8">
//           {beats.map((beat) => (
//             <button
//               key={beat.id}
//               onClick={() => setBeats(beats)}
//               className={`px-6 py-3 rounded-full border-2 border-purple-600 
//                 ${beat === beat 
//                   ? 'bg-purple-600 text-white' 
//                   : 'text-purple-600 hover:bg-purple-600 hover:text-white'} 
//                 transition-colors`}
//             >
//               {}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {beats.map((beat) => (
//             <div key={beat.id} className="bg-white rounded-lg shadow-md p-4">
//               {beat.imageUrl && (
//                 <img 
//                   src={beat.imageUrl} 
//                   alt={beat.title} 
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//               )}
//               <h3 className="font-semibold text-lg">{beat.title}</h3>
//               <p className="text-gray-600 mb-2">{beat.producerName}</p>
//               <p className="text-purple-600 font-semibold">${beat.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarouselSection;


// import { useState, useEffect } from 'react';
// import { beatsService, Beat } from '../services/beats';

// const CarouselSection = () => {
//   const [beats, setBeats] = useState<Beat[]>([]);

//   useEffect(() => {
//     // Fetch beats with the genre "Carousel"
//     beatsService.getBeatsByGenre('Carousel')
//       .then((fetchedBeats) => {
//         console.log('Fetched beats with genre Carousel:', fetchedBeats); // Debug log
//         setBeats(fetchedBeats);
//       })
//       .catch((error) => {
//         console.error('Error fetching beats:', error);
//       });
//   }, []);

//   return (
//     <section className="h-[700px] bg-gradient-to-r from-purple-50 to-white pt-16">
//       <div className="max-w-7xl mx-auto h-full px-4 py-12">
//         <h2 className="text-3xl font-bold mb-8">Featured Carousel</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {beats.length > 0 ? (
//             beats.map((beat) => (
//               <div key={beat.id} className="bg-white rounded-lg shadow-md p-4">
//                 <img 
//                   src={beat.imageUrl || '/placeholder-image.jpg'} 
//                   alt={beat.title} 
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-semibold text-lg">{beat.title}</h3>
//                 <p className="text-gray-600 mb-2">{beat.producerName}</p>
//                 <p className="text-purple-600 font-semibold">${beat.price}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No beats available for the carousel.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarouselSection;
