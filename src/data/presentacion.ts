import { type Presentation } from "@/types/type";

const presentation: Presentation = {
  mail: "felix21soc@gmail.com",
  phone: "+51906492166",
  location: "Lima, Perú",
  title: "Hola, Soy Saul Orellana 👋",
  description:
    "Hola soy Saul Orellana, desarrollador web fullstack con más de 3 años de experiencia en desarrollo web. Me gusta la programación y la tecnología.",
  socials: [
    {
      name: "X",
      url: "https://x.com/saul_dev21",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fsocdev/",
    },
    {
      name: "Github",
      url: "https://github.com/VikusS3/",
    },
  ],

  experience: [
    {
      name: "CodeMultiAll",
      role: "FullStack Developer",
      location: "Lima, Perú",
      duration: "Septiembre 2025 - Actualmente",
      description:
        "Desarrollé aplicaciones web y sistemas personalizados con Laravel y Next.js para clientes de Perú, Bolivia, Argentina y EE.UU., incluyendo tiendas virtuales, landing pages y plataformas interactivas. Implementé sistemas de inventario online/offline con sincronización automática, automatización de documentos y dashboards en tiempo real, optimizando procesos administrativos y reduciendo significativamente los tiempos de análisis y gestión.",
    },

    {
      name: "Universidad Nacional Mayor de San Marcos",
      role: "FullStack Developer",
      location: "Lima, Perú",
      duration: "Agosto 2024 - Agosto 2025",
      description:
        "Desarrollé una plataforma con Laravel y Next.js que optimizó un 50% los procesos administrativos, automatizó evaluaciones y encuestas reduciendo en 70% los tiempos de análisis, e integró gráficos dinámicos en tiempo real para mejorar la toma de decisiones.",
    },
    {
      name: "Macartur",
      role: "FullStack Developer",
      location: "Lima, Perú",
      duration: "Julio 2024 - Julio 2024",
      description:
        "Creé un mini sistema en Python para procesar archivos de Excel de ventas, automatizando su integración con la SUNAT y reduciendo en 80% el tiempo de registro manual.",
    },
    {
      name: "Freelance",
      role: "Desarrollador Frontend",
      location: "Lima, Perú",
      duration: "Febrero 2024 - Junio 2024",
      description:
        "Me enfoqué en mejorar sistemas existentes, optimizando rendimiento y usabilidad, además de aplicar buenas prácticas de diseño web para mejorar la experiencia de usuario.",
    },
  ],

  projects: [
    {
      name: "SUPERFIGUS",
      description:
        "Plataforma web interactiva orientada a la gestión y visualización de álbumes digitales coleccionables, con una interfaz moderna y dinámica enfocada en la experiencia del usuario.",
      technologies: ["Php", "Flight", "MySql", "TailwindCss"],
      ref: "https://superfigus.com/",
      image: "/figuritas.webp",
    },
    {
      name: "Tienda Nutri2u",
      description:
        "Tienda virtual enfocada en la venta de productos de nutrición y bienestar, con catálogo dinámico, navegación intuitiva y experiencia de compra optimizada para usuarios.",
      technologies: ["Php", "Flight", "MySql", "TailwindCss"],
      ref: "https://tienda.nutri2u.net/",
      image: "/nutri2.webp",
    },
    {
      name: "Resulta Srl",
      description:
        "Plataforma e-commerce especializada en la comercialización de equipos y productos médicos, con catálogo digital, interfaz accesible y proceso de compra orientado a una experiencia rápida y eficiente.",
      technologies: ["Php", "Flight", "MySql", "TailwindCss"],
      ref: "https://resultasrl.com/",
      image: "/resulta.webp",
    },
    {
      name: "HrmMicro",
      description:
        "Plataforma SaaS de control de asistencia laboral en la nube, enfocada en la gestión de personal mediante biometría facial, geolocalización, reportes en tiempo real y automatización de procesos de RRHH.",
      technologies: [
        "React",
        "React-Native",
        "Expo",
        "Tailwind",
        "TypeScript",
        "Supabase",
      ],
      ref: "https://hrmicro-web.vercel.app/",
      image: "/hrmicro.webp",
    },
    {
      name: "WhatsSell",
      description:
        "Aplicación web para la creacion de catálogos digitales y gestión de ventas a través de WhatsApp.",
      technologies: ["React", "Supabase", "Tailwind", "TypeScript"],
      ref: "https://whats-sell.vercel.app/",
      image: "/whats-sell.webp",
    },
    {
      name: "Gacha Countdown",
      description:
        "Aplicación web enfocada en el seguimiento y visualización de versiones de videojuegos, con estadísticas, historial de actualizaciones y una interfaz moderna orientada a la comunidad gamer.",
      technologies: ["React", "Astro", "Tailwind", "TypeScript"],
      ref: "https://version-counter.netlify.app/",
      image: "/gachacountdown.webp",
    },
    {
      name: "Gacha Sells",
      description:
        "Plataforma web para la venta de cada banner de los juegos gacha de Hoyoverse y Kurogames.",
      technologies: ["Astro", "Tailwind", "TypeScript"],
      ref: "https://gacha-sells.netlify.app/",
      image: "/gacha-sells.webp",
    },
  ],

  education: [
    {
      title: "Técnico en Computación e Informática",
      profession: "Desarrollador Web Fullstack",
      institution: "Instituto",
      year: "2025",
      description:
        "Formación técnica especializada en computación e informática, orientada al desarrollo de software y aplicaciones web.",
      image: "/titulo.webp",
    },
  ],

  certificates: [
    {
      name: "Certificado de Iniciación al Desarrollo con IA",
      organization: "BIG school",
      year: "2026",
      image: "/Certificado-Felix-Saul-Orellana-Contreras.webp",
    },
  ],
};

export default presentation;
