'use client';  // Add this at the top because framer-motion requires client-side rendering

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Raleway } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useState, Suspense, useEffect } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

const PortfolioCard = ({ title, description, tech, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-[#252526] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-[#2d2d2e] rounded-full text-gray-300">
              {item}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  )
}

const TimelineItem = ({ year, title, company, duration, description, isEducation }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-6 relative"
    >
      {/* Aikajanan viiva ja piste */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 ${isEducation ? 'bg-purple-400' : 'bg-blue-400'} rounded-full z-10 
          ${isEducation ? 'ring-2 ring-purple-400 ring-opacity-50' : ''}`} />
        <div className="w-0.5 h-full bg-gray-700 -mt-1.5" />
      </div>
      
      {/* Sisältö */}
      <div className="flex-1 pb-12">
        <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
          <span className={`font-medium ${isEducation ? 'text-purple-400' : 'text-blue-400'}`}>{year}</span>
          <h3 className={`text-xl text-white ${playfair.className}`}>{title}</h3>
          <span className="text-gray-400">@ {company}</span>
          {isEducation && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-400 bg-opacity-20 text-purple-300 border border-purple-400 border-opacity-30">
              Education
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500 block mb-2">{duration}</span>
        <p className={`${isEducation ? 'text-purple-100' : 'text-gray-300'}`}>{description}</p>
      </div>
    </motion.div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

const ContentSection = ({ section }) => {
  if (!section || section === "me") {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-20 lg:gap-40 items-center justify-center w-full h-full">
          {/* Kuvan animaatio mobiilissa */}
          <motion.div
            initial={{ opacity: 0, y: "15%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:hidden h-[40vh] flex items-center justify-center"
          >
            <Image
              src="/profilephoto.png"
              alt="Profile photo"
              width={500}
              height={500}
              className="h-full w-auto max-h-[600px] object-contain"
            />
          </motion.div>
          
          {/* Kuvan animaatio desktopissa */}
          <motion.div
            initial={{ opacity: 0, x: "-15%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex h-auto items-center justify-center"
          >
            <Image
              src="/profilephoto.png"
              alt="Profile photo"
              width={500}
              height={500}
              className="h-full w-auto max-h-[600px] object-contain"
            />
          </motion.div>
          
          {/* Tekstiosio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-4"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className={`text-5xl sm:text-6xl font-bold ${playfair.className} text-white`}
            >
              Kristian Kantola
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-2xl text-gray-300 font-light"
            >
              Programmer
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-gray-400 max-w-lg leading-relaxed"
            >
              Passionate software developer with a keen eye for detail and a love for automation.
              Specializing in software development and modern web technologies, I&apos;m always eager to learn something new. 
              When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends or contributing to open-source projects.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (section === 'portfolio') {
    const projects = [
      {
        title: "AI Chat Application",
        description: "A real-time chat application powered by artificial intelligence, featuring dynamic response generation and context awareness.",
        tech: ["React", "Node.js", "OpenAI", "WebSocket"],
        image: "/project1.jpg",
        link: "https://github.com/yourusername/project1"
      },
      {
        title: "Task Management System",
        description: "A comprehensive task management solution with team collaboration features and real-time updates.",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        image: "/project2.jpg",
        link: "https://github.com/yourusername/project2"
      },
      {
        title: "E-commerce Platform",
        description: "A modern e-commerce platform with advanced filtering, search, and payment processing capabilities.",
        tech: ["React", "Redux", "Node.js", "MongoDB"],
        image: "/project3.jpg",
        link: "https://github.com/yourusername/project3"
      },
      {
        title: "Weather Dashboard",
        description: "A weather monitoring dashboard with interactive maps and real-time weather data visualization.",
        tech: ["Vue.js", "D3.js", "Express", "Weather API"],
        image: "/project4.jpg",
        link: "https://github.com/yourusername/project4"
      }
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <h2 className={`text-4xl ${playfair.className} mb-8`}>Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  if (section === 'cv') {
    const timeline = [
      {
        year: "2020",
        title: "Bachelor of Engineering, ICT",
        company: "JAMK University of Applied Sciences",
        duration: "2020 ->",
        description: "Information and Communication Technology studies. Aiming to graduate as a Bachelor of Engineering in ICT.",
        isEducation: true
      },
      {
        year: "2016",
        title: "Sales Negotiator",
        company: "Buusteri Oy",
        duration: "Summer 2016",
        description: "Sales negotiation responsibilities"
      },
      {
        year: "2016",
        title: "Kindergarten Worker",
        company: "Päiväkoti Lammastarha Oy",
        duration: "2016",
        description: "Work trial as a kindergarten worker"
      },
      {
        year: "2014",
        title: "Element Worker",
        company: "Lujabetoni Oy Siilinjärvi",
        duration: "2014",
        description: "Internship as a concrete element worker"
      },
      {
        year: "2014",
        title: "Plastic Worker",
        company: "Rotomon Oy",
        duration: "Summer 2014",
        description: "Plastic manufacturing worker responsibilities"
      },
      {
        year: "2013",
        title: "High School Diploma",
        company: "Kangasniemi High School",
        duration: "2013",
        description: "Upper secondary education completed with matriculation examination",
        isEducation: true
      }
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <h2 className={`text-4xl ${playfair.className} mb-12`}>Timeline</h2>
        <div className="space-y-2">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.year}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineItem {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  if (section === 'contact') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <h2 className={`text-4xl ${playfair.className} mb-8`}>Contact</h2>
        <p className="text-gray-400 mb-8">
          Feel free to reach out! I&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </motion.div>
    )
  }

  // Oletusnäkymä (About Me)
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-20 lg:gap-40 items-center justify-center w-full h-full">
      {/* Kuvan animaatio mobiilissa */}
      <motion.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:hidden h-[40vh] flex items-center justify-center"
      >
        <Image
          src="/profilephoto.png"
          alt="Profile photo"
          width={500}
          height={500}
          className="h-full w-auto max-h-[600px] object-contain"
        />
      </motion.div>
      
      {/* Kuvan animaatio desktopissa */}
      <motion.div
        initial={{ opacity: 0, x: "-15%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex h-auto items-center justify-center"
      >
        <Image
          src="/profilephoto.png"
          alt="Profile photo"
          width={500}
          height={500}
          className="h-full w-auto max-h-[600px] object-contain"
        />
      </motion.div>
      
      {/* Tekstiosio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col gap-4"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className={`text-5xl sm:text-6xl font-bold ${playfair.className} text-white`}
        >
          Kristian Kantola
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-2xl text-gray-300 font-light"
        >
          Programmer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-gray-400 max-w-lg leading-relaxed"
        >
          Passionate software developer with a keen eye for detail and a love for automation.
          Specializing in software development and modern web technologies, I&apos;m always eager to learn something new. 
          When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends or contributing to open-source projects.
        </motion.p>
      </motion.div>
    </div>
  )
}

function HomeContent() {
  const searchParams = useSearchParams()
  const section = searchParams.get('section')

  const isActive = (linkSection) => {
    if (linkSection === 'me' && !section) return true;
    return section === linkSection;
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
      }
    }, 500);

    return () => clearTimeout(scrollTimeout);
  }, [section]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-[#181818] via-[#2a2a2b] to-[#151515] overflow-hidden">
      <main className="flex-1 overflow-y-auto px-8 pb-10 pt-8 sm:px-20 sm:pt-20">
        <div className="min-h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <ContentSection section={section} key={section || 'home'} />
          </AnimatePresence>
        </div>
      </main>
      <footer className="flex gap-4 sm:gap-10 flex-wrap items-center justify-center py-6 bg-gradient-to-b from-transparent to-[#151515]">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className={`text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 
            ${isActive('me') 
              ? 'text-white font-normal border-blue-400' 
              : 'text-gray-400 hover:text-gray-200 border-transparent'}`}
          href="/"
        >
          Me
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className={`text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 
            ${isActive('portfolio') 
              ? 'text-white font-normal border-blue-400' 
              : 'text-gray-400 hover:text-gray-200 border-transparent'}`}
          href="/?section=portfolio"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className={`text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 
            ${isActive('cv') 
              ? 'text-white font-normal border-blue-400' 
              : 'text-gray-400 hover:text-gray-200 border-transparent'}`}
          href="/?section=cv"
        >
          Curriculum
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className={`text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 
            ${isActive('contact') 
              ? 'text-white font-normal border-blue-400' 
              : 'text-gray-400 hover:text-gray-200 border-transparent'}`}
          href="/?section=contact"
        >
          Contact
        </Link>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
