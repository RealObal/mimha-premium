import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/cropped_circle_image (2).png"
                alt="MIMHA Logo"
                className="h-8 object-contain"
              />
              <span className="font-bold text-white text-sm">MIMHA</span>
            </div>
            <p className="text-sm text-gray-400">
              Promoting mental well-being and addiction recovery in Northern Uganda.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/our-work" className="hover:text-teal-400 transition-colors">Our Work</Link></li>
              <li><Link to="/partners" className="hover:text-teal-400 transition-colors">Partners</Link></li>
              <li><Link to="/team" className="hover:text-teal-400 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Approach</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#prevention" className="hover:text-teal-400 transition-colors">Prevention</a></li>
              <li><a href="#diagnosis" className="hover:text-teal-400 transition-colors">Early Diagnosis</a></li>
              <li><a href="#harm-reduction" className="hover:text-teal-400 transition-colors">Harm Reduction</a></li>
              <li><a href="#treatment" className="hover:text-teal-400 transition-colors">Treatment & Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 flex-shrink-0" />
                <span>Gulu, Northern Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@mimha.org" className="hover:text-teal-400 transition-colors">info@mimha.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Contact us for inquiries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Mouthpiece Initiative for Mental Health and Addiction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
