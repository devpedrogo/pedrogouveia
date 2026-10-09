import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050811]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-black bg-[#fed000] text-black text-sm font-bold mb-6 shadow-[3px_3px_0px_0px_#000] -rotate-1"
            >
              <Sparkles className="w-4 h-4" strokeWidth={2.5} />
              Disponível para novos projetos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-[Space_Grotesk] leading-tight"
            >
              <span className="text-white">Olá, eu sou </span>
              <span className="gradient-text-cyan">{personalInfo.name}</span>
              <span className="inline-block ml-2" style={{ animation: 'wave 2.5s ease-in-out infinite', transformOrigin: '70% 70%' }}>
                👋
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 text-lg sm:text-xl text-slate-300 font-bold"
            >
              {personalInfo.role}
              <span className="block text-cyan-400/80 text-base mt-1">
                {personalInfo.specialization}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-base text-slate-400 max-w-xl lg:mx-0 mx-auto leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-cyan-400 text-black font-bold shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#fed000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                Ver Projetos
                <ArrowDown className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-slate-800 text-slate-200 font-bold shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#00f0ff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <Mail className="w-5 h-5" strokeWidth={2.5} />
                Entrar em Contato
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex gap-3 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg border-2 border-black bg-slate-800 text-slate-300 shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#00f0ff] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <Github className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg border-2 border-black bg-slate-800 text-slate-300 shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#00f0ff] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <Linkedin className="w-5 h-5" strokeWidth={2.5} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 flex items-center justify-center rounded-lg border-2 border-black bg-slate-800 text-slate-300 shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#00f0ff] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <Mail className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative float-animation">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-cyan-500/20 blur-2xl glow-pulse" />

              {/* Avatar container -- comic panel style */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-4 border-black bg-gradient-to-br from-[#0a0f1d] to-[#050811] overflow-hidden shadow-[8px_8px_0px_0px_#00f0ff] rotate-1">
                {/* Halftone pattern */}
                <div className="absolute inset-0 halftone-pattern opacity-30" />

                {/* SEU AVATAR ESTILO SIMPSONS (Substituindo o antigo SVG) */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src="/avatar.png"
                    alt="Meu Avatar estilo Simpsons" 
                    className="w-full h-full object-contain transform translate-y-2 drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  />
                </div>

                {/* Corner accents -- comic style */}
                <div className="absolute top-2 left-2 w-5 h-5 border-l-4 border-t-4 border-[#fed000] rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-5 h-4 border-r-4 border-t-4 border-[#fed000] rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-l-4 border-b-4 border-[#fed000] rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-5 h-5 border-r-4 border-b-4 border-[#fed000] rounded-br-lg" />
              </div>

              {/* Floating badges -- comic sticker style */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 px-3 py-1.5 rounded-lg border-2 border-black bg-[#fed000] text-black text-xs font-bold shadow-[3px_3px_0px_0px_#000] rotate-6"
              >
                Java
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -left-5 px-3 py-1.5 rounded-lg border-2 border-black bg-cyan-400 text-black text-xs font-bold shadow-[3px_3px_0px_0px_#000] -rotate-6"
              >
                Angular
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
