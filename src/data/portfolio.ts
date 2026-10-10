import {
  Database,
  Server,
  Code2,
  Container,
  GitBranch,
  Layout,
  Shield,
  Layers,
} from 'lucide-react';

import { JavaIcon, AngularIcon, SpringIcon } from '@/components/TechStack';

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Tech {
  name: string;
  category: 'primary' | 'tools';
  icon: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export const projects: Project[] = [
  {
    title: 'AI Movie Searcher',
    description:
      'Aplicação web (Spring Boot 3 + Angular) que usa a IA do Gemini (3.8-Flash) e a API do TMDB para interpretar sinopses e encontrar filmes e séries por linguagem natural.',
    image:
      '/aisearcher.png',
    techStack: ['Java', 'Spring Boot', 'Angular', 'REST API'],
    githubUrl: 'https://github.com/devpedrogo/aimoviesearcher.git',
    demoUrl: 'https://github.com/devpedrogo/ai-movie-searcher-frontend.git',
  },
  {
    title: 'Rede Solidária',
    description:
      'Plataforma web full-stack para gestão de doações e projetos sociais, desenvolvida com React e Spring Boot.',
    image:
      '/rede-solidaria.png',
    techStack: ['Java', 'Spring Boot', 'React', 'REST API'],
    githubUrl: 'https://github.com/devpedrogo/rede_solidaria_spring.git',
    demoUrl: 'https://rede-solidaria-frontend.vercel.app/',
  },
  {
    title: 'Módulo Completo de Autenticação',
    description:
      'Módulo base em Java com Spring Boot e Spring Security para autenticação e autorização via tokens JWT e refresh tokens com persistência no PostgreSQL.',
    image:
      '/auth.png',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/devpedrogo/authentication_project.git',
    demoUrl: 'https://github.com/devpedrogo/authentication_project.git',
  },
];

export const techStack: Tech[] = [
  {
    name: 'Java',
    category: 'primary',
    icon: JavaIcon,
    description: 'Backend robusto e escalável',
  },
  {
    name: 'Spring Boot',
    category: 'primary',
    icon: SpringIcon,
    description: 'Frameworks e microsservicos',
  },
  {
    name: 'Angular',
    category: 'primary',
    icon: AngularIcon,
    description: 'SPAs dinâmicas e responsivas',
  },
  {
    name: 'REST APIs',
    category: 'tools',
    icon: Server,
    description: 'Design e consumo de APIs',
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: Container,
    description: 'Containerização e deploy',
  },
  {
    name: 'PostgreSQL / MySQL',
    category: 'tools',
    icon: Database,
    description: 'Modelagem e otimização de dados',
  },
  {
    name: 'Git',
    category: 'tools',
    icon: GitBranch,
    description: 'Controle de versão e CI/CD',
  },
  {
    name: 'Security',
    category: 'tools',
    icon: Shield,
    description: 'JWT, OAuth2 e boas praticas',
  }
];

export const personalInfo = {
  name: 'Pedro Gouveia',
  role: 'Desenvolvedor Backend & Fullstack',
  specialization: 'Experiência prática em Java, Spring Boot & Angular',
  bio: 'Desenvolvo APIs sólidas e interfaces funcionais focando em código limpo, boa performance e facilidade de uso. Sempre pronto para aprender, evoluir e resolver problemas reais com tecnologia.',
  email: 'pedrogouveia.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pedroogouveia',
  github: 'https://github.com/devpedrogo',
  cvUrl: '/curriculo-devpedrogo.pdf',
};
