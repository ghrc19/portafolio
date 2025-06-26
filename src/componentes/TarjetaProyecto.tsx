import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Proyecto } from '../tipos';
import styles from '../estilos/Proyectos.module.css';

interface TarjetaProyectoProps {
  proyecto: Proyecto;
}

const TarjetaProyecto: React.FC<TarjetaProyectoProps> = ({ proyecto }) => {
  return (
    <div className={`${styles.tarjeta} ${proyecto.destacado ? styles.tarjetaDestacada : ''}`}>
      {proyecto.destacado && (
        <div className={styles.destacadoBadge}>
          <Star size={16} />
          Destacado
        </div>
      )}
      
      <div className={styles.imagenContenedor}>
        <img 
          src={proyecto.imagenUrl} 
          alt={proyecto.titulo}
          className={styles.imagen}
        />
        <div className={styles.overlay}>
          <a 
            href={proyecto.repositorioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botonOverlay}
          >
            <Github size={18} />
            Código
          </a>
          {proyecto.demoUrl && (
            <a 
              href={proyecto.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonOverlay}
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
      
      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{proyecto.titulo}</h3>
        <p className={styles.descripcion}>{proyecto.descripcion}</p>
        
        <div className={styles.tecnologias}>
          {proyecto.tecnologias.map((tecnologia, index) => (
            <span key={index} className={styles.tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>
        
        <div className={styles.acciones}>
          <a 
            href={proyecto.repositorioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.botonAccion} ${styles.botonSecundario}`}
          >
            <Github size={18} />
            Repositorio
          </a>
          {proyecto.demoUrl && (
            <a 
              href={proyecto.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.botonAccion} ${styles.botonPrimario}`}
            >
              <ExternalLink size={18} />
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarjetaProyecto;