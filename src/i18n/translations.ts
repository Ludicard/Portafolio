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
