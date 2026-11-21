import { useState } from 'react';
import Reveal from '../animations/Reveal';
import SectionHeading from '../decor/SectionHeading';
import TiltFrame from '../decor/TiltFrame';
import emaImg from '../../assets/images/EMA.png';
import naviImg from '../../assets/images/NAVI.png';
import flow1Img from '../../assets/images/flow1.jpeg';
import flow2Img from '../../assets/images/flow2.jpeg';
import flow3Img from '../../assets/images/flow3.jpeg';
import { useLanguage } from '../../context/LanguageContext';

type Status = 'live' | 'mobile' | 'development';

/** Slugs de Simple Icons para mostrar el logo junto a cada tecnología */
const TECH_ICONS: Record<string, string> = {
  React: 'react',
  'React Native': 'react',
  TypeScript: 'typescript',
  NestJS: 'nestjs',
  'Node.js': 'nodedotjs',
  Express: 'express',
  PostgreSQL: 'postgresql',
  Prisma: 'prisma',
  Docker: 'docker',
  'GitHub Actions': 'githubactions',
  Expo: 'expo',
  'Tailwind CSS': 'tailwindcss',
};

const TechChip = ({ name }: { name: string }) => {
  const [failed, setFailed] = useState(false);
  const slug = TECH_ICONS[name];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent-light text-xs font-medium rounded-full border border-accent/25">
      {slug && !failed && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ff6b81`}
          alt=""
          className="h-3.5 w-3.5"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {name}
    </span>
  );
};

const StatusBadge = ({ status, label }: { status: Status; label: string }) => {
  const styles: Record<Status, string> = {
    live: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
    mobile: 'text-gold border-gold/30 bg-gold/10',
    development: 'text-accent-light border-accent/30 bg-accent/10',
  };
  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${styles[status]}`}>
      <span className="relative flex h-2 w-2">
        {status === 'live' && <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden" />}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      {label}
    </span>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      ...t.projects.items[0],
      status: 'live' as Status,
      technologies: ["React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions"],
      link: "https://ema.aurelianova.tech/dashboard",
      url: "ema.aurelianova.tech",
      repo: "",
      image: emaImg,
      mobileImages: undefined,
    },
    {
      ...t.projects.items[1],
      status: 'mobile' as Status,
      technologies: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma", "REST API", "SOLID", "Design Patterns"],
      link: "",
      url: "",
      repo: "https://github.com/Ludicard/FlowPlan",
      image: "",
      mobileImages: [flow1Img, flow2Img, flow3Img],
    },
    {
      ...t.projects.items[2],
      status: 'development' as Status,
      technologies: ["React", "TypeScript", "Express", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
      link: "",
      url: "",
      repo: "",
      image: naviImg,
      mobileImages: undefined,
    },
  ];

  return (
    <section id="projects" className="flex flex-col justify-center py-24 sm:py-32" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="mb-24 sm:mb-32">
          <SectionHeading id="projects-heading" numeral="II" title={t.projects.sectionTitle} subtitle={t.projects.sectionSubtitle} />
        </div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            const isOpen = expanded === project.id;
            const highlights = [
              { label: t.projects.problem, text: project.problem },
              { label: t.projects.solution, text: project.solution },
              { label: t.projects.result, text: project.result },
            ];

            return (
              <article key={project.id} className="relative">
                {/* Número grande de fondo */}
                <span
                  className={`pointer-events-none select-none absolute -top-14 sm:-top-20 font-display font-bold text-[6rem] sm:text-[9rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(230,196,110,0.18)] ${reversed ? 'lg:right-0' : 'left-0'}`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={`relative flex flex-col gap-10 lg:gap-16 lg:items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* Visual */}
                  <Reveal delay={100} direction={reversed ? 'left' : 'right'} className="w-full lg:w-[55%] shrink-0">
                    <div className="w-full">
                      {project.mobileImages ? (
                        <TiltFrame className="rounded-3xl">
                          <div className="relative flex items-center justify-center w-full h-[380px] sm:h-[480px] rounded-3xl border border-white/5 bg-gradient-to-br from-surface-2/70 to-surface/30 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--rgb-accent),0.25),transparent_65%)]" aria-hidden="true" />
                            <img src={project.mobileImages[0]} alt={`${project.name} screen 1`} loading="lazy"
                              className="absolute w-[30%] h-auto rounded-2xl shadow-xl -rotate-6 -translate-x-[62%] opacity-75 border border-white/10" />
                            <img src={project.mobileImages[2]} alt={`${project.name} screen 3`} loading="lazy"
                              className="absolute w-[30%] h-auto rounded-2xl shadow-xl rotate-6 translate-x-[62%] opacity-75 border border-white/10" />
                            <img src={project.mobileImages[1]} alt={`${project.name} screen 2`} loading="lazy"
                              className="relative w-[36%] h-auto rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] border border-white/20" />
                          </div>
                        </TiltFrame>
                      ) : (
                        <TiltFrame className="rounded-2xl">
                          <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-[0_40px_80px_-40px_rgba(var(--rgb-accent),0.8)]">
                            {/* Barra de navegador */}
                            <div className="h-9 w-full flex items-center px-4 gap-2 border-b border-white/5 bg-gradient-to-r from-white/[0.07] to-transparent">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                              <span className="ml-4 hidden sm:flex items-center gap-1.5 h-5 px-3 rounded-md bg-white/5 text-[11px] text-gray-400 font-mono truncate">
                                {project.url ? (
                                  <>
                                    <svg className="h-3 w-3 text-emerald-400/80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" /></svg>
                                    {project.url}
                                  </>
                                ) : (
                                  <span className="w-24" />
                                )}
                              </span>
                            </div>
                            <img src={project.image} alt={project.name} loading="lazy" className="w-full h-auto block" />
                          </div>
                        </TiltFrame>
                      )}
                    </div>
                  </Reveal>

                  {/* Contenido */}
                  <Reveal delay={200} className="flex-1 min-w-0">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <StatusBadge status={project.status} label={t.projects.status[project.status]} />
                        <span className="font-display text-gold text-[11px] tracking-[0.25em] uppercase">{project.category}</span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">{project.name}</h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">{project.summary}</p>

                      <dl className="space-y-4 mb-8">
                        {highlights.map((h) => (
                          <div key={h.label} className="flex gap-4">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gradient-to-br from-gold to-accent-light" aria-hidden="true" />
                            <div>
                              <dt className="text-xs font-semibold uppercase tracking-widest text-accent-light mb-1">{h.label}</dt>
                              <dd className="text-sm text-gray-400 leading-relaxed">{h.text}</dd>
                            </div>
                          </div>
                        ))}
                      </dl>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => <TechChip key={tech} name={tech} />)}
                      </div>

                      {/* Descripción completa desplegable */}
                      <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p id={`project-desc-${project.id}`} className="text-sm text-gray-400 leading-relaxed border-l-2 border-accent/40 pl-4">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-white bg-gradient-to-r from-accent to-accent-deep shadow-[0_8px_24px_-8px_rgba(var(--rgb-accent),0.9)] hover:-translate-y-0.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light">
                            {t.projects.liveDemo}
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        )}
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-200 border border-white/15 hover:border-accent-light/60 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            {t.projects.sourceCode}
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : project.id)}
                          aria-expanded={isOpen}
                          aria-controls={`project-desc-${project.id}`}
                          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light rounded"
                        >
                          {isOpen ? t.projects.viewLess : t.projects.viewMore}
                          <svg className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Reveal>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
