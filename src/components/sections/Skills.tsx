import { useState } from 'react';
import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

type TechItem = {
  name: string;
  slug: string;
};

type TechCategory = {
  name: string;
  items: TechItem[];
};

const techArsenal: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" }
    ]
  },
  {
    name: "Mobile",
    items: [
      { name: "Android", slug: "android" },
      { name: "Kotlin", slug: "kotlin" }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Express", slug: "express" },
      { name: "Java", slug: "java" }, 
      { name: "Spring Boot", slug: "springboot" },
      { name: "Prisma", slug: "prisma" },
      { name: "REST API", slug: "openapiinitiative" }
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Firebase", slug: "firebase" }
    ]
  },
  {
    name: "Artificial Intelligence",
    items: [
      { name: "Anthropic Claude API", slug: "anthropic" },
      { name: "LLM Integration", slug: "openai" }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Docker Compose", slug: "docker" },
      { name: "Nginx", slug: "nginx" },
      { name: "Nginx Proxy Manager", slug: "nginxproxymanager" },
      { name: "Linux", slug: "linux" },
      { name: "AWS", slug: "amazonaws" }
    ]
  },
  {
    name: "Tools & Development",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "npm", slug: "npm" },
      { name: "Axios", slug: "axios" },
      { name: "node-cron", slug: "nodedotjs" }
    ]
  },
  {
    name: "Testing & Performance",
    items: [
      { name: "Playwright", slug: "playwright" },
      { name: "Lighthouse", slug: "lighthouse" }
    ]
  }
];

const TechIcon = ({ item, category }: { item: TechItem, category: string }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div 
      className="relative group flex items-center justify-center p-3 sm:p-4 rounded-xl border border-white/5 bg-[#0a0c10] hover:border-wine/60 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine outline-none cursor-default" 
      tabIndex={0} 
      aria-label={`${item.name} - ${category}`}
    >
      
      {/* Icon */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
        {!imgError ? (
          <img 
            src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
            alt={item.name}
            className="w-full h-full object-contain opacity-40 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-500 group-hover:text-white group-focus:text-white transition-colors text-center leading-none">
            {item.name.substring(0, 3).toUpperCase()}
          </div>
        )}
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-1 group-focus:opacity-100 group-focus:-translate-y-1 transition-all duration-300 ease-out z-20 w-max min-w-[120px] max-w-[200px] motion-reduce:transition-none motion-reduce:transform-none">
        {/* Invisible bridge to prevent hover loss */}
        <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>
        <div className="bg-[#0f1115] border border-wine/30 rounded-lg py-2.5 px-3 shadow-xl shadow-black/80 flex flex-col items-center justify-center relative">
          <span className="text-white text-sm font-semibold whitespace-normal text-center leading-tight mb-1">{item.name}</span>
          <span className="text-wine-light text-[10px] font-bold uppercase tracking-widest text-center">{category}</span>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0f1115] border-b border-r border-wine/30 transform rotate-45"></div>
        </div>
      </div>
      
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();
  
  // Merge the translated category names with the static techArsenal
  const localizedTechArsenal = techArsenal.map((category, index) => ({
    ...category,
    name: t.skills.categories[index].name
  }));

  return (
    <section id="skills" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5 bg-[#08090b]" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <Reveal delay={0}>
            <h2 id="skills-heading" className="text-3xl font-bold text-white tracking-tight mb-2">{t.skills.sectionTitle}</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">{t.skills.sectionSubtitle}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-12">
          {localizedTechArsenal.map((category, index) => (
            <Reveal key={category.name} delay={100 + (index * 50)}>
              <div className="flex flex-col">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">{category.name}</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {category.items.map((item) => (
                    <TechIcon key={item.name} item={item} category={category.name} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
