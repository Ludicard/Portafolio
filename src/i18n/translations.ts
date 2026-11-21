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
      subtitle: "SOFTWARE ENGINEERING STUDENT · FULL STACK DEVELOPER",
      greeting: "Hi, I'm ",
      name: "Sergio",
      tagline: "Building software, systems, and ideas into real products.",
      description: "I'm an 8th semester Software Engineering student and Full Stack Developer focused on building reliable software, exploring system architecture, and turning ideas into products that can grow.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      downloadCv: "Download CV",
      scrollDown: "Scroll Down",
      available: "Available for work",
      stats: [
        { value: "10", label: "Projects built" },
        { value: "2", label: "Companies" },
        { value: "20+", label: "REST endpoints built" }
      ]
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
          period: "October 2025 — November 2026",
          introduction: "Worked across full-stack development, building business applications, automating internal processes, and integrating modern technologies into real-world products.",
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
      viewMore: "Read full description",
      viewLess: "Show less",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      status: { live: "Live", mobile: "Mobile app", development: "In development" },
      items: [
        {
          id: 1,
          name: "Enterprise Management Assistant (EMA)",
          description: "A full-stack business management platform designed to help small and medium-sized companies manage their operations from a centralized system. EMA provides secure authentication, company and user management, client administration, invoice tracking, payment status management, and business dashboard metrics. The application was built with a modular architecture using React, TypeScript, NestJS, Prisma, and PostgreSQL, with the entire stack containerized using Docker Compose. The deployment is automated through GitHub Actions to a production VPS, with database migrations managed through Prisma and services isolated through Docker networks.",
          summary: "A business management platform that centralizes clients, invoices and payments for small and medium-sized companies.",
          problem: "SMEs track clients, invoices and payment status across scattered tools and spreadsheets.",
          solution: "A modular React + NestJS platform with secure authentication, multi-company user management, invoice tracking and a metrics dashboard.",
          result: "Running in production on a VPS, fully containerized with Docker and deployed automatically through GitHub Actions.",
          category: "Full Stack Application"
        },
        {
          id: 2,
          name: "OnAlert — Community Alarm System",
          description: "OnAlert is a community safety platform. The React Native app lets neighbors raise an SOS or report specific incidents (robbery, suspicious activity, fire, medical, violence, accident), each with an automatic priority, location and description. Every incident has an emergency chat and a 'I'm safe' confirmation so the community knows who is fine. Community admins validate, reject or close reports from a monitoring panel, and there is a history with statistics. The PHP and MySQL backend manages communities through invite codes, incidents and chat, and exposes endpoints that an ESP32 polls to play the right alarm sound in each zone.",
          summary: "A neighborhood safety app with an SOS button, incident reports and an emergency chat that also triggers physical alarms through an ESP32.",
          problem: "When something happens in a neighborhood, alerts spread slowly through chat groups and nobody knows who is safe.",
          solution: "Neighbors report incidents by type and priority, confirm they are safe and coordinate in a chat; admins validate reports, and a PHP/MySQL API queues commands that an ESP32 plays as an audible alarm in each zone.",
          result: "Mobile, backend and IoT working together: an alert sent from a phone sounds the physical alarm of the right zone.",
          category: "Mobile + IoT"
        },
        {
          id: 3,
          name: "Novera — Accounts Receivable System",
          description: "Novera manages accounts receivable. Invoices are registered with their SRI number, credit days and VAT, and the due date and totals are calculated automatically. Payments can be partial and made by transfer, deposit, check, cash or withholding, and the invoice status (pending, partial, overdue, paid, void) is always derived from the data, never set by hand. The dashboard shows invoiced vs. collected by month, aging of outstanding balances, invoices by status and top clients, with filters by period and client. It includes live search, sortable columns, bulk actions, Excel export, a guided importer for the historical spreadsheet and FactureroMovil reports, and the Django admin for tasks such as merging duplicated clients.",
          summary: "A web system that replaces an Excel spreadsheet for tracking invoices, partial payments and collections.",
          problem: "Invoices and payments were tracked by hand in a spreadsheet, so it was hard to know what was overdue and how much was still owed.",
          solution: "A Django app where each invoice's status is calculated from its payments and due date, with a collections dashboard, client statements, Excel import and export, and imports from FactureroMovil.",
          result: "Containerized with Docker and PostgreSQL and deployed to a VPS by a CI pipeline that runs the tests before every release.",
          category: "Web Application"
        },
        {
          id: 4,
          name: "FlowPlan — Intelligent Personal Planning System",
          description: "A full-stack personal productivity platform designed to help users organize their time through intelligent management of tasks, goals, and calendar events. FlowPlan combines a traditional calendar with a planning engine capable of identifying available time blocks and generating prioritized activity recommendations based on pending tasks. The system also includes work session tracking and a weekly productivity scoring system to encourage consistent habits. The project was developed by refactoring an existing MVC application into a decoupled REST API architecture, applying SOLID principles and design patterns such as Repository and Strategy to improve maintainability, scalability, reusability, and separation of concerns. The backend was built with Node.js and Express, using Prisma ORM with PostgreSQL, while the mobile client was developed with React Native and Expo.",
          summary: "A mobile productivity app that finds free time in your schedule and recommends what to work on next.",
          problem: "A calendar shows when you are busy, but not how to make the most of the free time you have.",
          solution: "A planning engine that detects available time blocks and suggests prioritized tasks, plus work-session tracking and a weekly productivity score.",
          result: "Refactored from an MVC app into a decoupled REST API using SOLID, Repository and Strategy patterns, with a React Native client.",
          category: "Full Stack Application"
        }
      ],
      moreTitle: "More projects",
      moreSubtitle: "Other things I've built",
      viewCode: "View code",
      more: [
        { name: "NAV-I", summary: "Website monitoring platform with scheduled scans, Lighthouse metrics, SSL tracking and AI-powered diagnoses through the Anthropic API.", category: "Full Stack" },
        { name: "Ordo Crescendi", summary: "Gamified personal-growth app: daily missions that earn EXP by route, a punishment roulette and missions generated by AI from a JSON format.", category: "Mobile" },
        { name: "Equipment Maintenance Assistant", summary: "Cross-platform .NET MAUI app to manage clients, work orders, quotes, invoices, payments and expenses for a maintenance business.", category: "Cross-platform" },
        { name: "MediClinic", summary: "Clinic management system for patients, appointments and reports, built in layers and checked with static analysis tools (Pylint, Flake8, Bandit, SonarQube).", category: "Backend" },
        { name: "AI Chatbot", summary: "ASP.NET MVC chatbot that switches between Google Gemini and OpenAI GPT using the Factory and Repository patterns.", category: "AI" },
        { name: "TaxiCoop Dispatch", summary: "Dispatch dashboard for a taxi cooperative with KPIs and driver and ride management (frontend prototype).", category: "Frontend" }
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
      copyEmail: "Copy email",
      copied: "Copied!",
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
      subtitle: "ESTUDIANTE DE INGENIERÍA DE SOFTWARE · DESARROLLADOR FULL STACK",
      greeting: "Hola, soy ",
      name: "Sergio",
      tagline: "Construyendo software, sistemas e ideas en productos reales.",
      description: "Soy un estudiante de 8vo semestre de Ingeniería de Software y Desarrollador Full Stack, enfocado en construir software confiable, explorar arquitectura de sistemas y convertir ideas en productos escalables.",
      viewProjects: "Ver Proyectos",
      getInTouch: "Contactar",
      downloadCv: "Descargar CV",
      scrollDown: "Bajar",
      available: "Disponible para trabajar",
      stats: [
        { value: "10", label: "Proyectos construidos" },
        { value: "2", label: "Empresas" },
        { value: "20+", label: "Endpoints REST creados" }
      ]
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
          period: "Octubre 2025 — Noviembre 2026",
          introduction: "Trabajé en desarrollo full-stack, construyendo aplicaciones empresariales, automatizando procesos internos e integrando tecnologías modernas en productos del mundo real.",
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
      viewMore: "Leer descripción completa",
      viewLess: "Mostrar menos",
      problem: "Problema",
      solution: "Solución",
      result: "Resultado",
      status: { live: "En producción", mobile: "App móvil", development: "En desarrollo" },
      items: [
        {
          id: 1,
          name: "Enterprise Management Assistant (EMA)",
          description: "Una plataforma full-stack de gestión empresarial diseñada para ayudar a pequeñas y medianas empresas a administrar sus operaciones desde un sistema centralizado. EMA ofrece autenticación segura, gestión de usuarios y empresas, administración de clientes, seguimiento de facturas, estado de pagos y métricas en un dashboard empresarial. La aplicación fue construida con una arquitectura modular utilizando React, TypeScript, NestJS, Prisma y PostgreSQL, con todo el stack en contenedores usando Docker Compose. El despliegue está automatizado mediante GitHub Actions a un VPS de producción, con migraciones de base de datos gestionadas a través de Prisma y servicios aislados mediante redes Docker.",
          summary: "Una plataforma de gestión empresarial que centraliza clientes, facturas y pagos para pequeñas y medianas empresas.",
          problem: "Las pymes llevan clientes, facturas y estados de pago en herramientas y hojas de cálculo dispersas.",
          solution: "Una plataforma modular en React + NestJS con autenticación segura, gestión de usuarios por empresa, seguimiento de facturas y un dashboard de métricas.",
          result: "En producción en un VPS, totalmente en contenedores Docker y desplegada automáticamente con GitHub Actions.",
          category: "Aplicación Full Stack"
        },
        {
          id: 2,
          name: "OnAlert — Sistema de Alarma Comunitaria",
          description: "OnAlert es una plataforma de seguridad comunitaria. La app en React Native permite a los vecinos lanzar un SOS o reportar incidentes específicos (robo, actividad sospechosa, incendio, emergencia médica, violencia, accidente), cada uno con prioridad automática, ubicación y descripción. Cada incidente tiene un chat de emergencia y una confirmación de 'Estoy bien' para que la comunidad sepa quién está a salvo. Los administradores validan, rechazan o cierran reportes desde un panel de monitoreo, y hay un historial con estadísticas. El backend en PHP y MySQL gestiona comunidades mediante códigos de invitación, incidentes y chat, y expone endpoints que un ESP32 consulta para reproducir la alarma adecuada en cada zona.",
          summary: "Una app de seguridad vecinal con botón SOS, reportes de incidentes y chat de emergencia que además activa alarmas físicas mediante un ESP32.",
          problem: "Cuando algo pasa en un barrio, las alertas se difunden lento por grupos de chat y nadie sabe quién está a salvo.",
          solution: "Los vecinos reportan incidentes por tipo y prioridad, confirman que están bien y se coordinan en un chat; los administradores validan los reportes y una API en PHP/MySQL encola comandos que un ESP32 reproduce como alarma sonora en cada zona.",
          result: "Móvil, backend e IoT trabajando juntos: una alerta enviada desde el teléfono hace sonar la alarma física de la zona correcta.",
          category: "Móvil + IoT"
        },
        {
          id: 3,
          name: "Novera — Sistema de Cuentas por Cobrar",
          description: "Novera gestiona las cuentas por cobrar. Las facturas se registran con su número SRI, días de crédito e IVA, y la fecha de cobro y los totales se calculan solos. Los pagos pueden ser abonos parciales por transferencia, depósito, cheque, efectivo o retención, y el estado de la factura (pendiente, abono parcial, vencida, pagada, anulada) siempre se deriva de los datos, nunca se escribe a mano. El panel muestra facturado vs. cobrado por mes, antigüedad de la cartera, facturas por estado y principales clientes, con filtros por periodo y cliente. Incluye búsqueda en vivo, columnas ordenables, acciones en lote, exportación a Excel, un importador guiado del Excel histórico y de los reportes de FactureroMovil, y el admin de Django para tareas como fusionar clientes duplicados.",
          summary: "Un sistema web que reemplaza una hoja de Excel para llevar facturas, abonos parciales y cobros.",
          problem: "Las facturas y los pagos se llevaban a mano en una hoja de cálculo, así que era difícil saber qué estaba vencido y cuánto se debía.",
          solution: "Una app en Django donde el estado de cada factura se calcula a partir de sus pagos y su fecha de cobro, con panel de cobros, estados de cuenta por cliente, importación y exportación a Excel e importación desde FactureroMovil.",
          result: "En contenedores con Docker y PostgreSQL, desplegada en un VPS mediante un pipeline de CI que ejecuta las pruebas antes de cada versión.",
          category: "Aplicación Web"
        },
        {
          id: 4,
          name: "FlowPlan — Sistema de Planificación Inteligente",
          description: "Una plataforma full-stack de productividad personal diseñada para ayudar a los usuarios a organizar su tiempo mediante la gestión inteligente de tareas, metas y eventos del calendario. FlowPlan combina un calendario tradicional con un motor de planificación capaz de identificar bloques de tiempo disponibles y generar recomendaciones de actividades priorizadas basadas en tareas pendientes. El sistema también incluye seguimiento de sesiones de trabajo y un sistema semanal de puntuación de productividad para fomentar hábitos consistentes. El proyecto se desarrolló refactorizando una aplicación MVC existente hacia una arquitectura REST API desacoplada, aplicando principios SOLID y patrones de diseño como Repository y Strategy para mejorar la mantenibilidad, escalabilidad y separación de preocupaciones. El backend fue construido con Node.js y Express, usando el ORM Prisma con PostgreSQL, mientras que el cliente móvil fue desarrollado con React Native y Expo.",
          summary: "Una app móvil de productividad que encuentra tu tiempo libre y te recomienda en qué trabajar a continuación.",
          problem: "Un calendario muestra cuándo estás ocupado, pero no cómo aprovechar el tiempo libre que tienes.",
          solution: "Un motor de planificación que detecta bloques de tiempo disponibles y sugiere tareas priorizadas, con seguimiento de sesiones y una puntuación semanal de productividad.",
          result: "Refactorizada de una app MVC a una REST API desacoplada con SOLID y los patrones Repository y Strategy, con cliente en React Native.",
          category: "Aplicación Full Stack"
        }
      ],
      moreTitle: "Más proyectos",
      moreSubtitle: "Otras cosas que he construido",
      viewCode: "Ver código",
      more: [
        { name: "NAV-I", summary: "Plataforma de monitoreo de sitios web con escaneos programados, métricas de Lighthouse, seguimiento de SSL y diagnósticos con IA mediante la API de Anthropic.", category: "Full Stack" },
        { name: "Ordo Crescendi", summary: "App de desarrollo personal gamificada: misiones diarias que suman EXP por ruta, una ruleta de castigos y misiones generadas por IA en formato JSON.", category: "Móvil" },
        { name: "Equipment Maintenance Assistant", summary: "App multiplataforma en .NET MAUI para gestionar clientes, órdenes de trabajo, proformas, facturas, pagos y gastos de un negocio de mantenimiento.", category: "Multiplataforma" },
        { name: "MediClinic", summary: "Sistema de gestión de clínica para pacientes, citas y reportes, construido por capas y revisado con análisis estático (Pylint, Flake8, Bandit, SonarQube).", category: "Backend" },
        { name: "Chatbot con IA", summary: "Chatbot en ASP.NET MVC que alterna entre Google Gemini y OpenAI GPT usando los patrones Factory y Repository.", category: "IA" },
        { name: "TaxiCoop Dispatch", summary: "Dashboard de despacho para una cooperativa de taxis con KPIs y gestión de conductores y viajes (prototipo frontend).", category: "Frontend" }
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
      copyEmail: "Copiar correo",
      copied: "¡Copiado!",
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  }
};
