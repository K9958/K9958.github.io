'use client';  // Add this at the top because framer-motion requires client-side rendering

import { AnimatePresence } from "framer-motion";
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react';
import Portfolio from './components/sections/Portfolio';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import CV from './components/sections/CV';
import Footer from './components/layout/Footer';
import { motion } from 'framer-motion';

const ContentSection = ({ section }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!section || section === "me" ? (
        <AboutMe />
      ) : section === 'portfolio' ? (
        <Portfolio />
      ) : section === 'cv' ? (
        <CV />
      ) : section === 'contact' ? (
        <Contact />
      ) : null}
    </motion.div>
  );
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
          <AnimatePresence mode="wait" initial={false}>
            <ContentSection section={section} key={section || 'home'} />
          </AnimatePresence>
        </div>
      </main>
      <Footer isActive={isActive} />
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
