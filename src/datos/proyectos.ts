import { Proyecto } from '../tipos';

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Trabajos Universitarios - HedSystem",
    descripcion: "Plataforma completa para llevar a cabo la gestión de trabajos universitarios, dashboards y reportes, filtrado y exportación de datos en archivo PDF.",
    tecnologias: ["JavaScript","React", "Firebase", "TypeScript", "TypeScript","Tailwind CSS", "React Hook Form"],
    imagenUrl: "/portafolio/hedsystem.png",
    repositorioUrl: "https://github.com/ghrc19/Hed_System",
    destacado: true
  },
  {
    id: 2,
    titulo: "Bot de Discord - DJ Enigma",
    descripcion: "Bot musical profesional para Discord con gestión inteligente de colas, recomendaciones automáticas y controles interactivos para streaming de audio fluido.",
    tecnologias: ["Node.js", "API"],
    imagenUrl: "/portafolio/dj_enigma.jpg",
    repositorioUrl: "https://github.com/ghrc19/DjEnigma",
    destacado: false
  },
  {
    id: 3,
    titulo: "TaskDaily",
    descripcion: "Aplicación web moderna para la gestión de tareas diarias, con calendario interactivo, categorías personalizadas, temporizador y notificaciones.",
    tecnologias: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
    imagenUrl: "/portafolio/taskdaily.png",
    repositorioUrl: "https://github.com/ghrc19/ToDoList",
    destacado: true
  },
];