import { Proyecto } from '../tipos';

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Sistema de Gestión de Trabajos Universitarios - HedSystem",
    descripcion: "Plataforma completa para llevar a cabo la gestión de trabajos universitarios, dashboards y reportes, filtrado y exportación de datos en archivo PDF.",
    tecnologias: ["JavaScript","React", "Firebase", "TypeScript", "TypeScript","Tailwind CSS", "React Hook Form"],
    imagenUrl: "/portafolio/hedsystem.png",
    repositorioUrl: "https://github.com/ghrc19/Hed_System",
    demoUrl: "https://ghrc19.github.io/Hed_System/",
    destacado: true
  },
  {
    id: 2,
    titulo: "Bot de Discord - DJ Enigma",
    descripcion: "Bot musical profesional para Discord con gestión inteligente de colas, recomendaciones automáticas y controles interactivos para streaming de audio fluido.",
    tecnologias: ["Node.js", "API"],
    imagenUrl: "/portafolio/djenigma.png",
    repositorioUrl: "https://github.com/ghrc19/DjEnigma",
    destacado: false
  },
  {
    id: 3,
    titulo: "API Rest para Fintech",
    descripcion: "API robusta para aplicaciones financieras con autenticación JWT, transacciones seguras y integración bancaria.",
    tecnologias: ["Express", "PostgreSQL", "Docker", "JWT", "Swagger"],
    imagenUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    repositorioUrl: "https://github.com/tu-usuario/fintech-api",
    destacado: false
  },
  {
    id: 4,
    titulo: "Dashboard Analytics",
    descripcion: "Panel de control interactivo con visualizaciones de datos, gráficos en tiempo real y reportes personalizables.",
    tecnologias: ["React", "D3.js", "Material-UI", "Python", "Flask"],
    imagenUrl: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    repositorioUrl: "https://github.com/tu-usuario/analytics-dashboard",
    demoUrl: "https://analytics-demo.com",
    destacado: false
  },
  {
    id: 5,
    titulo: "Plataforma de Aprendizaje",
    descripcion: "Sistema completo de gestión de aprendizaje con cursos, evaluaciones, seguimiento de progreso y certificaciones.",
    tecnologias: ["Next.js", "Supabase", "Prisma", "Stripe", "AWS"],
    imagenUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    repositorioUrl: "https://github.com/tu-usuario/learning-platform",
    destacado: true
  },
  {
    id: 6,
    titulo: "App Móvil de Delivery",
    descripcion: "Aplicación móvil completa para delivery de comida con tracking en tiempo real, pagos y sistema de calificaciones.",
    tecnologias: ["React Native", "Node.js", "Socket.io", "Maps API"],
    imagenUrl: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    repositorioUrl: "https://github.com/tu-usuario/delivery-app",
    destacado: false
  }
];