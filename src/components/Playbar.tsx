// Playbar component
import { Play } from 'lucide-react';

const PlayBar = () => (
    <div className="fixed bottom-0 w-full h-[70px] bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-purple-600 hover:text-purple-700">
            <Play className="h-8 w-8" />
          </button>
          <div>
            <h3 className="font-semibold">Currently Playing Beat</h3>
            <p className="text-gray-600">Producer Name</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">0:00 / 2:30</span>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Buy Now $29.99
          </button>
        </div>
      </div>
    </div>
  );

  export default PlayBar;