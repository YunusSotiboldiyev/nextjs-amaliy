import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="flex items-center space-x-4">
            <Image 
              src="/logo2.png" 
              alt="logo" 
              width={100} 
              height={100} 
              className="rounded-full"
            />
          </div>

          <div>
            <p className="text-sm mt-2">MyRide Inc., 2nd Floor, New York, NY 10016</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">News</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">How we work</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400">US Office</a></li>
              <li><a href="#" className="hover:text-gray-400">Asia Office</a></li>
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-400">Become a partner</a></li>
              <li><a href="#" className="hover:text-gray-400">Partner Support</a></li>
              <li><a href="#" className="hover:text-gray-400">Mobile app links</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
