import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({
  subsets: ['latin']
});

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

export default function Portfolio() {
  const projects = [
    {
      title: "Web Development Course Project",
      description: "A responsive portfolio website built during my web development studies, featuring modern design principles, animations and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/proj_webharjoitustyo.png",
      link: "https://student.labranet.jamk.fi/~K9958/index.html",
      website: "https://student.labranet.jamk.fi/~K9958/index.html"
    },
    {
      title: "Unity Space Shooter Game",
      description: "A top-down 2.5D space shooter game developed as a one-week sprint project for JAMK's Basics of Game Programming course. Built as a freemium game demo showcasing core gameplay mechanics and space shooter elements.",
      tech: ["Unity", "C#"],
      image: "/proj_void.png",
      link: "https://github.com/SG-01-Productions/bgp-sprint-01",
      website: "https://sg-01-productions.github.io/bgp-sprint-01/"
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with advanced filtering, search, and payment processing capabilities.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      image: "/project3.jpg",
      link: "https://github.com/yourusername/project3",
      website: "https://example-ecommerce.com"
    },
    {
      title: "Weather Dashboard", 
      description: "A weather monitoring dashboard with interactive maps and real-time weather data visualization.",
      tech: ["Vue.js", "D3.js", "Express", "Weather API"],
      image: "/project4.jpg",
      link: "https://github.com/yourusername/project4",
      website: "https://example-weather.com"
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