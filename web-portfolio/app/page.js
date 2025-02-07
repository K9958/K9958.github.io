'use client';  // Add this at the top because framer-motion requires client-side rendering

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Raleway } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

const ContentSection = ({ section }) => {
  if (section === 'portfolio') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h2 className={`text-4xl ${playfair.className}`}>Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Portfolio projektit tähän */}
        </div>
      </motion.div>
    )
  }

  if (section === 'cv') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <h2 className={`text-4xl ${playfair.className}`}>Curriculum Vitae</h2>
        <div className="text-gray-300">
          {/* CV sisältö tähän */}
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
        className="flex flex-col gap-6 max-w-xl"
      >
        <h2 className={`text-4xl ${playfair.className}`}>Contact</h2>
        <div className="text-gray-300">
          {/* Yhteystiedot tähän */}
        </div>
      </motion.div>
    )
  }

  // Oletusnäkymä (About Me)
  return (
    <div className="flex flex-col sm:flex-row gap-40 items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-6xl font-bold ${playfair.className} text-white`}
        >
          Kristian Kantola
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl text-gray-300 font-light"
        >
          Programmer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-gray-400 max-w-lg leading-relaxed"
        >
          Passionate software developer with a keen eye for detail and a love for automation.
          Specializing in software development and modern web technologies, I&apos;m always eager to learn something new. 
          When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends or contributing to open-source projects.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/profilephoto.png"
          alt="Profile photo"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  )
}

export default function Home() {
  const searchParams = useSearchParams()
  const section = searchParams.get('section')

  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-[#181818] via-[#2a2a2b] to-[#151515] ${raleway.className} text-white`}>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <ContentSection section={section} key={section || 'home'} />
        </AnimatePresence>
      </main>
      <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
        <Link
          className="text-lg font-light tracking-wider hover:underline hover:underline-offset-4 transition-all duration-200 hover:text-gray-400"
          href="/"
        >
          Me
        </Link>
        <Link
          className="text-lg font-light tracking-wider hover:underline hover:underline-offset-4 transition-all duration-200 hover:text-gray-400"
          href="/?section=portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-lg font-light tracking-wider hover:underline hover:underline-offset-4 transition-all duration-200 hover:text-gray-400"
          href="/?section=cv"
        >
          Curriculum
        </Link>
        <Link
          className="text-lg font-light tracking-wider hover:underline hover:underline-offset-4 transition-all duration-200 hover:text-gray-400"
          href="/?section=contact"
        >
          Contact
        </Link>
      </footer>
    </div>
  );
}
