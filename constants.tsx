import { Project, SocialLink, Skill } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/lukasfrontenddev',
    icon: 'Github',
    label: 'GitHub',
    color: 'bg-slate-800'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/lukas-richter-25b998322/',
    icon: 'Linkedin',
    label: 'LinkedIn',
    color: 'bg-blue-600'
  },
  {
    name: 'fiverr',
    url: 'https://www.fiverr.com/lukasisa',
    icon: 'Fiverr',
    label: 'Fiverr',
    color: 'bg-emerald-600'
  },
  {
    name: 'contra',
    url: 'https://contra.com/lukas_d02dbmfg/',
    icon: 'Briefcase',
    label: 'Contra',
    color: 'bg-orange-500'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Its this awesome website!',
    tags: ['Website'],
    imageUrl: 'https://raw.githubusercontent.com/lukasfrontenddev/portfolio-website/refs/heads/main/images/websitebanner.png',
    githubUrl: 'https://github.com/lukasfrontenddev/portfolio-website',
    liveUrl: 'https://lukasrichter.vercel.app/',
    category: 'web'
  }
];

export const SKILLS: Skill[] = [
  // FRONTEND
  { name: 'React / Angular', level: 'Advanced', category: 'Frontend' },
  { name: 'TypeScript', level: 'Intermediate', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' },
  { name: 'Vercel AI SDK', level: 'Learning', category: 'Frontend' },
  
  // BACKEND
  { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
  { name: 'PostgreSQL', level: 'Beginner', category: 'Backend' },
  { name: 'Gemini API', level: 'Learning', category: 'Backend' },
  { name: 'RESTful APIs', level: 'Intermediate', category: 'Backend' },
  
  // AI & AUTOMATION (NEW CATEGORY)
  { name: 'n8n Workflows', level: 'Learning', category: 'AI & Automation' },
  { name: 'Chatbot Development', level: 'Learning', category: 'AI & Automation' },
  { name: 'Business Process Automation', level: 'Learning', category: 'AI & Automation' },
  
  // GAME DEV
  { name: 'Unity / C#', level: 'Basic', category: 'Game Dev' },
  { name: 'Unreal / Blueprints', level: 'Basic', category: 'Game Dev' }
];

export const LUKAS_BIO = {
  short: "I'm a Full Stack Web Developer dedicated to building immersive digital experiences that combine technical precision with creative vision.",
  long: "Based in Germany, I specialize in building scalable web applications and normal websites. With over 5 years of experience, my approach is user-centric, focusing on performance, accessibility, and clean architecture."
};
