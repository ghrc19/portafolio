export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagenUrl: string;
  repositorioUrl: string;
  demoUrl?: string;
  destacado: boolean;
}

export interface Habilidad {
  nombre: string;
  icono: string;
  porcentaje: number;
}

export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
}