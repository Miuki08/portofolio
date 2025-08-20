import Image from 'next/image';
import { Inter } from 'next/font/google';

// Definisikan font Inter di luar komponen
const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white pt-16 pb-8 ${inter.className}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-500/20 mr-4">
                <Image 
                  src="/psh.jpg" 
                  alt="Alfiansyah Bima" 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Alfiansyah Bima
                </h3>
                <p className="text-sm text-gray-400">Beginner Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 text-center lg:text-left leading-relaxed max-w-md">
              Video Editor | Typesetting Artist | Software Developer 
            </p>
            
            <div className="flex items-center text-gray-400 mb-2">
              <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>alfiansyahramadhan416@gmail.com</span>
            </div>
            
            <div className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Depok, Indonesia</span>
            </div>
          </div>

          {/* Empty Space (Center) */}
          <div className="hidden lg:block">
            {/* Space intentionally left empty as requested */}
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-purple-500">
              Connect Me
            </h3>
            <p className="text-gray-400 mb-6 text-center lg:text-left">
              Hubungi aku jika kamu ingin berkolaborasi atau mengenal aku lebih dekat
            </p>
            
            <div className="flex space-x-4">
              {[
                { href: 'https://www.linkedin.com/in/alfiansyah-bima-6546632a8/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                { href: 'https://github.com/Miuki08', icon: 'fab fa-github', label: 'GitHub' },
                { href: 'https://www.instagram.com/bimstheloneknight08', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: 'https://youtube.com/@07fuu', icon: 'fab fa-youtube', label: 'YouTube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 group"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-gray-400 group-hover:text-white transition-colors`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Alfiansyah Bima. All rights reserved © {currentYear}.
            </p>
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">Create with</span>
              <div className="w-5 h-5 text-pink-500 animate-pulse">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm ml-2">by</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold ml-1">
                αzυre project ♪
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}