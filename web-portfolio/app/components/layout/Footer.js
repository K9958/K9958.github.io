import Link from 'next/link';

export default function Footer({ isActive }) {
  return (
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
  );
} 