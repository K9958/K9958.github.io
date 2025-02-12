import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin']
});

export default function AboutMe() {
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
            className={`text-5xl sm:text-6xl font-semibold ${playfair.className} text-white`}
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
            Software developer with a strong focus on application development and modern web technologies. I actively follow the latest advancements in tech and strive to stay ahead of the curve. I enjoy tackling challenges, learning new things, and optimizing workflows with CI/CD, automation, and agile methodologies. I enjoy being part of projects where I can apply my technical knowledge while growing as a developer.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}