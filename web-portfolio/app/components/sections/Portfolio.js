'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const playfair = Playfair_Display({
  subsets: ['latin']
});

const ProjectDetails = ({ project, onBack }) => {
  return (
    <>
      <div className="bg-[#252526] rounded-lg overflow-hidden">
        <div className="relative h-[500px] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        <div className="p-8 md:p-12">
        <button 
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>← Back to Portfolio</span>
        </button>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 id="ProjectDetailTitle" className={`text-3xl font-semibold ${playfair.className}`}>
              {project.title}
            </h2>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                  rounded-lg transition-all duration-300 text-white font-medium 
                  shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                  hover:-translate-y-0.5 active:translate-y-0"
              >
                View Code
              </a>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 
                    rounded-lg transition-all duration-300 text-white font-medium 
                    shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 
                    hover:-translate-y-0.5 active:translate-y-0"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, index) => (
                <span key={index} className="text-sm px-3 py-1.5 bg-[#2d2d2e] rounded-full text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          <p className="text-gray-300 mb-6">{project.longDescription || project.description}</p>
        </div>
      </div>
    </>
  );
};

const PortfolioCard = ({ project, slug, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#252526] rounded-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-[400px] flex flex-col hover:-translate-y-1"
    >
      <div className="relative h-48 w-full flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold mb-2 ${playfair.className}`}>{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-[#2d2d2e] rounded-full text-gray-300">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <span className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('project');

  const [gridKey, setGridKey] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  const portfolioRef = useRef(null);
  const cardRefs = useRef({});
  const [lastClickedProject, setLastClickedProject] = useState(null);

  useEffect(() => {
    if (!projectId) {
      setGridKey(prev => prev + 1);
    }
  }, [projectId]);

  useEffect(() => {
    if (showGrid && !projectId && lastClickedProject && cardRefs.current[lastClickedProject]) {
      setTimeout(() => {
        cardRefs.current[lastClickedProject]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 400);
    }
    else if (projectId && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        block: 'start'
      });
    }
  }, [showGrid, projectId, lastClickedProject]);


  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const gridVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = {
    "portfolio-website": {
      slug: "portfolio-website",
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js, featuring responsive design, animations, and dynamic content management.",
      longDescription: "This portfolio website is built using Next.js and TailwindCSS. The site incorporates modern web development practices such as responsive design, smooth animations and dynamic content management. The project demonstrates my skills in front-end development and UI/UX design.",
      tech: ["Next.js", "JavaScript", "TailwindCSS"],
      image: "/proj_nextjsportfolio.png",
      link: "https://github.com/K9958/K9958.github.io",
      website: "https://k9958.github.io/"
    },
    "web-shop-frontend": {
      slug: "web-shop-frontend",
      title: "Web Shop Frontend",
      description: "A React-based e-commerce application frontend specialized in PC components sales. Features include category-based product browsing, shopping cart functionality with Redux state management, responsive UI with Bootstrap components, detailed product pages, and a Finnish language interface.",
      tech: ["React", "Redux Toolkit", "React Bootstrap", "React Router"],
      image: "/proj_komponentti.png",
      link: "https://github.com/K9958/portfolio-komponentti",
      website: "https://wonderful-wave-06a31e303.4.azurestaticapps.net/"
    },
    "web-development-course-project": {
      slug: "web-development-course-project",
      title: "Web Development Course Project",
      description: "A responsive portfolio website built during my web development studies, featuring modern design principles, animations and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/proj_webharjoitustyo.png",
      link: "https://student.labranet.jamk.fi/~K9958/index.html",
      website: "https://student.labranet.jamk.fi/~K9958/index.html"
    },
    "unity-space-shooter-game": {
      slug: "unity-space-shooter-game",
      title: "Unity Space Shooter Game",
      description: "A top-down 2.5D space shooter game developed as a one-week sprint project for JAMK's Basics of Game Programming course. Built as a freemium game demo showcasing core gameplay mechanics and space shooter elements.",
      tech: ["Unity", "C#"],
      image: "/proj_void.png",
      link: "https://github.com/SG-01-Productions/bgp-sprint-01",
      website: "https://sg-01-productions.github.io/bgp-sprint-01/"
    }
  };

  const selectedProject = projectId ? projects[projectId] : null;

  const handleProjectClick = (slug) => {
    setShowGrid(false);
    setLastClickedProject(slug);
    router.push(`/?section=portfolio&project=${slug}`);
    setTimeout(() => {
      router.push(`/?section=portfolio&project=${slug}`);
    }, 300);
    scrollToRef(portfolioRef);
  };

  const handleBack = () => {
    router.push('/?section=portfolio');
    setTimeout(() => {
      setShowGrid(true);
    }, 300);
    scrollToRef(portfolioRef);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-6xl"
    >
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="project-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetails 
              project={selectedProject} 
              onBack={handleBack}
            />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-grid"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid-container"
          >
            <h2 ref={portfolioRef} className={`text-4xl ${playfair.className} mb-8`}>Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(projects).map(([slug, project]) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  ref={el => cardRefs.current[slug] = el}
                >
                  <PortfolioCard 
                    project={project}
                    slug={slug}
                    onClick={() => handleProjectClick(slug)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}