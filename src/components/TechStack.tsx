import { motion } from 'framer-motion';
import { techStack, type Tech } from '@/data/portfolio';

const cardRotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const Icon = tech.icon;
  const isPrimary = tech.category === 'primary';
  const rotation = cardRotations[index % cardRotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
      className={`group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-4 border-black cursor-default text-center comic-card-hover ${rotation} hover:rotate-0 ${
        isPrimary
          ? 'bg-gradient-to-br from-[#0a0f1d] to-[#070b15] hover:shadow-[8px_8px_0px_0px_#00f0ff]'
          : 'bg-gradient-to-br from-[#0a0f1d] to-[#0d1117] hover:shadow-[8px_8px_0px_0px_#fed000]'
      }`}
      style={{
        boxShadow: isPrimary ? '4px 4px 0px 0px #00f0ff' : '4px 4px 0px 0px #fed000',
      }}
    >
      {/* Halftone pattern background */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
        <div className={`absolute inset-0 ${isPrimary ? 'halftone-pattern' : 'halftone-pattern-yellow'} opacity-30`} />
      </div>

      {/* Icon -- oversized comic style */}
      <div
        className={`relative w-14 h-14 rounded-xl border-2 border-black flex items-center justify-center transition-colors shadow-[3px_3px_0px_0px_#000] group-hover:scale-110 transition-transform ${
          isPrimary
            ? 'bg-[#fed000] text-black'
            : 'bg-slate-800 text-cyan-400 group-hover:bg-[#fed000] group-hover:text-black'
        }`}
      >
        <Icon className="w-8 h-8" strokeWidth={2.5} />
      </div>

      <div className="relative">
        <h3
          className={`font-bold text-sm font-[Space_Grotesk] transition-colors ${
            isPrimary ? 'text-cyan-300' : 'text-slate-200 group-hover:text-cyan-300'
          }`}
        >
          {tech.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{tech.description}</p>
      </div>

      {/* Primary badge -- comic sticker */}
      {isPrimary && (
        <span className="absolute -top-3 -right-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#fed000] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] rotate-6">
          CORE
        </span>
      )}
    </motion.div>
  );
}

export default function TechStack() {
  const primary = techStack.filter((t) => t.category === 'primary');
  const tools = techStack.filter((t) => t.category === 'tools');

  return (
    <section id="tecnologias" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Space_Grotesk]">
            <span className="text-white">Tecnologias &</span>{' '}
            <span className="gradient-text-cyan">Ferramentas</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded-full neon-glow-cyan" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            O arsenal que utilizo para construir aplicacoes robustas, escalaveis e performaticas.
          </p>
        </motion.div>

        {/* Primary stack */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-cyan-400/70 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-cyan-400/50" />
            Stack Principal
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {primary.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm font-bold text-cyan-400/70 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-cyan-400/50" />
            Ferramentas & Infraestrutura
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
