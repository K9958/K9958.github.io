import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin']
});


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
      const response = await fetch('https://formspree.io/f/mvgzqlqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
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
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
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
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
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
          className="w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
          hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg 
          transition-all duration-300 disabled:opacity-50 
          shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
          hover:-translate-y-0.5 active:translate-y-0 
          disabled:hover:translate-y-0 disabled:hover:shadow-blue-500/30"
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

export default function Contact() {
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
      Got a project or opportunity in mind? I&apos;d love to hear about it and will respond promptly.
      </p>
      <ContactForm />
    </motion.div>
  )
} 