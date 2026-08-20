import { useState } from 'react';
import Reveal from '../animations/Reveal';
import emaImg from '../../assets/images/EMA.png';
import naviImg from '../../assets/images/NAVI.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Enterprise Management Assistant (EMA)",
      description: "A full-stack business management platform designed to help small and medium-sized companies manage their operations from a centralized system. EMA provides secure authentication, company and user management, client administration, invoice tracking, payment status management, and business dashboard metrics. The application was built with a modular architecture using React, TypeScript, NestJS, Prisma, and PostgreSQL, with the entire stack containerized using Docker Compose. The deployment is automated through GitHub Actions to a production VPS, with database migrations managed through Prisma and services isolated through Docker networks.",
      category: "Full Stack Application",
      technologies: ["React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions"],
      link: "https://ema.aurelianova.tech/dashboard",
      repo: "",
      image: emaImg,
      colorClasses: {
        bg: "bg-[#0b101e]",
        border: "border-blue-900/30",
        gradient: "from-blue-900/10",
      }
    },
    {
      id: 2,
      name: "FlowPlan — Intelligent Personal Planning System",
      description: "A full-stack personal productivity platform designed to help users organize their time through intelligent management of tasks, goals, and calendar events. FlowPlan combines a traditional calendar with a planning engine capable of identifying available time blocks and generating prioritized activity recommendations based on pending tasks. The system also includes work session tracking and a weekly productivity scoring system to encourage consistent habits. The project was developed by refactoring an existing MVC application into a decoupled REST API architecture, applying SOLID principles and design patterns such as Repository and Strategy to improve maintainability, scalability, reusability, and separation of concerns. The backend was built with Node.js and Express, using Prisma ORM with PostgreSQL, while the mobile client was developed with React Native and Expo.",
      category: "Full Stack Application",
      technologies: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma", "REST API", "SOLID", "Design Patterns"],
      link: "",
      repo: "https://github.com/Ludicard/FlowPlan",
      image: "", // Placeholder for the flowplan image
      colorClasses: {
        bg: "bg-[#0f0912]",
        border: "border-purple-900/30",
        gradient: "from-purple-900/10",
      }
    },
    {
      id: 3,
      name: "NAV-I",
      description: "A full-stack website monitoring and automated diagnosis platform designed to track the health, performance, and security of web applications. NAV-I provides automated scheduled scans, Lighthouse performance metrics, SSL certificate tracking, and AI-powered diagnoses using the Anthropic API. The platform features an interactive dashboard for managing alerts, tasks, and historical events across multiple websites. It was built with a modern architecture using React, TypeScript, Express, Prisma, and PostgreSQL, with background tasks managed via Node-Cron. The entire stack is containerized using Docker Compose for seamless deployment and isolated environments, while database migrations and data modeling are handled through Prisma.",
      category: "Full Stack Application",
      technologies: ["React", "TypeScript", "Express", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
      link: "",
      repo: "",
      image: naviImg,
      colorClasses: {
        bg: "bg-[#091210]",
        border: "border-emerald-900/30",
        gradient: "from-emerald-900/10",
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextProject();
    if (isRightSwipe) prevProject();
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevProject();
    if (e.key === 'ArrowRight') nextProject();
  };

  return (
    <section id="projects" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-12">
          <Reveal delay={0}>
            <h2 id="projects-heading" className="text-3xl font-bold text-white tracking-tight mb-2">Featured Projects</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Selected Work</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div 
            className="relative outline-none" 
            tabIndex={0} 
            onKeyDown={handleKeyDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
          >
            <div className="relative overflow-hidden">
              {projects.map((project, index) => {
                const isActive = index === currentIndex;
                return (
                  <div 
                    key={project.id} 
                    className={`transition-all duration-500 ease-in-out motion-reduce:transition-none motion-reduce:transform-none w-full ${isActive ? 'relative opacity-100 translate-x-0 z-10' : 'absolute top-0 left-0 opacity-0 translate-x-8 pointer-events-none'}`}
                    aria-hidden={!isActive}
                  >
                    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center p-6 lg:p-12 rounded-2xl border ${project.colorClasses.bg} ${project.colorClasses.border}`}>
                      
                      {/* Visual Placeholder */}
                      <div className="w-full lg:w-1/2">
                        <div className={`aspect-video rounded-xl flex items-center justify-center relative overflow-hidden group border border-white/5`}>
                          {project.image ? (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-tr ${project.colorClasses.gradient} to-transparent opacity-40 z-10`}></div>
                              <img src={project.image} alt={project.name} className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105" />
                            </>
                          ) : (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-tr ${project.colorClasses.gradient} to-transparent opacity-80`}></div>
                              <span className="text-gray-500 font-mono text-sm relative z-10">Image Placeholder</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <p className="text-wine-light font-medium text-sm mb-2">{project.category}</p>
                        <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-6">
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1} className="text-white hover:text-wine-light text-sm font-medium transition-colors underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light rounded">
                              Live Demo &rarr;
                            </a>
                          )}
                          {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1} className="text-gray-400 hover:text-wine-light text-sm font-medium transition-colors underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light rounded">
                              Source Code
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center mt-8 gap-8">
              <button 
                onClick={prevProject}
                className="p-2 text-gray-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light rounded-full"
                aria-label="Previous project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => goToProject(index)}
                    aria-label={`Go to project ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light rounded-full p-1"
                  >
                    <span className={`block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-wine-light' : 'bg-gray-700 hover:bg-gray-500'}`}></span>
                  </button>
                ))}
              </div>

              <button 
                onClick={nextProject}
                className="p-2 text-gray-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light rounded-full"
                aria-label="Next project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;
