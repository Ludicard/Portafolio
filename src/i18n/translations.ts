export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      subtitle: "SOFTWARE ENGINEER · FULL STACK DEVELOPER",
      greeting: "Hi, I'm ",
      name: "Sergio",
      tagline: "Building software, systems, and ideas into real products.",
      description: "I'm an 8th semester Software Engineering student and Full Stack Developer focused on building reliable software, exploring system architecture, and turning ideas into products that can grow.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      downloadCv: "Download CV",
      scrollDown: "Scroll Down"
    },
    about: {
      sectionTitle: "About",
      sectionSubtitle: "Background & Approach",
      p1: "I'm a Software Engineering student and Full Stack Developer with a strong interest in building software that is useful, maintainable, and built to last. Alongside my studies, I build projects that allow me to explore ideas beyond the classroom and turn what I learn into practical systems.",
      p2: "I'm particularly interested in software architecture, backend development, cloud infrastructure, and the process of turning an idea into a working product. I enjoy understanding how things work under the hood and continuously improving the way I build, deploy, and maintain software. What motivates me most is taking something from an idea on paper to a real system that people can actually use.",
      corePhilosophy: "Core Philosophy",
      beUseful: "Be useful.",
      philosophyText: "I believe the most rewarding work is work that solves a real problem. I don't want to build software just for the sake of building it; I want the things I create to have a purpose, make someone's work easier, or turn a difficult problem into a simpler one. For me, the value of an engineer comes from the problems they can solve and the impact their work creates."
    },
    skills: {
      sectionTitle: "Technical Arsenal",
      sectionSubtitle: "Technologies & Tools",
      categories: [
        { name: "Frontend" },
        { name: "Mobile" },
        { name: "Backend" },
        { name: "Databases" },
        { name: "Artificial Intelligence" },
        { name: "DevOps & Infrastructure" },
        { name: "Tools & Development" },
        { name: "Testing & Performance" }
      ]
    },
    experience: {
      sectionTitle: "Experience",
      sectionSubtitle: "Where I've worked and what I've built",
      present: "Present",
      items: [
        {
          id: 1,
          period: "October 2025 — Present",
          introduction: "Working across full-stack development to build business applications, automate internal processes, and integrate modern technologies into real-world products.",
          projects: [
            {
              title: "E-commerce & Electronic Invoicing",
              context: "Developed a full-stack e-commerce and electronic invoicing platform designed to support the company's online sales and billing workflows. The system integrates sales operations and electronic invoicing in compliance with Ecuador's SRI requirements.",
              description: undefined,
              details: [
                "Designed and implemented the backend architecture using Node.js and Express.",
                "Developed the frontend using React.",
                "Built more than 20 REST API endpoints connecting the application with the database and business logic.",
                "Integrated electronic invoicing workflows according to SRI requirements.",
                "Designed and managed the MySQL data layer.",
                "Configured automated deployment through GitHub Actions and cPanel."
              ]
            },
            {
              title: "AI-Powered Educational Platform",
              context: "Designed and developed an educational platform that uses generative AI to transform academic documents into structured learning content.",
              description: undefined,
              details: [
                "Designed a workflow for processing academic program PDFs.",
                "Integrated Google Gemini to generate structured courses, subjects, modules and assessments.",
                "Built the application logic responsible for transforming generated content into usable educational structures.",
                "Integrated HeyGen to provide a real-time video-avatar assistant.",
                "Implemented AI-assisted quiz evaluation and automated grading.",
                "Connected multiple external AI services into a unified application workflow."
              ]
            }
          ]
        },
        {
          id: 2,
          period: "2024 — 2025",
          introduction: "Developed internal software and automation solutions focused on improving administrative workflows, data management, reporting and maintenance operations.",
          projects: [
            {
              title: "Maintenance & Billing Management System",
              context: "Designed and developed an internal management system to centralize customer information, equipment records, maintenance activities and billing operations.",
              description: undefined,
              details: [
                "Developed modules for customer and equipment management.",
                "Implemented maintenance scheduling and tracking for service activities.",
                "Built invoice and billing management functionality.",
                "Created dashboards for monitoring financial and operational information.",
                "Centralized administrative data that was previously handled across different workflows.",
                "Implemented a calendar to organize upcoming maintenance activities."
              ]
            },
            {
              title: "Excel Administrative Automation",
              context: undefined,
              description: "Automated repetitive administrative data-entry workflows using Excel VBA macros, reducing manual work and minimizing data-entry errors.",
              details: []
            },
            {
              title: "Corporate Website",
              context: undefined,
              description: "Designed and developed the company's institutional website using WordPress, providing a public-facing platform for corporate information and customer contact.",
              details: []
            }
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Featured Projects",
      sectionSubtitle: "Selected Work",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      imagePlaceholder: "Image Placeholder",
      items: [
        {
          id: 1,
          name: "Enterprise Management Assistant (EMA)",
          description: "A full-stack business management platform designed to help small and medium-sized companies manage their operations from a centralized system. EMA provides secure authentication, company and user management, client administration, invoice tracking, payment status management, and business dashboard metrics. The application was built with a modular architecture using React, TypeScript, NestJS, Prisma, and PostgreSQL, with the entire stack containerized using Docker Compose. The deployment is automated through GitHub Actions to a production VPS, with database migrations managed through Prisma and services isolated through Docker networks.",
          category: "Full Stack Application"
        },
        {
          id: 2,
          name: "FlowPlan — Intelligent Personal Planning System",
          description: "A full-stack personal productivity platform designed to help users organize their time through intelligent management of tasks, goals, and calendar events. FlowPlan combines a traditional calendar with a planning engine capable of identifying available time blocks and generating prioritized activity recommendations based on pending tasks. The system also includes work session tracking and a weekly productivity scoring system to encourage consistent habits. The project was developed by refactoring an existing MVC application into a decoupled REST API architecture, applying SOLID principles and design patterns such as Repository and Strategy to improve maintainability, scalability, reusability, and separation of concerns. The backend was built with Node.js and Express, using Prisma ORM with PostgreSQL, while the mobile client was developed with React Native and Expo.",
          category: "Full Stack Application"
        },
        {
          id: 3,
          name: "NAV-I",
          description: "A full-stack website monitoring and automated diagnosis platform designed to track the health, performance, and security of web applications. NAV-I provides automated scheduled scans, Lighthouse performance metrics, SSL certificate tracking, and AI-powered diagnoses using the Anthropic API. The platform features an interactive dashboard for managing alerts, tasks, and historical events across multiple websites. It was built with a modern architecture using React, TypeScript, Express, Prisma, and PostgreSQL, with background tasks managed via Node-Cron. The entire stack is containerized using Docker Compose for seamless deployment and isolated environments, while database migrations and data modeling are handled through Prisma.",
          category: "Full Stack Application"
        }
      ]
    },
    education: {
      sectionTitle: "Education",
      sectionSubtitle: "Academic background and ongoing education",
      inProgress: "In Progress",
      semester: "8th Semester",
      degree: "Software Engineering",
      university: "Universidad de Las Américas (UDLA)",
      location: "Quito, Ecuador",
      expectedGraduation: "Expected Graduation"
    },
    certifications: {
      sectionTitle: "Certifications",
      sectionSubtitle: "Professional Credentials",
      verify: "Verify Credential",
      items: [
        {
          id: 1,
          name: "Software Processes and Agile Practices",
          institution: "University of Alberta",
        },
        {
          id: 2,
          name: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
          institution: "IBM",
        }
      ]
    },
    contact: {
      title: "Let's work together.",
      subtitle: "Currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.",
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto"
    },
    hero: {
      subtitle: "INGENIERO DE SOFTWARE · DESARROLLADOR FULL STACK",
      greeting: "Hola, soy ",
      name: "Sergio",
      tagline: "Construyendo software, sistemas e ideas en productos reales.",
      description: "Soy un estudiante de 8vo semestre de Ingeniería de Software y Desarrollador Full Stack, enfocado en construir software confiable, explorar arquitectura de sistemas y convertir ideas en productos escalables.",
      viewProjects: "Ver Proyectos",
      getInTouch: "Contactar",
      downloadCv: "Descargar CV",
      scrollDown: "Bajar"
    },
    about: {
      sectionTitle: "Sobre mí",
      sectionSubtitle: "Contexto y Enfoque",
      p1: "Soy estudiante de Ingeniería de Software y Desarrollador Full Stack con un fuerte interés en construir software útil, mantenible y hecho para durar. Junto con mis estudios, construyo proyectos que me permiten explorar ideas más allá de las aulas y convertir lo que aprendo en sistemas prácticos.",
      p2: "Me interesa particularmente la arquitectura de software, el desarrollo backend, la infraestructura en la nube y el proceso de convertir una idea en un producto funcional. Disfruto entendiendo cómo funcionan las cosas por debajo y mejorando continuamente la forma en que construyo, despliego y mantengo software. Lo que más me motiva es llevar algo de una idea en papel a un sistema real que la gente pueda usar.",
      corePhilosophy: "Filosofía Principal",
      beUseful: "Ser útil.",
      philosophyText: "Creo que el trabajo más gratificante es aquel que resuelve un problema real. No quiero construir software solo por construirlo; quiero que las cosas que creo tengan un propósito, faciliten el trabajo de alguien o conviertan un problema difícil en uno más simple. Para mí, el valor de un ingeniero proviene de los problemas que puede resolver y del impacto que su trabajo genera."
    },
    skills: {
      sectionTitle: "Arsenal Técnico",
      sectionSubtitle: "Tecnologías y Herramientas",
      categories: [
        { name: "Frontend" },
        { name: "Móvil" },
        { name: "Backend" },
        { name: "Bases de Datos" },
        { name: "Inteligencia Artificial" },
        { name: "DevOps e Infraestructura" },
        { name: "Herramientas y Desarrollo" },
        { name: "Testing y Rendimiento" }
      ]
    },
    experience: {
      sectionTitle: "Experiencia",
      sectionSubtitle: "Dónde he trabajado y qué he construido",
      present: "Presente",
      items: [
        {
          id: 1,
          period: "Octubre 2025 — Presente",
          introduction: "Trabajando en desarrollo full-stack para construir aplicaciones empresariales, automatizar procesos internos e integrar tecnologías modernas en productos del mundo real.",
          projects: [
            {
              title: "E-commerce y Facturación Electrónica",
              context: "Desarrollé una plataforma full-stack de comercio electrónico y facturación diseñada para respaldar las ventas en línea y los flujos de facturación de la empresa. El sistema integra operaciones de ventas y facturación electrónica en cumplimiento con los requisitos del SRI de Ecuador.",
              description: undefined,
              details: [
                "Diseñé e implementé la arquitectura backend usando Node.js y Express.",
                "Desarrollé el frontend usando React.",
                "Construí más de 20 endpoints de API REST que conectan la aplicación con la base de datos y la lógica de negocio.",
                "Integré flujos de facturación electrónica según los requisitos del SRI.",
                "Diseñé y administré la capa de datos en MySQL.",
                "Configuré el despliegue automático mediante GitHub Actions y cPanel."
              ]
            },
            {
              title: "Plataforma Educativa con Inteligencia Artificial",
              context: "Diseñé y desarrollé una plataforma educativa que utiliza IA generativa para transformar documentos académicos en contenido de aprendizaje estructurado.",
              description: undefined,
              details: [
                "Diseñé un flujo de trabajo para procesar PDFs de programas académicos.",
                "Integré Google Gemini para generar cursos, materias, módulos y evaluaciones estructuradas.",
                "Construí la lógica de la aplicación responsable de transformar el contenido generado en estructuras educativas utilizables.",
                "Integré HeyGen para proporcionar un asistente de video avatar en tiempo real.",
                "Implementé la evaluación de cuestionarios asistida por IA y calificación automática.",
                "Conecté múltiples servicios externos de IA en un flujo de aplicación unificado."
              ]
            }
          ]
        },
        {
          id: 2,
          period: "2024 — 2025",
          introduction: "Desarrollé software interno y soluciones de automatización enfocadas en mejorar flujos de trabajo administrativos, gestión de datos, reportes y operaciones de mantenimiento.",
          projects: [
            {
              title: "Sistema de Gestión de Mantenimiento y Facturación",
              context: "Diseñé y desarrollé un sistema de gestión interno para centralizar la información de clientes, registros de equipos, actividades de mantenimiento y operaciones de facturación.",
              description: undefined,
              details: [
                "Desarrollé módulos para la gestión de clientes y equipos.",
                "Implementé la programación y seguimiento de actividades de mantenimiento.",
                "Construí la funcionalidad de gestión de facturas.",
                "Creé dashboards para monitorear información financiera y operativa.",
                "Centralicé datos administrativos que antes se manejaban en distintos flujos de trabajo.",
                "Implementé un calendario para organizar las próximas actividades de mantenimiento."
              ]
            },
            {
              title: "Automatización Administrativa con Excel",
              context: undefined,
              description: "Automaticé flujos de trabajo repetitivos de ingreso de datos administrativos usando macros VBA de Excel, reduciendo el trabajo manual y minimizando errores.",
              details: []
            },
            {
              title: "Sitio Web Corporativo",
              context: undefined,
              description: "Diseñé y desarrollé el sitio web institucional de la empresa utilizando WordPress, proporcionando una plataforma pública para información corporativa y contacto.",
              details: []
            }
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Proyectos Destacados",
      sectionSubtitle: "Trabajo Seleccionado",
      liveDemo: "Ver Demo",
      sourceCode: "Código Fuente",
      imagePlaceholder: "Sin Imagen",
      items: [
        {
          id: 1,
          name: "Enterprise Management Assistant (EMA)",
          description: "Una plataforma full-stack de gestión empresarial diseñada para ayudar a pequeñas y medianas empresas a administrar sus operaciones desde un sistema centralizado. EMA ofrece autenticación segura, gestión de usuarios y empresas, administración de clientes, seguimiento de facturas, estado de pagos y métricas en un dashboard empresarial. La aplicación fue construida con una arquitectura modular utilizando React, TypeScript, NestJS, Prisma y PostgreSQL, con todo el stack en contenedores usando Docker Compose. El despliegue está automatizado mediante GitHub Actions a un VPS de producción, con migraciones de base de datos gestionadas a través de Prisma y servicios aislados mediante redes Docker.",
          category: "Aplicación Full Stack"
        },
        {
          id: 2,
          name: "FlowPlan — Sistema de Planificación Inteligente",
          description: "Una plataforma full-stack de productividad personal diseñada para ayudar a los usuarios a organizar su tiempo mediante la gestión inteligente de tareas, metas y eventos del calendario. FlowPlan combina un calendario tradicional con un motor de planificación capaz de identificar bloques de tiempo disponibles y generar recomendaciones de actividades priorizadas basadas en tareas pendientes. El sistema también incluye seguimiento de sesiones de trabajo y un sistema semanal de puntuación de productividad para fomentar hábitos consistentes. El proyecto se desarrolló refactorizando una aplicación MVC existente hacia una arquitectura REST API desacoplada, aplicando principios SOLID y patrones de diseño como Repository y Strategy para mejorar la mantenibilidad, escalabilidad y separación de preocupaciones. El backend fue construido con Node.js y Express, usando el ORM Prisma con PostgreSQL, mientras que el cliente móvil fue desarrollado con React Native y Expo.",
          category: "Aplicación Full Stack"
        },
        {
          id: 3,
          name: "NAV-I",
          description: "Una plataforma full-stack de monitoreo y diagnóstico automatizado de sitios web diseñada para rastrear la salud, rendimiento y seguridad de aplicaciones web. NAV-I proporciona escaneos programados automatizados, métricas de rendimiento de Lighthouse, seguimiento de certificados SSL y diagnósticos impulsados por IA utilizando la API de Anthropic. La plataforma cuenta con un panel interactivo para gestionar alertas, tareas y eventos históricos en múltiples sitios web. Fue construida con una arquitectura moderna usando React, TypeScript, Express, Prisma y PostgreSQL, con tareas en segundo plano gestionadas mediante Node-Cron. Todo el stack está en contenedores usando Docker Compose para un despliegue sin problemas y entornos aislados, mientras que las migraciones de bases de datos y el modelado de datos se manejan a través de Prisma.",
          category: "Aplicación Full Stack"
        }
      ]
    },
    education: {
      sectionTitle: "Educación",
      sectionSubtitle: "Formación académica y estudios en curso",
      inProgress: "En Curso",
      semester: "8vo Semestre",
      degree: "Ingeniería de Software",
      university: "Universidad de Las Américas (UDLA)",
      location: "Quito, Ecuador",
      expectedGraduation: "Graduación Esperada"
    },
    certifications: {
      sectionTitle: "Certificaciones",
      sectionSubtitle: "Credenciales Profesionales",
      verify: "Verificar Credencial",
      items: [
        {
          id: 1,
          name: "Procesos de Software y Prácticas Ágiles",
          institution: "Universidad de Alberta",
        },
        {
          id: 2,
          name: "Flutter y Dart: Desarrollo de Apps Móviles iOS y Android",
          institution: "IBM",
        }
      ]
    },
    contact: {
      title: "Trabajemos juntos.",
      subtitle: "Actualmente abierto a nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, no dudes en contactarme.",
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  }
};
