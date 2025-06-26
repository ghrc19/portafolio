import React from 'react';
import styles from '../estilos/PerfilPersonal.module.css';

interface HabilidadesTecnologiaProps {
  color: string;
  habilidades: string[];
}

const HabilidadesTecnologia: React.FC<HabilidadesTecnologiaProps> = ({ color, habilidades }) => {
  return (
    <div className={styles.habilidadesTecnologia}>
      {habilidades.map((hab, idx) => (
        <span key={idx} className={styles.habilidadTag} style={{ background: color }}>
          {hab}
        </span>
      ))}
    </div>
  );
};

export default HabilidadesTecnologia;
