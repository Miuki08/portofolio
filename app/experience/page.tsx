'use client';

import { useState } from 'react';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: "MERAPAT",
    description: "Platform pemesanan ruang rapat dengan tampilan user friendly dan dengan alur yang memudahkan user",
    image: "/projects/merapat.png",
    technologies: ["PHP", "My SQL", "Bootstrap"],
    category: "Web Development",
    githubUrl: "https://github.com/Miuki08/merapatv2.0.1" // Tambahkan URL GitHub
  },
  {
    id: 2,
    title: "Kerja Kini",
    description: "Platform yang dapat kalian gunakan untuk mencari dan melamar pekerjaan, serta belajar lebih dalam mengenai dunia kerja",
    image: "/projects/kerjakini.png",
    technologies: ["PHP", "My SQL", "Bootstrap"],
    category: "Web Development",
    githubUrl: "https://github.com/Miuki08/KerjaKini" // Tambahkan URL GitHub
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Aplikasi yang dapat kalian gunakan untuk memantau cuaca di seluruh kota di dunia",
    image: "/projects/weather.png",
    technologies: ["Java Script", "Weather API"],
    category: "Web Development",
    githubUrl: "https://github.com/Miuki08/azurareaweather" // Tambahkan URL GitHub
  },
  {
    id: 4,
    title: "Aplikasi Pemesanan Bunga",
    description: "Aplikasi Android yang dapat kalian gunakan untuk memesan berbagai macam bunga dengan mudah",
    image: "/projects/appflower.png",
    technologies: ["Java", "PHP", "My SQL"],
    category: "Mobile Development",
    githubUrl: "https://github.com/Miuki08/android-jaya" // Tambahkan URL GitHub
  },
];

const categories = ["All", "Web Development", "Mobile Development"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter proyek berdasarkan kategori
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa project yang telah aku kerjakan. Setiap project memiliki cerita dan tantangan nya masung - masing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white text-gray-700 hover:bg-purple-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="text-sm text-purple-600 font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">There are no projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}