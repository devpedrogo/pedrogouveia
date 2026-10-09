import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer id="contato" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Space_Grotesk]">
            <span className="text-white">Vamos</span>{' '}
            <span className="gradient-text-cyan">conversar</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1.5 bg-cyan-400 rounded-full neon-glow-cyan" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos, colaborações e oportunidades. Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        {/* Contact card -- comic panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border-4 border-black bg-gradient-to-br from-[#0a0f1d] to-[#070b15] p-8 sm:p-10 shadow-[8px_8px_0px_0px_#00f0ff] -rotate-1"
        >
          {/* Halftone background */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 halftone-pattern opacity-20" />
          </div>

          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-5 h-5 border-l-4 border-t-4 border-[#fed000] rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-5 h-5 border-r-4 border-t-4 border-[#fed000] rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-5 h-5 border-l-4 border-b-4 border-[#fed000] rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-r-4 border-b-4 border-[#fed000] rounded-br-lg" />

          <div className="relative grid sm:grid-cols-3 gap-5">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-black bg-slate-900/60 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#00f0ff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all comic-card-hover"
            >
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-cyan-400 flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_#000]">
                <Mail className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</p>
                <p className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors break-all">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-black bg-slate-900/60 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#00f0ff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all comic-card-hover"
            >
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-cyan-400 flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_#000]">
                <Linkedin className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">LinkedIn</p>
                <p className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">
                  pedroogouveia
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-black bg-slate-900/60 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#00f0ff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all comic-card-hover"
            >
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-cyan-400 flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_#000]">
                <Github className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">GitHub</p>
                <p className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">
                  devpedrogo
                </p>
              </div>
            </a>
          </div>

          {/* CTA button */}
          <div className="relative mt-8 flex justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-black bg-cyan-400 text-black font-bold shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#fed000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <Send className="w-5 h-5" strokeWidth={2.5} />
              Enviar Mensagem
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t-2 border-slate-800">
          <p className="text-sm text-slate-500 flex items-center gap-1.5 font-medium">
            Feito por <Github className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              {personalInfo.name}
            </a>
          </p>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
