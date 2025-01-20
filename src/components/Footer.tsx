// Footer component

const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-bold text-lg mb-4">Soundstation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Sign up</a></li>
              <li><a href="#" className="hover:text-purple-400">Log in</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Press</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Billboard</a></li>
              <li><a href="#" className="hover:text-purple-400">Inyarwanda</a></li>
              <li><a href="#" className="hover:text-purple-400">Igihe</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">YouTube</a></li>
              <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
              <li><a href="#" className="hover:text-purple-400">X</a></li>
              <li><a href="#" className="hover:text-purple-400">SoundCloud</a></li>
            </ul>
          </div>
        </div>
        <div className="h-[90px] border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; 2025 Soundstation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer; 