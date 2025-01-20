import { ShoppingCart, Search, Play, PlayCircle } from 'lucide-react';
import PlayBar  from "@/components/Playbar";
import TopBar  from "@/components/Topbar";
import Footer  from "@/components/Footer";


const CarouselSection = () => (
  <section className="h-[700px] bg-gradient-to-r from-purple-50 to-white pt-16">
    <div className="max-w-7xl mx-auto h-full px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">What's Popular</h2>
      <div className="flex gap-4 flex-wrap">
        {['Hip Hop', 'R&B', 'Pop', 'Trap', 'Lo-Fi', 'House'].map((genre) => (
          <button
            key={genre}
            className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  </section>
);

const TrendingSection = () => (
  <section className="h-[500px] bg-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Trending</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex-none w-64">
            <div className="h-[320px] bg-white rounded-lg shadow-md">
              <div className="h-[150px] bg-purple-100 rounded-t-lg"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Summer Vibes Beat</h3>
                <p className="text-gray-600 mb-4">Producer Name</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                    <ShoppingCart className="h-4 w-4" />
                    $29.99
                  </button>
                  <button className="p-2 text-purple-600 hover:text-purple-700">
                    <PlayCircle className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProducersSection = () => (
  <section className="h-[500px] bg-purple-50">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">Soundstation Studio</h2>
      <p className="text-xl text-gray-600 mb-8">For producers - Your music business</p>
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Manage your business</h3>
          <p className="text-gray-600">Upload, price, and organize your beats with ease</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Track your performance</h3>
          <p className="text-gray-600">Get insights into your sales and audience engagement</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Grow your audience</h3>
          <p className="text-gray-600">Connect with artists and expand your reach</p>
        </div>
      </div>
      <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
        Get Started
      </button>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <CarouselSection />
      <TrendingSection />
      <ProducersSection />
      <Footer />
      <PlayBar />
    </div>
  );
}