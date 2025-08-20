'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
  // Anti Inspect ringan
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-purple-600 mb-12 relative 
            after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-pink-400 after:rounded"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
          {/* Foto & Sosmed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-purple-600 shadow-lg">
              <Image
                src="/phost.jpeg"
                alt="Profile Picture"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Sosmed Icon */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4"
            >
              {[
                { href: 'https://www.linkedin.com/in/alfiansyah-bima-6546632a8/', icon: 'fab fa-linkedin-in' },
                { href: 'https://github.com/Miuki08', icon: 'fab fa-github' },
                { href: 'https://www.instagram.com/bimstheloneknight08', icon: 'fab fa-instagram' },
                { href: 'https://youtube.com/@07fuu', icon: 'fab fa-youtube' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-pink-400 transition-colors"
                >
                  <i className={item.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-gray-700 mb-8 leading-relaxed">
              Perjalanan karier saya, dimulai dari dunia pengeditan video yang
              saya tekuni di platform YouTube dan Bilibili (Bstation). Dari sana,
              saya mengembangkan keahlian baru dengan menjadi typesetter untuk
              platform Bilibili dan berbagai situs web. Beberapa tahun belakangan
              ini, saya telah memperluas pengetahuan serta kemampuan saya dengan
              mendalami bidang pengembangan perangkat lunak dan gim.
            </p>

            {/* Timeline */}
            <div className="space-y-6 pl-8 relative before:content-[''] before:absolute before:left-1 before:top-0 before:h-full before:w-0.5 before:bg-purple-600">
              {[
                {
                  year: '2021 - Present',
                  title: 'Video Editor',
                  desc: 'Membuat konten yang menarik di platform digital seperti YouTube dan Bilibili',
                },
                {
                  year: '2021 - Present',
                  title: 'Typesetting Artist',
                  desc: 'Menjadi Typesetting untuk platform digital seperti Bilibili dan beberapa website lainnya',
                },
                {
                  year: '2023 - Present',
                  title: 'Software Developer',
                  desc: 'Membuat sebuah aplikasi, website, dan game',
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {exp.year}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">{exp.title}</h3>
                    <p className="text-gray-600">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
