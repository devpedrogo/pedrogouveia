import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/95 backdrop-blur-xl border-b-4 border-black shadow-[0_4px_0px_0px_#00f0ff]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#sobre"
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-black bg-[#fed000] group-hover:scale-110 transition-transform shadow-[3px_3px_0px_0px_#000] -rotate-3">
              <Terminal className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight neon-text-cyan font-[Space_Grotesk]">
              {/* {personalInfo.name.split(' ').map((w) => w[0]).join('')}
              <span className="text-white">.dev</span> */}
              devpedrogo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-300 hover:text-black hover:bg-[#fed000] rounded-lg border-2 border-transparent hover:border-black hover:shadow-[3px_3px_0px_0px_#000] transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-black bg-cyan-400 text-black font-bold text-sm shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#fed000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-black bg-[#fed000] text-black shadow-[3px_3px_0px_0px_#000]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#050811]/95 backdrop-blur-xl border-b-4 border-black"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg border-2 border-slate-700 text-slate-300 hover:text-black hover:bg-[#fed000] hover:border-black font-bold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-black bg-cyan-400 text-black font-bold shadow-[3px_3px_0px_0px_#000]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
