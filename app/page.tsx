"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import AntiInspect from './component/AntiInspect';

export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Animasi untuk teks judul
    const animateText = () => {
      const textElement = textRef.current;
      if (textElement && textElement.textContent) {
        const text = textElement.textContent;
        textElement.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.animation = `fadeIn 0.5s forwards ${i * 0.1}s`;
            textElement.appendChild(span);
          }, i * 100);
        }
      }
    };
    
    animateText();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-500 text-white relative overflow-hidden">
      {/* Background animasi */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-float"
            style={{
              width: Math.random() * 50 + 20 + 'px',
              height: Math.random() * 50 + 20 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="text-center max-w-4xl px-6 z-10">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hallo, Im <span className="text-pink-400">Alfiansyah Bima</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
          Video Editor | Typesetting Artist | Software Developer
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/about" 
            className="relative bg-white text-purple-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 
                       hover:scale-110 hover:shadow-2xl hover:text-indigo-700 overflow-hidden group"
          >
            <span className="relative z-10">Kenal aku lebih dekat</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-5 border-b-2 border-r-2 border-white rotate-45"></div>
      </div>

      {/* Panggil AntiInspect di sini */}
      <AntiInspect />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 0.9; transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slideUp 1s forwards 0.5s;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
