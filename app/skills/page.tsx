
'use client';

import { useState } from 'react';
import Image from "next/image";
import AntiInspect from '../component/AntiInspect';

// Definisikan tipe data untuk hard skill
type HardSkill = {
  name: string;
  icon: string;
  source?: string; // Properti source bersifat opsional
};

type HardSkillsCategory = {
  [key: string]: HardSkill[];
};

const hardSkills: HardSkillsCategory = {
  Languages: [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
  ],

  Frameworks: [
    { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
    { name: 'Phalcon', icon: 'devicon-phalcon-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
  ],

  Tools: [
    {
      name: 'Git',
      icon: 'devicon-git-plain colored'
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original'
    },
    {
      name: 'VS Code',
      icon: 'devicon-vscode-plain colored'
    },
    {
      name: 'MS Office',
      icon: 'https://img.icons8.com/color/96/microsoft-office-2019.png',
      source: 'MS Office'
    },
    {
      name: 'CapCut',
      icon: 'https://cdn.simpleicons.org/capcut/000000',
      source: 'CapCut'
    },
    {
      name: 'Blender',
      icon: 'https://cdn.svgporn.com/logos/blender.svg',
      source: 'Blender'
    },
    {
      name: 'Unity',
      icon: 'https://cdn.svgporn.com/logos/unity-icon.svg',
      source: 'Unity'
    },
    {
      name: 'Figma',
      icon: 'devicon-figma-plain colored'
    },
    {
      name: 'Postman',
      icon: 'devicon-postman-plain colored'
    },
    {
      name: 'XAMPP',
      icon: 'https://cdn.simpleicons.org/xampp/fb7a24',
      source: 'XAMPP'
    },
    {
      name: 'Laragon',
      icon: 'https://cdn.simpleicons.org/laragon/0e83cd',
      source: 'Laragon'
    }
  ]
};

// Definisikan tipe data untuk soft skill
type SoftSkill = {
  name: string;
  icon: string;
  description: string;
};

const softSkills: SoftSkill[] = [
  { 
    name: 'Teamwork', 
    icon: 'fas fa-users',
    description: 'Mampu bekerja sama dalam tim untuk menyelesaikan tugas dan mencapai target bersama'
  },
  { 
    name: 'Communication', 
    icon: 'fas fa-comments',
    description: 'Mampu berkomunikasi dengan baik secara lisan maupun tulisan dalam lingkungan kerja'
  },
  { 
    name: 'Problem Solving', 
    icon: 'fas fa-lightbulb',
    description: 'Mampu menganalisis masalah dan menemukan solusi yang efektif dalam berbagai situasi'
  },
  { 
    name: 'Public Speaking', 
    icon: 'fas fa-microphone',
    description: 'Percaya diri dalam menyampaikan ide, presentasi, dan berinteraksi di depan umum'
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages');

  return (
    <>
      <AntiInspect /> 
        <section className="min-h-screen py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-pink-400 after:rounded">
              My Skills
            </h2>
            
            {/* Menambahkan stylesheet Devicon dan Font Awesome */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            
            <div className="mb-16">
              <h3 className="text-2xl text-center text-purple-600 mb-8">Hard Skills</h3>
              
              <div className="flex justify-center mb-8">
                {Object.keys(hardSkills).map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 mx-2 rounded-full transition-colors ${
                      activeCategory === category 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white text-purple-600 hover:bg-purple-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hardSkills[activeCategory].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4 group relative"
                  >
                    {/* Menampilkan icon dengan berbagai sumber */}
                    <div className="w-16 h-16 flex items-center justify-center text-4xl">
                      {skill.icon.startsWith('http') ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <i className={skill.icon}></i>
                      )}
                    </div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    
                    {/* Tooltip untuk sumber icon - hanya ditampilkan jika properti source ada */}
                    {skill.source && (
                      <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.source}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl text-center text-purple-600 mb-8">Soft Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] text-center group"
                  >
                    <div className="text-3xl text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                      <i className={skill.icon}></i>
                    </div>
                    <h4 className="text-xl text-gray-800 font-semibold mb-2">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer dengan attribution */}
            {/* <div className="mt-12 text-center text-gray-500 text-sm">
              <p>Icons by <a href="https://devicon.dev" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Devicon</a>, <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Icons8</a>, and <a href="https://svgporn.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">SVGPorn</a></p>
            </div> */}
          </div>
        </section>
    </>
  );
}
