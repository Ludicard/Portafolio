import { useState } from 'react';
import Reveal from '../animations/Reveal';
import emaImg from '../../assets/images/EMA.png';
import naviImg from '../../assets/images/NAVI.png';
import flow1Img from '../../assets/images/flow1.jpeg';
import flow2Img from '../../assets/images/flow2.jpeg';
import flow3Img from '../../assets/images/flow3.jpeg';

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
      mobileImages: [flow1Img, flow2Img, flow3Img],
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
                    <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center p-6 lg:p-12 rounded-3xl border ${project.colorClasses.bg} ${project.colorClasses.border} shadow-2xl`}>
                      
                      {/* Visual */}
                      <div className="w-full lg:w-7/12 flex justify-center items-center">
                        {project.mobileImages ? (
                          <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[500px] lg:h-[550px]">
                            {/* Left Mobile Image */}
                            <img 
                              src={project.mobileImages[0]} 
                              alt={`${project.name} screen 1`} 
                              className="absolute w-[35%] lg:w-[32%] h-auto object-cover rounded-xl sm:rounded-2xl shadow-xl -rotate-6 -translate-x-[45%] lg:-translate-x-[55%] opacity-70 hover:opacity-100 hover:scale-105 hover:z-20 hover:-rotate-2 transition-all duration-500 z-0 border border-white/10" 
                            />
                            {/* Center Mobile Image */}
                            <img 
                              src={project.mobileImages[1]} 
                              alt={`${project.name} screen 2`} 
                              className="absolute w-[45%] lg:w-[38%] h-auto object-cover rounded-xl sm:rounded-3xl shadow-2xl z-10 hover:scale-105 transition-all duration-500 border border-white/20" 
                            />
                            {/* Right Mobile Image */}
                            <img 
                              src={project.mobileImages[2]} 
                              alt={`${project.name} screen 3`} 
                              className="absolute w-[35%] lg:w-[32%] h-auto object-cover rounded-xl sm:rounded-2xl shadow-xl rotate-6 translate-x-[45%] lg:translate-x-[55%] opacity-70 hover:opacity-100 hover:scale-105 hover:z-20 hover:rotate-2 transition-all duration-500 z-0 border border-white/10" 
                            />
                          </div>
                        ) : project.image ? (
                          <div className="relative group rounded-xl overflow-hidden shadow-2xl">
                            <div className={`absolute inset-0 bg-gradient-to-tr ${project.colorClasses.gradient} to-transparent opacity-20 z-10 pointer-events-none`}></div>
                            <img src={project.image} alt={project.name} className="w-full h-auto object-cover relative z-0 transition-transform duration-1000 group-hover:scale-[1.02]" />
                          </div>
                        ) : (
                          <div className={`w-full aspect-video rounded-xl flex items-center justify-center bg-white/5 border border-white/10 relative overflow-hidden shadow-2xl`}>
                            <div className={`absolute inset-0 bg-gradient-to-tr ${project.colorClasses.gradient} to-transparent opacity-40`}></div>
                            <span className="text-gray-500 font-mono text-sm relative z-10">Image Placeholder</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <p className="text-wine-light font-semibold tracking-wider text-xs uppercase mb-3">{project.category}</p>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">{project.name}</h3>
                        <div className="text-gray-400 mb-8 text-[15px] leading-loose space-y-4">
                          <p>{project.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2.5 mb-10">
                          {project.technologies.map(tech => (
                            <span key={tech} className="px-3.5 py-1.5 bg-[#1a1f2e]/50 text-gray-300 text-xs font-medium rounded-lg border border-white/10 shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-6 items-center">
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1} className="inline-flex items-center text-white bg-wine hover:bg-wine-light px-5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light shadow-lg">
                              Live Demo 
                              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          )}
                          {project.repo && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" tabIndex={isActive ? 0 : -1} className="inline-flex items-center text-gray-300 hover:text-white px-2 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine-light">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
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
