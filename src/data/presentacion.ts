import { type Presentation } from "@/types/type";

const presentation: Presentation = {
  mail: "felix21soc@gmail.com",
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
      name: "Universidad Nacional Mayor de San Marcos",
      role: "Desarrollador de Software",
      location: "Lima, Perú",
      duration: "Agosto 2024 - Agosto 2025",
      description:
        "Desarrollé una plataforma con Laravel y Next.js que optimizó un 50% los procesos administrativos, automatizó evaluaciones y encuestas reduciendo en 70% los tiempos de análisis, e integró gráficos dinámicos en tiempo real para mejorar la toma de decisiones.",
    },
    {
      name: "Macartur",
      role: "Desarrollador de Software",
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
      name: "PractiPeru",
      description:
        "Plataforma para encontrar practicas pre profesionales y profesionales en Perú.",
      technologies: ["Astro", "Tailwind", "Supabase"],
      ref: "https://practiperu.pages.dev/",
    },
    {
      name: "Hrmicro",
      description: "Sistema de control de plantilla para microempresas.",
      technologies: ["Next.js", "React-Native", "Tailwind", "Supabase"],
      ref: "https://github.com/VikusS3/Excel-facturas",
    },
    {
      name: "Gacha Countdown",
      description:
        "Pagina web en la cual puedes ver la cuenta atras para las nuevas versiones de Gachas.",
      technologies: ["React", "Astro", "Tailwind", "TypeScript"],
      ref: "https://version-counter.netlify.app/",
    },
  ],
};

export default presentation;
