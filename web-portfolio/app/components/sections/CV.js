import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin']
});

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

export default function CV() {
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