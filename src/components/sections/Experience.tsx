import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

type Project = {
  title: string;
  context?: string;
  description?: string;
  details?: string[];
  technologies: string[];
  impact?: string;
  note?: string;
};

type ExperienceData = {
  id: number;
  company: string;
  location: string;
  role: string;
  period: string;
  introduction: string;
  projects: Project[];
};

const experiences: ExperienceData[] = [
  {
    id: 1,
    company: "Alluc Electrónica",
    location: "Quito, Ecuador",
    role: "Full Stack Developer",
    period: "October 2025 — Present",
    introduction: "Working across full-stack development to build business applications, automate internal processes, and integrate modern technologies into real-world products.",
    projects: [
      {
        title: "E-commerce & Electronic Invoicing",
        context: "Developed a full-stack e-commerce and electronic invoicing platform designed to support the company's online sales and billing workflows. The system integrates sales operations and electronic invoicing in compliance with Ecuador's SRI requirements.",
        details: [
          "Designed and implemented the backend architecture using Node.js and Express.",
          "Developed the frontend using React.",
          "Built more than 20 REST API endpoints connecting the application with the database and business logic.",
          "Integrated electronic invoicing workflows according to SRI requirements.",
          "Designed and managed the MySQL data layer.",
          "Configured automated deployment through GitHub Actions and cPanel."
        ],
        technologies: ["React", "Node.js", "Express", "MySQL", "GitHub Actions"],
        impact: "20+ REST API endpoints"
      },
      {
        title: "AI-Powered Educational Platform",
        context: "Designed and developed an educational platform that uses generative AI to transform academic documents into structured learning content.",
        details: [
          "Designed a workflow for processing academic program PDFs.",
          "Integrated Google Gemini to generate structured courses, subjects, modules and assessments.",
          "Built the application logic responsible for transforming generated content into usable educational structures.",
          "Integrated HeyGen to provide a real-time video-avatar assistant.",
          "Implemented AI-assisted quiz evaluation and automated grading.",
          "Connected multiple external AI services into a unified application workflow."
        ],
        technologies: ["React", "Google Gemini", "HeyGen", "AI / Generative AI"],
        impact: "Multiple AI services integrated"
      }
    ]
  },
  {
    id: 2,
    company: "Elevadores Magno",
    location: "Quito, Ecuador",
    role: "Software Developer",
    period: "2024 — 2025",
    introduction: "Developed internal software and automation solutions focused on improving administrative workflows, data management, reporting and maintenance operations.",
    projects: [
      {
        title: "Maintenance & Billing Management System",
        context: "Designed and developed an internal management system to centralize customer information, equipment records, maintenance activities and billing operations.",
        details: [
          "Developed modules for customer and equipment management.",
          "Implemented maintenance scheduling and tracking for service activities.",
          "Built invoice and billing management functionality.",
          "Created dashboards for monitoring financial and operational information.",
          "Centralized administrative data that was previously handled across different workflows.",
          "Implemented a calendar to organize upcoming maintenance activities."
        ],
        technologies: []
      },
      {
        title: "Excel Administrative Automation",
        description: "Automated repetitive administrative data-entry workflows using Excel VBA macros, reducing manual work and minimizing data-entry errors.",
        technologies: ["Excel VBA"]
      },
      {
        title: "Corporate Website",
        description: "Designed and developed the company's institutional website using WordPress, providing a public-facing platform for corporate information and customer contact.",
        technologies: ["WordPress"]
      }
    ]
  }
];

const Experience = () => {
  const { t } = useLanguage();
  
  // Merge translated texts with static tech stack
  const localizedExperiences = experiences.map((exp, index) => {
    const tExp = t.experience.items[index];
    return {
      ...exp,
      period: tExp.period,
      introduction: tExp.introduction,
      projects: exp.projects.map((proj, pIndex) => ({
        ...proj,
        title: tExp.projects[pIndex].title,
        context: tExp.projects[pIndex].context,
        description: tExp.projects[pIndex].description,
        details: tExp.projects[pIndex].details
      }))
    };
  });

  return (
    <section id="experience" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <Reveal delay={0}>
            <h2 id="experience-heading" className="text-3xl font-bold text-white tracking-tight mb-2">{t.experience.sectionTitle}</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">{t.experience.sectionSubtitle}</p>
          </Reveal>
        </div>

        <div className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-20 pb-8">
          {localizedExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12">
              
              {/* Timeline marker */}
              <div className="absolute -left-[5.5px] top-2 z-10" aria-hidden="true">
                <Reveal delay={100} direction="none">
                  <div className="w-3 h-3 rounded-full bg-wine-light ring-4 ring-[#0a0c10]"></div>
                </Reveal>
              </div>
              
              <Reveal delay={200}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                  <span className="text-sm font-mono text-wine-light mt-1 md:mt-0 tracking-wide">{exp.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-6">
                  <span className="text-lg text-gray-300 font-medium">{exp.role}</span>
                  <span className="hidden sm:block text-white/20" aria-hidden="true">•</span>
                  <span className="text-sm text-gray-500">{exp.location}</span>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-3xl">
                  {exp.introduction}
                </p>
              </Reveal>

              <div className="space-y-6">
                {exp.projects.map((project, pIndex) => (
                  <Reveal key={project.title} delay={400 + (pIndex * 100)}>
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors duration-300">
                      <h4 className="text-white font-semibold text-lg mb-3">{project.title}</h4>
                      
                      {project.context && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.context}
                        </p>
                      )}
                      
                      {project.description && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      )}
                      
                      {project.details && project.details.length > 0 && (
                        <ul className="space-y-2 mb-5">
                          {project.details.map((detail, dIndex) => (
                            <li key={dIndex} className="text-gray-400 text-sm flex items-start">
                              <span className="text-wine-light mr-3 mt-1.5 text-[8px]" aria-hidden="true">■</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.note && (
                        <div className="mb-5 p-3 rounded-lg bg-wine/5 border border-wine/10">
                          <p className="text-sm text-wine-light/90 leading-relaxed italic">
                            * {project.note}
                          </p>
                        </div>
                      )}

                      {/* Footer: Tech & Impact */}
                      {(project.technologies.length > 0 || project.impact) && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5">
                          {project.technologies.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map(tech => (
                                <span key={tech} className="text-[11px] text-gray-300 font-mono bg-[#0a0c10] border border-white/10 px-2.5 py-1 rounded-md">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          ) : <div />}

                          {project.impact && (
                            <div className="flex items-center self-start sm:self-auto px-3 py-1.5 bg-wine/10 border border-wine/20 rounded-md shrink-0">
                              <svg className="w-3.5 h-3.5 text-wine-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span className="text-xs font-semibold text-wine-light tracking-wide">{project.impact}</span>
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
