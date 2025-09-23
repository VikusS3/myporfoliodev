import { type Presentation } from "@/types/type";

const presentation: Presentation = {
  mail: "felix21soc@gmail.com",
  title: "Hola, Soy Saul Orellana 👋",
  // profile: "/profile.webp",
  description:
    "Hola soy Saul Orellana, desarrollador web fullstack con más de 2 años. Me gusta la programación y la tecnología.",
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
      name: "Portfolio Website",
      description: "Sitio personal desarrollado con Astro y Tailwind.",
      technologies: ["Astro", "Tailwind", "TypeScript"],
      ref: "https://github.com/VikusS3/Portfolio",
    },
    {
      name: "E-commerce Store",
      description: "Tienda en línea con carrito de compras y pasarela de pago.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      ref: "https://github.com/VikusS3/E-commerce-Store",
    },
    {
      name: "Dashboard Analytics",
      description:
        "Dashboard interactivo con gráficos y métricas en tiempo real.",
      technologies: ["React", "D3.js", "Node.js"],
      ref: "https://github.com/VikusS3/Dashboard-Analytics",
    },
  ],
};

export default presentation;
