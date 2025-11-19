// src/data/cvData.js
export const cabecera = {
  nombre: "Felipe Jimenez Sanchez",
  profesion: "Aprendiz Sena"
};

export const perfil = {
  texto:
    "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil, apasionado por la tecnología."
};

export const educacion = [
  {
    id: 1,
    titulo: "Ingeniería en Sistemas",
    universidad: "Sena",
    periodo: "2025-2027"
  }
];

export const experiencia = [
  {
    id: 1,
    puesto: "Desarrollador Full Stack",
    empresa: "Navisoft Gaming",
    periodo: "2022-2024"
  },
  {
    id: 2,
    puesto: "Aprendiz",
    empresa: "SENA",
    periodo: "2025-2027"
  }
];

export const stackTecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "JavaScript", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "cv",
    descripcion: "CV con react y vite.",
    enlace: "https://github.com/OrgGit01/GitHub.git"
  },
  {
    id: 2,
    nombre: "Api",
    descripcion: "api con node.js.",
    enlace: "https://github.com/Pipe103/Mi_primera-_Api.git"
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" }
];
