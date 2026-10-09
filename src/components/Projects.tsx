import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const stickerRotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
      className="group relative rounded-2xl border-4 border-black bg-gradient-to-br from-[#0a0f1d] to-[#070b15] overflow-hidden comic-card-hover hover:shadow-[10px_10px_0px_0px_#00f0ff]"
      style={{ boxShadow: '6px 6px 0px 0px #fed000' }}
    >
      {/* Halftone overlay inside card */}
      <div className="pointer-events-none absolute inset-0 halftone-pattern opacity-30" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden border-b-4 border-black">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />

        {/* Folder icon badge -- comic sticker style */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-lg border-2 border-black bg-[#fed000] flex items-center justify-center shadow-[3px_3px_0px_0px_#000] -rotate-3">
          <FolderGit2 className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 space-y-4">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-[Space_Grotesk]">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges -- comic sticker style with rotations */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech, i) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-md text-xs font-bold border-2 border-black bg-[#fed000] text-black shadow-[2px_2px_0px_0px_#000] ${stickerRotations[i % stickerRotations.length]} hover:rotate-0 hover:scale-110 transition-transform cursor-default`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-black bg-slate-800 text-slate-200 text-sm font-bold hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors flex-1 justify-center shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#00f0ff] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-black bg-cyan-400 text-black text-sm font-bold hover:bg-cyan-300 transition-colors flex-1 justify-center shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#fed000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

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
            <span className="text-white">Projetos em Destaque</span>{' '}
            <span className="gradient-text-cyan">🚀</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-cyan-400 rounded-full neon-glow-cyan" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Uma seleção dos projetos que construi, focando em arquitetura escalável e experiências de usuário excepcionais.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
